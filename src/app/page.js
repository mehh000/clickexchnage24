'use client'


import ExchangeBoard from "@/components/exchnageBoard";
import Feedback from "@/components/feedback";
import LatestExchangeTable from "@/components/LatestExchnageTable";
import Message from "@/components/message";
import Navber from "@/components/Navber";
import TableComponents from "@/components/TableComponents";
import TotalRecord from "@/components/totalRecord";
import { MessageCircle, } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';
import { useContext } from "react";
import { userContext } from "@/context/userContext";



export default function Home() {


  const { user } = useContext(userContext);





  return (
    <>
      <Navber />


      <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 min-h-screen relative">
        <Message />
        <ExchangeBoard />
        <TableComponents />
        <LatestExchangeTable />
        <Feedback />
        <TotalRecord />

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 gap-5 right-8 z-50">
          <Link href={'https://wa.me/+8801949484870'}>
            <button className="bg-green-500 p-4 rounded-full text-white font-bold shadow-lg mb-2">
              WA
            </button> </Link>
          {
            user?.id != null ? <Link
              href="/pages/chat"
              className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 block"
            >
              <MessageCircle className="w-6 h-6" />
            </Link> : <Link
              href="/pages/auth/login"
              className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 block"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
          }

        </div>
      </div>
      <Footer />
    </>
  );
}
