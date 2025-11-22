import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../components/Button/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [allTask, setAllTask] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  // ✅ Load tasks from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setAllTask(saved);
  }, []);

  const onSubmit = (data) => {
    if (editingTaskId) {
      // Update existing task
      setAllTask((prev) => {
        const updated = prev.map((task) =>
          task.id === editingTaskId
            ? {
                ...task,
                name: data.title,
                description: data.description,
              }
            : task
        );
        localStorage.setItem("tasks", JSON.stringify(updated));
        return updated;
      });

      Swal.fire({
        icon: "success",
        title: "Task Updated!",
        text: "Your task has been updated successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      setEditingTaskId(null);
    } else {
      // Add new task
      const obj = {
        id: Date.now().toString(),
        name: data.title,
        description: data.description,
        uid: currentUser.uid,
        createdAt: new Date().toISOString(),
      };

      setAllTask((prev) => {
        const updated = [...prev, obj];
        localStorage.setItem("tasks", JSON.stringify(updated));
        return updated;
      });

      Swal.fire({
        icon: "success",
        title: "Task Added!",
        text: "Your task has been added successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    reset();
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setValue("title", task.name);
    setValue("description", task.description);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    reset();
  };

  const handleDelete = async (taskId, taskName) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${taskName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0B2540",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setAllTask((prev) => {
        const updated = prev.filter((task) => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(updated));
        return updated;
      });

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Your task has been deleted.",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const currentUserTasks = useMemo(() => {
    let filtered = allTask.filter((item) => item.uid === currentUser.uid);

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Default: sort by creation date (newest first)
      filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return filtered;
  }, [allTask, currentUser.uid, searchTerm, sortOrder]);

  const handleSortToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-secondary mb-2">
              {editingTaskId ? "Edit Task" : "Add Task"}
            </h1>
            <p className="text-gray-600">Manage your tasks efficiently</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                placeholder="Enter Task Title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Description
              </label>
              <textarea
                {...register("description", { required: "Description is required" })}
                placeholder="Enter task description..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex gap-3">
              <Button variant="filled" type="submit" className="flex-1">
                {editingTaskId ? "Update Task" : "Add Task"}
              </Button>
              {editingTaskId && (
                <Button
                  variant="hollow"
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-secondary">
                Your Tasks ({currentUserTasks.length})
              </h2>
              <Button
                variant="hollow"
                onClick={() => navigate("/users")}
                className="text-sm px-4 py-1"
              >
                ← Back to Users
              </Button>
            </div>

            {/* Search and Sort Controls */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search tasks by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                {/* Sort Button */}
                <Button
                  variant="hollow"
                  onClick={handleSortToggle}
                  className="flex items-center gap-2"
                >
                  <span>Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </Button>
              </div>

              {/* Results Count */}
              {searchTerm && (
                <p className="text-sm text-gray-600">
                  Found {currentUserTasks.length} task{currentUserTasks.length !== 1 ? 's' : ''} matching your search
                </p>
              )}
            </div>
          </div>

          {currentUserTasks.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <p className="text-gray-600 text-lg">No tasks found.</p>
              <p className="text-gray-500 text-sm mt-2">
                Create your first task to get started!
              </p>
            </div>
          ) : (
            currentUserTasks.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.createdAt && (
                      <p className="text-xs text-gray-400 mt-3">
                        Created: {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="hollow"
                      onClick={() => handleEdit(item)}
                      className="p-2 min-w-0 px-2 text-primary hover:bg-primary hover:bg-opacity-10"
                      title="Edit task"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="hollow"
                      onClick={() => handleDelete(item.id, item.name)}
                      className="p-2 min-w-0 px-2 text-red-600 hover:bg-red-50 !border-red-600"
                      title="Delete task"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
