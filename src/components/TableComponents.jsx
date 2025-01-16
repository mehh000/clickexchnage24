'use client'


import React from 'react'
import ExchangeTable from './exchnageTable'
import ReserveTable from './reserveTable'
import ExchangeTracking from './ExchnageTracking'

function TableComponents() {
    return (
        <div className=" flex mt-4 items-center justify-center flex-wrap gap-5">
          
            <ExchangeTable />
            <ExchangeTracking />
        </div>
    )
}

export default TableComponents