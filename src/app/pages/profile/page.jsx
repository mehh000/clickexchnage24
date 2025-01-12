'use client'

import React from 'react';
import { User, DollarSign, Users, ArrowRight, Clipboard } from 'lucide-react';

const Profile = () => {
    const referralId = "REF123456"; // Example referral ID

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralId);
        
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-full p-6">
                    <User size={100} className="text-gray-600" />
                </div>
                <h1 className="text-2xl font-bold mt-4">John Doe</h1>
                <p className="text-gray-600">john.doe@example.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p> {/* Phone number */}
                <div className="flex items-center mt-2">
                    <span className="text-gray-600">Referral ID: {referralId}</span>
                    <Clipboard size={20} className="text-gray-600 cursor-pointer ml-2" onClick={copyToClipboard} />
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <DollarSign size={24} className="text-green-500" />
                    <h2 className="text-lg font-semibold">Total Exchanges</h2>
                    <p className="text-2xl">150</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <Users size={24} className="text-blue-500" />
                    <h2 className="text-lg font-semibold">Total Referrals</h2>
                    <p className="text-2xl">30</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <DollarSign size={24} className="text-yellow-500" />
                    <h2 className="text-lg font-semibold">Referral Earnings</h2>
                    <p className="text-2xl">$500</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Exchange History</h2>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>Exchange #1</span>
                            <span className="text-gray-600">Completed <ArrowRight size={16} /></span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Exchange #2</span>
                            <span className="text-gray-600">Completed <ArrowRight size={16} /></span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Exchange #3</span>
                            <span className="text-gray-600">Pending <ArrowRight size={16} /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
