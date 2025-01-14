import React from 'react';
import { UserIcon } from 'lucide-react'; // Importing an icon from lucide-react

function OverView_card({
    name,
    number,
    Icon
}) {
    return (
        <div className="p-4 flex flex-col md:flex-row rounded-lg gap-6 bg-white shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center flex-col text-center">
                <p className="text-3xl font-bold text-gray-800">
                   {number}
                </p>
                <hr className="my-2 border-gray-300" />
                <p className="text-gray-600">{name}</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-blue-500 p-2 rounded-full">
                    <Icon size={30} color="white" />
                </div>
            </div>
        </div>
    );
}

export default OverView_card;