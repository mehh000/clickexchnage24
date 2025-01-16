'use client'


import { userContext } from "@/context/userContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExchangeDetails() {
    const { exchangeData, setExchnage, user } = useContext(userContext);
   const router = useRouter();

    // Define states for form fields
    const [name, setName] = useState(user?.fullName || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
    const [address, setAddress] = useState("");

    const [exchangeId, setExchangeId] = useState("");

    // Generate exchangeId on component mount
    useEffect(() => {
        const generateExchangeId = () => {
            const randomString = Math.random().toString(36).substring(2, 10); // Random alphanumeric string
            const symbols = "!@#$%^&*"; // Symbols to pick from
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            return `${randomString.toUpperCase()}${randomSymbol}`;
        };

        setExchangeId(generateExchangeId());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can process the form data here
        // console.log("Name:", name);
        // console.log("Email:", email);
        // console.log("Phone Number:", phoneNumber);
        // console.log("Address:", address);
        setExchnage((pre) => ({
            ...pre,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            exchangeId: exchangeId,

        }));
     console.log('cheaking data from details page', exchangeData)
     router.push('/pages/exchange-page/final-cheak');

    };

    return (
        <div className="w-full bg-gray-100  pt-5 pb-5 flex items-center justify-center">
            <div className="p-6 rounded-lg shadow-lg max-w-3xl w-full bg-white flex flex-col gap-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full border-4 border-blue-500 bg-blue-100 text-blue-600 font-semibold">
                            STEP 1
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Your Details</p>
                    </div>
                    <div className="w-12 border-t-2 border-dashed border-gray-400"></div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full border-2 border-gray-400 bg-gray-100 text-gray-500 font-semibold">
                            STEP 2
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Confirmation</p>
                    </div>
                    <div className="w-12 border-t-2 border-dashed border-gray-400"></div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full border-2 flex justify-center md:flex-row flex-col items-start border-gray-400 bg-gray-100 text-gray-500 font-semibold">
                            <span className="">STEP</span> <span className="">3</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Complete</p>
                    </div>
                </div>

                {/* Exchange Info */}
                <div className="flex flex-row gap-5 items-center text-center">
                    <div className="text-lg font-semibold"> {exchangeData != null ? exchangeData.SendMethod : 'loading'} : {exchangeData != null ? exchangeData.sendAmount : 'loading'} </div>
                    <p className="text-gray-500 my-2">to</p>
                    <div className="text-lg font-semibold">{exchangeData != null ? exchangeData.ReciveMethod : 'loading'} : {exchangeData != null ? exchangeData.receiveAmount : 'loading'} </div>
                </div>

                {/* User Details */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name || ''}
                            onChange={(e) => setName(e.target.value)}
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Your Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phoneNumber || ''}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-sm font-medium text-gray-700">
                            Your {exchangeData != null ? exchangeData.ReciveMethod : 'loading'}  Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={address || ''}
                            onChange={(e) => setAddress(e.target.value)}
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your Webmoney address"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Link href="/pages/exchange-page/exchange-details">
                            <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                Back
                            </button>
                        </Link>
                       
                         <button onClick={handleSubmit} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Next
                        </button>
                       
                       
                    </div>
                </form>

                {/* Buttons */}

            </div>
        </div>
    );
}
