import React, { useEffect, useState } from "react";
import {
  Trash2,
  Edit,
  Plus,
  Check,
  User,
  Mail,
  Calendar,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Modal from "../components/Ui/Modal";
import FormField from "../components/Ui/FormField"
import { Formik, Form } from "formik";
import { userSchema } from "../validation/userValidation";
import { toast } from "react-toastify";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "../lib/slice/userSlice";

const UserTab = () => {
  const { data, error, isLoading } = useGetUserQuery();
  const users = data?.result?.users;
  const [createUser, { isLoading: creating }] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();
  const handleDeleteUser = async () => {
    try {
      await deleteUser(currentUser.id).unwrap();
      toast.success("User deleted successfully!");
      setShowDeleteModal(false);
      const totalPages = Math.ceil((users?.length - 1) / usersPerPage);
      if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(totalPages);
      }
    } catch (e) {
      if (e?.data?.message) {
        toast.error(e.data.message);
      } else {
        toast.error("Failed to delete user!");
      }
    }
  };
  // Calculate pagination
  const totalUsers = users?.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser);
  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePerPageChange = (newPerPage) => {
    setUsersPerPage(newPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const delta = 2;
    const pages = [];
    const rangeStart = Math.max(1, currentPage - delta);
    const rangeEnd = Math.min(totalPages, currentPage + delta);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    return pages;
  };
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }

        .table-row {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .table-row::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .table-row:hover::before {
          left: 100%;
        }

        .table-row:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.02),
            rgba(147, 51, 234, 0.02)
          );
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2px;
          border-radius: 16px;
        }

        .gradient-border-inner {
          background: white;
          border-radius: 14px;
          padding: 0;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .button-3d {
          transform: perspective(1px) translateZ(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .button-3d::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .button-3d:hover::before {
          left: 100%;
        }

        .button-3d:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .button-3d:active {
          transform: translateY(0) scale(0.98);
        }

        .stat-card {
          transition: all 0.3s ease;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .stat-hed {
          transition: all 0.3s ease;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .stat-bd {
          transition: all 0.3s ease;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .stat-card:hover {
          transform: translateY(-5px) rotate(1deg);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
        }

        .pagination-button {
          transition: all 0.2s ease;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .pagination-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .pagination-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-button.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Stats */}
          <div className="mb-8 animate-slideInLeft">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 ">
                  User Management
                </h1>
                <p className="text-gray-600 text-lg mt-3">Manage your users</p>
              </div>

              <button
                onClick={() => setShowCreateModal(true)}
                className="button-3d cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold text-lg shadow-lg"
              >
                <Plus size={24} className="animate-pulse-custom" />
                Create User
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Total Users",
                  value: users?.length,
                  icon: User,
                  color: "blue",
                },
                {
                  label: "Male Users",
                  value: users?.filter((u) => u.gender === "Male")?.length,
                  icon: User,
                  color: "green",
                },
                {
                  label: "Female Users",
                  value: users?.filter((u) => u.gender === "Female").length,
                  icon: User,
                  color: "blue",
                },
                {
                  label: "Avg Salary",
                  value:
                    users?.length > 0
                      ? `$${(
                          users?.reduce(
                            (acc, u) => acc + parseFloat(u.salary),
                            0
                          ) / users?.length
                        ).toFixed(2)}`
                      : "$0.00",
                  icon: DollarSign,
                  color: "green",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-card rounded-xl p-4 animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">
                        {stat.label}
                      </p>
                      <p
                        className={`text-2xl font-bold text-${stat.color}-600  `}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full max-w-7xl mx-auto  rounded-lg shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="px-6 py-4 border-b stat-hed border-gray-100 animate-scaleIn ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="ml-4 text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    User Database
                  </span>
                </div>

                {/* Items per page selector */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Show:</label>
                  <select
                    value={usersPerPage}
                    onChange={(e) =>
                      handlePerPageChange(Number(e.target.value))
                    }
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <span className="text-sm text-gray-600">entries</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="stat-bd text-white">
                    <th className="w-20 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">ID</div>
                    </th>
                    <th className="w-48 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        NAME
                      </div>
                    </th>
                    <th className="w-56 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        EMAIL
                      </div>
                    </th>
                    <th className="w-24 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        GENDER
                      </div>
                    </th>
                    <th className="w-32 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        BIRTH DATE
                      </div>
                    </th>
                    <th className="w-28 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        SALARY
                      </div>
                    </th>
                    <th className="w-32 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        CREATED
                      </div>
                    </th>
                    <th className="w-32 px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {!currentUsers?.length ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-6 py-12 text-center stat-bd"
                      >
                        <div className="flex flex-col items-center">
                          <User className="w-12 h-12 text-gray-400 mb-4" />
                          <p className="text-lg text-gray-500 mb-2">
                            No users found
                          </p>
                          <p className="text-sm text-gray-400">
                            Start by creating your first user
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentUsers.map((user, index) => (
                      <tr key={user.id} className="stat-bd duration-200">
                        <td className="w-20 px-4 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            #{user.id}
                          </span>
                        </td>
                        <td className="w-48 px-4 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">
                              {user.name.charAt(0)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-white truncate">
                                {user.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="w-56 px-4 py-4">
                          <div className="flex items-center text-sm text-white">
                            <Mail
                              size={14}
                              className="mr-2 text-white flex-shrink-0"
                            />
                            <span className="truncate">{user.email}</span>
                          </div>
                        </td>
                        <td className="w-24 px-4 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                              user.gender === "Male"
                                ? "bg-blue-100 text-blue-800"
                                : user.gender === "Female"
                                ? "bg-pink-100 text-pink-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {user.gender}
                          </span>
                        </td>
                        <td className="w-32 px-4 py-4">
                          <div className="flex items-center text-sm text-white">
                            <Calendar
                              size={14}
                              className="mr-2 text-white flex-shrink-0"
                            />
                            <span>{formatDate(user.date_of_birth)}</span>
                          </div>
                        </td>
                        <td className="w-28 px-4 py-4">
                          <div className="flex items-center">
                            <DollarSign
                              size={14}
                              className="mr-1 text-green-500 flex-shrink-0"
                            />
                            <span className="text-sm font-semibold text-green-600">
                              ${user.salary}
                            </span>
                          </div>
                        </td>
                        <td className="w-32 px-4 py-4">
                          <span className="text-sm text-white">
                            {formatDate(user.created_at)}
                          </span>
                        </td>
                        <td className="w-32 px-4 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setCurrentUser(user);
                                setShowEditModal(true);
                              }}
                              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white p-2 rounded-lg cursor-pointer shadow-md transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                              title="Edit User"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => {
                                setCurrentUser(user);
                                setShowDeleteModal(true);
                              }}
                              className="bg-gradient-to-r cursor-pointer from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white p-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                              title="Delete User"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 stat-bd border-t border-gray-200">
                <div className="flex items-center justify-between">
                  {/* Pagination Info */}
                  <div className="text-sm text-gray-600">
                    Showing {indexOfFirstUser + 1} to{" "}
                    {Math.min(indexOfLastUser, totalUsers)} of {totalUsers}{" "}
                    entries
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center space-x-1">
                    {/* First Page */}
                    <button
                      onClick={goToFirstPage}
                      disabled={currentPage === 1}
                      className="pagination-button p-2 rounded-lg bg-white text-gray-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="First Page"
                    >
                      <ChevronsLeft size={16} />
                    </button>

                    {/* Previous Page */}
                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      className="pagination-button p-2 rounded-lg bg-white text-gray-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Previous Page"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`pagination-button px-3 py-2 rounded-lg text-sm font-medium ${
                          currentPage === pageNumber
                            ? "active"
                            : "bg-white text-gray-600 hover:bg-blue-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}

                    {/* Show ellipsis if there are more pages */}
                    {currentPage + 2 < totalPages && (
                      <span className="px-3 py-2 text-gray-500">...</span>
                    )}

                    {/* Show last page if not in range */}
                    {currentPage + 2 < totalPages && (
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="pagination-button px-3 py-2 rounded-lg text-sm font-medium bg-white text-gray-600 hover:bg-blue-50"
                      >
                        {totalPages}
                      </button>
                    )}

                    {/* Next Page */}
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className="pagination-button p-2 rounded-lg bg-white text-gray-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Next Page"
                    >
                      <ChevronRight size={16} />
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={goToLastPage}
                      disabled={currentPage === totalPages}
                      className="pagination-button p-2 rounded-lg bg-white text-gray-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Last Page"
                    >
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Table Footer */}
            <div className="px-6 py-4 stat-bd">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total {users?.length} users</span>
                <span>Last updated: {new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create User Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New User"
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            gender: "",
            date_of_birth: "",
            salary: "",
          }}
          validationSchema={userSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await createUser(values).unwrap();
              toast.success("User created successfully!");
              resetForm();
              setShowCreateModal(false);
            } catch (e) {
              if (e?.data?.message) {
                toast.error(e.data.message);
              } else {
                toast.error("Failed to delete user!");
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <FormField label="Name" name="name" />
              <FormField label="Email" name="email" type="email" />
              <FormField label="Gender" name="gender" as="select">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </FormField>
              <FormField
                label="Date of Birth"
                name="date_of_birth"
                type="date"
              />
              <FormField
                label="Salary"
                name="salary"
                type="number"
                step="0.01"
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2  border border-gray-300 text-white rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating || isSubmitting}
                  className="button-3d px-4 py-2 bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white rounded-lg flex items-center gap-2"
                >
                  <Check size={16} />{" "}
                  {creating ? "Submiting...." : "Create User"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>

      {/*  Edit User Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit User"
      >
        {currentUser && (
          <Formik
            initialValues={{
              name: currentUser.name || "",
              email: currentUser.email || "",
              gender: currentUser.gender || "",
              date_of_birth: currentUser.date_of_birth || "",
              salary: currentUser.salary || "",
            }}
            enableReinitialize
            validationSchema={userSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                await updateUser({ id: currentUser.id, ...values }).unwrap();
                toast.success("User updated successfully!");
                resetForm();
                setShowEditModal(false);
              } catch (e) {
                if (e?.data?.message) {
                  toast.error(e.data.message);
                } else {
                  toast.error("Failed to delete user!");
                }
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <FormField label="Name" name="name" />
                <FormField label="Email" name="email" type="email" />
                <FormField label="Gender" name="gender" as="select">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </FormField>
                <FormField
                  label="Date of Birth"
                  name="date_of_birth"
                  type="date"
                />
                <FormField
                  label="Salary"
                  name="salary"
                  type="number"
                  step="0.01"
                />

                {/* Buttons */}
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 border border-gray-300 text-white rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-3d px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <Check size={16} /> Update User
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Confirm Delete"
      >
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <Trash2 className="h-8 w-8 text-red-600" />
          </div>
          {currentUser && (
            <div className="mb-6">
              <p className="text-lg font-semibold text-white mb-2">
                Delete User?
              </p>
              <p className="text-sm text-white">
                <strong>{currentUser.name}</strong> ({currentUser.email}) will
                be permanently deleted. This action cannot be undone.
              </p>
            </div>
          )}
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteUser}
              className="button-3d px-4 py-2 bg-gradient-to-r  cursor-pointer from-red-500 to-pink-600 text-white rounded-lg flex items-center gap-2"
            >
              <Trash2 size={16} /> Delete User
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserTab;
