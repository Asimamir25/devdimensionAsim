import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import {
  fetchUsers,
  setSearchTerm,
  setSortOrder,
  setCurrentPage,
} from '../store/slices/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const {
    filteredUsers,
    loading,
    error,
    searchTerm,
    sortOrder,
    currentPage,
    usersPerPage,
  } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSortToggle = () => {
    dispatch(setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'));
  };
  const handleAddTask=()=>{
    navigate('/task')
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Card 1: Authenticated User Info */}
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-secondary mb-4">User Account</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Logged in as:</p>
                <p className="text-lg font-semibold text-secondary">
                  {currentUser?.email}
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  User ID: {currentUser?.uid}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="filled"
                  onClick={handleAddTask}
                  className="bg-secondary text-white hover:opacity-90"
                >
                  + Add Task
                </Button>
                <Button
                  variant="filled"
                  onClick={handleLogout}
                  className="bg-secondary text-white hover:opacity-90"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Users Search and List */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-secondary mb-6">Users List</h2>

            {/* Search and Sort Controls */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={handleSearch}
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
              <p className="text-sm text-gray-600">
                Showing {currentUsers.length} of {filteredUsers.length} users
              </p>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                <p className="mt-4 text-gray-600">Loading users...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                <p className="font-semibold">Error loading users:</p>
                <p>{error}</p>
                <Button
                  variant="filled"
                  onClick={() => dispatch(fetchUsers())}
                  className="mt-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Retry
                </Button>
              </div>
            )}

            {/* Users Table */}
            {!loading && !error && (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentUsers.length > 0 ? (
                        currentUsers.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-secondary">
                                {user.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-600">{user.email}</div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                            No users found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="hollow"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </Button>
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "filled" : "hollow"}
                              onClick={() => handlePageChange(page)}
                              className={
                                currentPage === page
                                  ? 'bg-secondary text-white border-secondary'
                                  : ''
                              }
                            >
                              {page}
                            </Button>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="px-2">...</span>;
                        }
                        return null;
                      })}
                      <Button
                        variant="hollow"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

