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
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [rate, setRate] = useState()



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
            // Parse send and receive methods only once
            const parsedSenderData = sendMethod ? JSON.parse(sendMethod) : null;
            const parsedReceiverData = receiveMethod ? JSON.parse(receiveMethod) : null;

            if (parsedSenderData && parsedReceiverData) {
                setSenderData(parsedSenderData);
                setReceiverData(parsedReceiverData);

                // Calculate rate
                const rRate = parsedSenderData.buyingRate / parsedReceiverData.sellingRate;
                setRate(parseFloat(rRate.toFixed(2)));

              //  console.log('Sender data:', parsedSenderData.currency);

                // Calculate the user's amount when we buy before sending
                const ourBuyingRate_BDT = parsedSenderData.buyingRate;
                const userGetFromOurBuying = sendAmount * ourBuyingRate_BDT;
              //  console.log('User gets when we buy before sending:', userGetFromOurBuying);

                // Calculate how much the user is receiving
                const requestedCurrencySellingRate = parsedReceiverData.sellingRate;
                const userReceiveAmount = userGetFromOurBuying / requestedCurrencySellingRate;
                setReceiveAmount(parseFloat(userReceiveAmount.toFixed(2)));
            }
        } catch (error) {
           // console.log('Error:', error);
        }
    }, [sendMethod, receiveMethod, sendAmount]);


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
                                    <p className="text-gray-500 text-sm">
                                        Exchange rate : {senderData.money === 'USD' ? senderData.currency : receiverData.sellingRate} = {senderData.money === 'USD' ? rate : receiverData.currency}

                                        {/* {senderData.currency ? senderData.currency : ''} {receiverData.sellingRate ? receiverData.sellingRate : ''} =
                                        {receiverData.sellingRate ? receiverData.sellingRate / receiverData.sellingRate : ''} {receiverData.currency ? receiverData.currency : ''}  */}

                                    </p>
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
