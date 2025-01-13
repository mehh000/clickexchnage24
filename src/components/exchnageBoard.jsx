'use client'

import React, { useEffect, useState } from 'react'
import { ArrowLeftRight, ArrowDown } from 'lucide-react'
import currencyData from '@/util/data'
import Image from 'next/image'

function ExchangeBoard() {
    const [sendMethod, setSendMethod] = useState({});

    const [receiveMethod, setReceiveMethod] = useState({})
    const [senderData, setSenderData] = useState({});
    const [receiverData, setReceiverData] = useState({});
    const [sendAmount, setSendAmount] = useState('')
    const [receiveAmount, setReceiveAmount] = useState(0)



    const handleExchange = (e) => {
        e.preventDefault();

    }
    const currencyUpdatedData = [
        {
            name: 'select one',
            id: 0,
        },
        ...currencyData,
    ];

    
           
    useEffect(() => {


        try {
            //  get the send and recive data
            const parsedSenderData = JSON.parse(sendMethod);
            const parsedReceiverData = JSON.parse(receiveMethod);
    
            // setSenderData(parsedSenderData);
            // setReceiverData(parsedReceiverData);
    
            console.log('Receiver data:', parsedSenderData);
            console.log('Sender data:', parsedReceiverData);
            console.log('Send amount:', sendAmount)

            //  compare with our selling data and buying data
            const ourBuyingRate_BDT = JSON.parse(sendMethod).buyingRate;
            const UserGetFromOurBuying = sendAmount* ourBuyingRate_BDT
            console.log('User get when we buy before sending', UserGetFromOurBuying);

            // how much user is getting

            const requestedCurrency_sellingRate= JSON.parse(receiveMethod).sellingRate;
             //         const formattedReceiveData = parseFloat(user_receive_amount.toFixed(2)); // Limit to 2 decimal places
            const user_receive_amount = UserGetFromOurBuying / requestedCurrency_sellingRate;
            setReceiveAmount(parseFloat(user_receive_amount.toFixed(2)));




        } catch (error) {
            console.log(error)
        }


    }, [receiveMethod, sendAmount, sendMethod]);

    return (
        <div className="relative w-full">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/bg_image.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl mx-auto p-4 sm:p-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200">
                    <form onSubmit={handleExchange}>
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-4">
                            <div className="flex-1 w-full">
                                <select

                                    value={sendMethod}
                                    onChange={(e) => setSendMethod(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                >

                                    {currencyUpdatedData.map((data) => (
                                        <option key={data.id} value={JSON.stringify(data)}  >

                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="mt-4">
                                    <label htmlFor="send-amount" className="block text-sm font-medium text-gray-700 mb-1">
                                        Send
                                    </label>
                                    <input
                                        id="send-amount"
                                        type="number"
                                        value={sendAmount}
                                        onChange={(e) => setSendAmount(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                        placeholder="Enter amount"
                                        required
                                    />
                                    <p className="text-gray-400">Reserve: 20000tk</p>
                                </div>
                            </div>

                            <div className="flex justify-center my-4 md:my-0">
                                <ArrowLeftRight className="hidden md:block text-orange-400" size={24} />
                                <ArrowDown className="md:hidden text-orange-400" size={24} />
                            </div>

                            <div className="flex-1 w-full">
                                <select
                                    value={receiveMethod}
                                    onChange={(e) => setReceiveMethod(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                >
                                    {currencyUpdatedData.map((data) => (
                                        <option key={data.id} value={JSON.stringify(data)}  >
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="mt-4">
                                    <label htmlFor="receive-amount" className="block text-sm font-medium text-gray-700 mb-1">
                                        Receive
                                    </label>
                                    <input
                                        id="receive-amount"
                                        type="number"
                                        value={receiveAmount}
                                        onChange={(e) => setReceiveAmount(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                        placeholder="Enter amount"
                                        readOnly
                                    />
                                    <p className="text-gray-500">Recive: {receiveAmount} </p>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors font-medium"
                        >
                            Exchange Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExchangeBoard
