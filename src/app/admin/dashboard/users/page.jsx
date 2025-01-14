'use client';

import React, { useState } from 'react';
import { EditIcon, TrashIcon, PlusCircleIcon } from 'lucide-react';

// Fake User Data
const fakeUsers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `+123456789${i}`,
  totalExchange: Math.floor(Math.random() * 1000),
  totalRefer: Math.floor(Math.random() * 100),
  referEarn: `$${(Math.random() * 100).toFixed(2)}`,
}));

const Users = () => {
  const [users, setUsers] = useState(fakeUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Total Exchange</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Total Refer</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Refer Earn</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-3 text-sm text-gray-700">{user.name}</td>
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
