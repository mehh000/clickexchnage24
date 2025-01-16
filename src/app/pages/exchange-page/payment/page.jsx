import Link from "next/link";
import React from "react";

export default function Paymnt() {
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
                        <div className="p-4 rounded-full border-4 border-blue-500 bg-blue-100 text-blue-600 font-semibold">
                            STEP 2
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Confirmation</p>
                    </div>
                    <div className="w-12 border-t-2 border-dashed border-gray-400"></div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full border-4 border-blue-500 bg-blue-100 text-blue-600 font-semibold">
                            <span className="">STEP</span> <span className="">3</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Complete</p>
                    </div>
                </div>

                {/* Exchange Info */}
                <div className="flex w-full justify-around flex-row items-center text-center">
                    <div className="text-lg font-semibold">Bkash: 1200</div>
                    <p className="text-red-500 my-2 font-bold ">TO</p>
                    <div className="text-lg font-semibold">Webmoney: 11 USD</div>
                </div>

                {/* Titles */}
                <div className="flex items-center justify-around w-full">
                    <div className="h-1 w-full bg-emerald-500"></div>
                    <h1 className="">Exchnage Confirmation</h1>
                    <div className="h-1 w-full bg-emerald-500"></div>
                </div>

                {/* details table */}
                <div className="flex flex-col w-full max-w-md mx-auto bg-white  rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 p-4 border-b bg-gray-100">
                        <span className="font-semibold text-gray-600">Exchange ID</span>
                        <span className="text-gray-800">JHBDFDSFV</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b">
                        <span className="font-semibold text-gray-600">Sending Amount</span>
                        <span className="text-gray-800">1200</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b bg-gray-100">
                        <span className="font-semibold text-gray-600">Receiving Amount</span>
                        <span className="text-gray-800">12$</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b">
                        <span className="font-semibold text-gray-600">Receive Address</span>
                        <span className="text-gray-800">U23462347</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100">
                        <span className="font-semibold text-gray-600">Nagat P</span>
                        <span className="text-gray-800">0199128334</span>
                    </div>
                </div>


                {/* payment details */}
                <div className="flex flex-col gap-2 p-3">
                    <h1 className="">Enter TrXID</h1>
                    <input type="text" className="p-3 w-full border-2" placeholder="TrxID here" />
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
                            Confirm
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
