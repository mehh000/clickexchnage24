'use client';

import React, { useEffect, useState } from 'react';
import { EditIcon, TrashIcon, PlusCircleIcon } from 'lucide-react';
import { getAllUsers } from '../../service/getAllUser';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getAllUsersData = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data); // Directly set the users data
        console.log('all users data:', data); // Log the fetched data
      } catch (error) {
        console.log('failed to get users because:', error);
      }
    };
    getAllUsersData();
  }, []);

  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const handleEditUser = (id) => {
    console.log('Edit User ID:', id);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4">
      <button
        onClick={handleAddUser}
        className="mb-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
      >
        <PlusCircleIcon size={20} />
        Add User
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg">
          <thead>
            <tr className="bg-orange-400 border-b">
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Total Exchange</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Total Refer</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Refer Earn</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-3 text-sm text-gray-700">{user.fullName}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.phone}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.totalExchange}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.totalRefer}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.referEarn}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditUser(user.id)}
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <EditIcon size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-500"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add User</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="mb-4 w-full p-2 border rounded focus:outline-none focus:ring"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-4 w-full p-2 border rounded focus:outline-none focus:ring"
              />
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
