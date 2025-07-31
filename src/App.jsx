import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

const FinancialTable = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const summaryData = {
    year: "2025-2026",
    bookings: 127,
    invoice: 2,
    totalRevenue: 43100567,
    actualRevenue: 38772337,
    remainingRevenue: 37338357,
    receivedAmount: 334311,
    paidSalary: 9172390,
    expenses: 0,
    amountToBePay: 21104132,
    totalPaidAmt: 0
  };

  const detailData = [
    {
      id: 893,
      bookingDate: "2025-07-13",
      month: "2025-07",
      builder: "Godrej Properties",
      project: "MSR CITY",
      customerName: "sagar pate",
      contactNo: "7506277562",
      Email:"RITWIK@GMAIL.COM",
      Type:"5BHK",
      UnitNo:"444Rtet",
      Size:"564534",
      AgreementValue:"70000",
      Commission:"2%",
      TotalRevenue:"1400000",
      CashBack:"0.3%"
    },
    {
      id: 892,
      bookingDate: "2025-07-20",
      month: "2025-07",
      builder: "Godrej Properties",
      project: "MSR CITY",
      customerName: "Sujeeth",
      contactNo: "+971528738529",
      Email:"GODREJ@GMAIL.COM",
      Type:"54BHK",
      UnitNo:"445Rtet",
      Size:"564567",
      AgreementValue:"90000",
      Commission:"3%",
      TotalRevenue:"1500000",
      CashBack:"0.7%"
    },
    {
      id: 891,
      bookingDate: "2025-07-24",
      month: "2025-07",
      builder: "Assetz Property Group",
      project: "assetz canvas and co",
      customerName: "Govindh raj",
      contactNo: "9886793233",
      Email:"ASSETZ@GMAIL.COM",
      Type:"4BHK",
      UnitNo:"467Rtet",
      Size:"5638534",
      AgreementValue:"50000",
      Commission:"1%",
      TotalRevenue:"1700000",
      CashBack:"0.6%"
    },
    {
      id: 890,
      bookingDate: "2025-07-13",
      month: "2025-07",
      builder: "prestige resale",
      project: "prestige city",
      customerName: "mohit",
      contactNo: "7735815442",
      Email:"PRESTIGE@GMAIL.COM",
      Type:"2BHK",
      UnitNo:"333Rtet",
      Size:"764534",
      AgreementValue:"80000",
      Commission:"3%",
      TotalRevenue:"8900000",
      CashBack:"0.4%"
    },
    {
      id: 889,
      bookingDate: "2025-07-25",
      month: "2025-07",
      builder: "Prestige Group",
      project: "Eden park",
      customerName: "Sridharan",
      contactNo: "7022377475",
      Email:"PRESTIGE@GMAIL.COM",
      Type:"5BHK",
      UnitNo:"478Rtet",
      Size:"590534",
      AgreementValue:"90000",
      Commission:"2%",
      TotalRevenue:"100000",
      CashBack:"0.8%"
    }
  ];

  const formatCurrency = (amount) => {
    return `₹ ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div>
      <style jsx global>{`
        /* Global styles to hide scrollbars in header sections */
        .header-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .header-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {}
      <div className="overflow-hidden shadow-xl rounded-lg border border-blue-200">
        <div className="header-no-scrollbar">
          <table className="w-full border-collapse bg-white">
            {}
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                <th className="border border-blue-300 px-2 py-2 text-left text-sm font-semibold min-w-[50px] shadow-sm">
                  Year/Bookings/Invoice
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Total Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Actual Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Remaining Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Received Amount
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Paid Salary
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Expenses
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Amount To be Pay
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Total Paid Amt
                </th>
              </tr>
            </thead>
            
            {}
            <tbody>
              <tr className="bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-100 hover:to-indigo-100 cursor-pointer transition-all duration-200" onClick={() => setIsExpanded(!isExpanded)}>
                <td className="border border-gray-200 px-4 py-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 rounded-full p-1 transition-transform duration-200">
                      {isExpanded ? <ChevronDown size={16} className="text-white" /> : <ChevronRight size={16} className="text-white" />}
                    </div>
                    <span className="font-semibold text-gray-800">▲({summaryData.year})/({summaryData.bookings})/({summaryData.invoice})</span>
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-green-700">
                  {formatCurrency(summaryData.totalRevenue)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-green-600">
                  {formatCurrency(summaryData.actualRevenue)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-orange-600">
                  {formatCurrency(summaryData.remainingRevenue)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-blue-600">
                  {formatCurrency(summaryData.receivedAmount)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-purple-600">
                  {formatCurrency(summaryData.paidSalary)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600">
                  {formatCurrency(summaryData.expenses)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-red-600">
                  {formatCurrency(summaryData.amountToBePay)}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600">
                  {formatCurrency(summaryData.totalPaidAmt)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {}
      {isExpanded && (
        <div className="mt-6 ml-8 bg-white rounded-xl shadow-2xl border border-gray-200">
          {}
          <div className="bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200 rounded-t-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Financial Year - {summaryData.year}
            </h3>
            <div className="flex flex-wrap gap-8 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                Total Processing: <strong>120</strong>
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                Total Cancelled: <strong>7</strong>
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Total Received: <strong>0</strong>
              </span>
            </div>
          </div>

          {}
          <div className="relative px-12 py-4">
            {}
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={13} />
            </button>

            {}
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon size={13} />
            </button>

            <div className="overflow-x-auto hide-scrollbar" ref={scrollContainerRef}>
              <table className="w-full border-collapse">
                {}
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[80px]">
                      ID
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[120px]">
                      Booking Date
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                      Month
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[180px]">
                      Builder
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[180px]">
                      Project
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Customer Name
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Contact No.
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Email Id
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Type
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Unit No.
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Size
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Agreement Value
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Commission %
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      Total Revenue
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[140px]">
                      CashBack %
                    </th>
                  </tr>
                </thead>
                
                {}
                <tbody>
                  {detailData.map((row, index) => (
                    <tr key={row.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gradient-to-r from-slate-50 to-blue-50"} hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-200`}>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-blue-700">
                        {row.id}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {row.bookingDate}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
                        {row.month}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-800">
                        {row.builder}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-indigo-700">
                        {row.project}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-800">
                        {row.customerName}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.contactNo}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.Email}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.Type}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.UnitNo}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.Size}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.AgreementValue}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.Commission}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.TotalRevenue}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-sm text-green-700 font-medium">
                        {row.CashBack}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {}
      <div className="mt-6 overflow-hidden shadow-xl rounded-lg border border-blue-200">
        <div className="header-no-scrollbar">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                <th className="border border-blue-300 px-2 py-2 text-left text-sm font-semibold min-w-[50px]">
                  Year/Bookings/Invoice
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Total Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Actual Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Remaining Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Received Amount
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Paid Salary
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Expenses
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Amount To be Pay
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[50px]">
                  Total Paid Amt
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialTable;