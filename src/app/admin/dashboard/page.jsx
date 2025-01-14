'use client';

import React from 'react';
import { CalendarIcon, ClockIcon, UserCheckIcon, UserIcon, XCircleIcon } from 'lucide-react';
import OverView_card from '../components/overView_card';
import ReserveTable from '@/components/reserveTable';
import LatestExchangeTable from '@/components/LatestExchnageTable';
import ExchangeTable from '@/components/exchnageTable';

function AdminHomePage() {
  const overViewCardData = [
    {
      id: 1,
      name: 'Total User',
      number: 123,
      icon: UserIcon,
    },
    {
      id: 2,
      name: "Today's User",
      number: 45,
      icon: UserCheckIcon,
    },
    {
      id: 3,
      name: "Today's Exchange",
      number: 67,
      icon: CalendarIcon, // Default icon (replace with a suitable one)
    },
    {
      id: 4,
      name: "This Month's Exchange",
      number: 890,
      icon: CalendarIcon,
    },
    {
      id: 5,
      name: 'Requesting Pending',
      number: 12,
      icon: ClockIcon,
    },
    {
      id: 6,
      name: 'Request Canceled',
      number: 3,
      icon: XCircleIcon,
    },
    {
      id: 7,
      name: 'In process',
      number: 3,
      icon: XCircleIcon,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-start gap-5 p-4 bg-gray-100">
      {overViewCardData.map((data) => (
        <div key={data.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]">
          <OverView_card name={data.name} number={data.number} Icon={data.icon} />
        </div>
      ))} <br />
      <div className="flex flex-wrap gap-3">
        <ReserveTable />
        <ExchangeTable />
      </div>
    </div>
  );
}

export default AdminHomePage;
