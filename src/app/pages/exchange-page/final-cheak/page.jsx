'use client'


import { userContext } from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";


export default function FInalCheak() {
    const { exchangeData } = useContext(userContext)
    console.log('from the final cheak page', exchangeData)
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
                    <div className="w-12 border-t-2 border-dashed border-blue-400"></div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full border-4 border-blue-500 bg-blue-100 text-blue-600 font-semibold">
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
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row item-center gap-3">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <h1 className="">
                            {exchangeData.name != null ? exchangeData.name : 'loading'}
                        </h1>
                    </div>
                    <div className="flex flex-row item-center gap-3">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <h1 className="">
                            {exchangeData.email != null ? exchangeData.email : 'loading'}

                        </h1>

                    </div>
                    <div className="flex flex-row item-center gap-3">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Your Phone
                        </label>
                        <h1 className="">
                            {exchangeData.phoneNumber != null ? exchangeData.phoneNumber : 'loading'}

                        </h1>

                    </div>
                    <div className="flex flex-row item-center gap-3">
                        <label
                            htmlFor="address"
                            className="text-sm font-medium text-gray-700"
                        >
                            Your {exchangeData != null ? exchangeData.ReciveMethod : 'loading'}  Address
                        </label>
                        <h1 className="">
                            {exchangeData.address != null ? exchangeData.address : 'loading'}

                        </h1>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                    <Link href={'/pages/exchange-page/exchange-details'}>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                            Back
                        </button>
                    </Link>
                    <Link href={'/pages/exchange-page/payment'} >
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
