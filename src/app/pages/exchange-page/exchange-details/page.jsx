import Link from "next/link";
import React from "react";

export default function ExchangeDetails() {
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
                    <div className="text-lg font-semibold">Bkash: 1200</div>
                    <p className="text-gray-500 my-2">to</p>
                    <div className="text-lg font-semibold">Webmoney: 11 USD</div>
                </div>

                {/* User Details */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
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
                            name="email"
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
                            name="phone"
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="address"
                            className="text-sm font-medium text-gray-700"
                        >
                            Your Webmoney Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="p-3 border rounded-md w-full"
                            placeholder="Enter your Webmoney address"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                    <Link href={'/'}>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                            Back
                        </button>
                    </Link>
                    <Link href={'/pages/exchange-page/final-cheak'} >
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
