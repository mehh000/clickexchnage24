'use client'

import Link from "next/link";
import React, { useContext, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { userContext } from "@/context/userContext";
import { addExchnage } from "@/service/addExchangeData";
import { useRouter } from "next/navigation";

const supabase = createClient(
    'https://xhzvyxzcokorepcwbykl.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoenZ5eHpjb2tvcmVwY3dieWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMjk0MjYsImV4cCI6MjA1MjYwNTQyNn0.iMkotOut1YTtdSpUC1sSYBOVZsQbdPqUHd4ichSL6yo'
);

export default function Paymnt() {

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const { exchangeData, setExchnage } = useContext(userContext)
    const [trxID, setTrxID] = useState('');
    const router = useRouter()



    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const uploadImage = async () => {
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        setUploading(true);

        const fileName = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
            .from("paymentImages") // Replace with your bucket name
            .upload(fileName, file);
        console.log('after upload:', data)
        setImageUrl(data.fullPath)
        setUploading(false);

        if (error) {
            console.error("Error uploading file:", error.message);
            alert("Failed to upload image. Please try again.");
        } else {
            const { publicUrl } = supabase.storage
                .from("paymentImages")
                .getPublicUrl(fileName);

            alert(`File uploaded successfully. URL: ${publicUrl}`);
        }
    };
    const handleDataSubmit = async () => {

        const fullImageUrl = `https://xhzvyxzcokorepcwbykl.supabase.co/storage/v1/object/public/${imageUrl}`
          const paymentStatus = 'pendding'
        setExchnage((pre) => ({
            ...pre,
            trxID: trxID,
            paymentImage: fullImageUrl,
            status: paymentStatus
        }));

        console.log('from the payment page,',exchangeData);
        try {
            await addExchnage(exchangeData);
            console.log('exchnage data added successfully');
            router.push('/');
            
        } catch (error) {
            console.log('faild to add data to firebase', error);
        }

    }

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
                <div className="flex flex-row gap-5 items-center justify-around text-center">
                    <div className="text-lg font-semibold"> {exchangeData != null ? exchangeData.SendMethod : 'loading'} : {exchangeData != null ? exchangeData.sendAmount : 'loading'} </div>
                    <p className="text-red-600 font-bold my-2">TO</p>
                    <div className="text-lg font-semibold">{exchangeData != null ? exchangeData.ReciveMethod : 'loading'} : {exchangeData != null ? exchangeData.receiveAmount : 'loading'} </div>
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
                        <span className="text-gray-800">
                            {exchangeData.exchangeId != null ? exchangeData.exchangeId : 'loading'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b">
                        <span className="font-semibold text-gray-600">Sending Amount</span>
                        <span className="text-gray-800">
                            {exchangeData.sendAmount != null ? exchangeData.sendAmount : 'loading'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b bg-gray-100">
                        <span className="font-semibold text-gray-600">Receiving Amount</span>
                        <span className="text-gray-800">
                            {exchangeData.receiveAmount != null ? exchangeData.receiveAmount : 'loading'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 border-b">
                        <span className="font-semibold text-gray-600">Receive Address</span>
                        <span className="text-gray-800">
                            {exchangeData.
                                address
                                != null ? exchangeData.
                                address
                                : 'loading'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100">
                        <span className="font-semibold text-gray-600">Nagat P</span>
                        <span className="text-gray-800">
                            01991381040
                        </span>
                    </div>
                </div>


                {/* payment details */}
                <div className="flex flex-col gap-2 p-3">
                    <h1 className="">Enter TrXID</h1>
                    <input type="text"
                        onChange={(e) => setTrxID(e.target.value)}
                        className="p-3 w-full border-2"
                        placeholder="TrxID here" />
                </div>

                {/* Upload Section */}
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Upload Payment Proof</h2>
                    <p className="text-red-400 mb-1">image with single file name </p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-600
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-emerald-50 file:text-emerald-700
                        hover:file:bg-emerald-100"
                    />
                    <button
                        onClick={uploadImage}
                        disabled={uploading}
                        className={`mt-4 px-4 py-2 text-white rounded-md ${uploading ? "bg-gray-400" : "bg-emerald-500 hover:bg-emerald-600"}`}
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                    {imageUrl ? imageUrl : ''}
                </div>




                {/* Buttons */}
                <div className="flex justify-between items-center">
                    <Link href={'/pages/exchange-page/final-cheak'}>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                            Back
                        </button>
                    </Link>
                  
                        <button onClick={handleDataSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Confirm
                        </button>
                 
                </div>
            </div>
        </div>
    );
}
