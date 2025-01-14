'use client'

import { useState } from 'react';
import ExchangeBoard from "@/components/exchnageBoard";
import Feedback from "@/components/feedback";
import LatestExchangeTable from "@/components/LatestExchnageTable";
import Message from "@/components/message";
import Navber from "@/components/Navber";
import TableComponents from "@/components/TableComponents";
import TotalRecord from "@/components/totalRecord";
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
    <Navber />
    

    <div className="bg-gray-50 min-h-screen relative">
      <Message />
      <ExchangeBoard />
      <TableComponents />
      <LatestExchangeTable />
      <Feedback />
      <TotalRecord />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/pages/chat"
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 block"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>
      </div>
    </div>  
    <Footer />
      </>
  );
}
