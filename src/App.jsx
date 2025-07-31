import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

const FinancialTable = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div className="px-2 sm:px-4 lg:px-6">
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
        
        /* Responsive table styles */
        @media (max-width: 768px) {
          .responsive-table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .responsive-table {
            min-width: 800px;
          }
        }
      `}</style>

      {/* Summary Table */}
      <div className=" p-4 overflow-hidden shadow-xl rounded-lg border border-blue-200 mb-6">
        <div className="header-no-scrollbar responsive-table-container">
          <table className="w-full border-collapse bg-white responsive-table">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                <th className="border border-blue-300 px-2 py-2 text-left text-sm font-semibold min-w-[120px] sm:min-w-[150px]">
                  Year/Bookings/Invoice
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Total Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Actual Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Remaining Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Received Amount
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Paid Salary
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[80px]">
                  Expenses
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[120px]">
                  Amount To be Pay
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-sm font-semibold min-w-[100px]">
                  Total Paid Amt
                </th>
              </tr>
            </thead>
            
            <tbody>
              <tr 
                className="bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-100 hover:to-indigo-100 cursor-pointer transition-all duration-200" 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <td className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-sm">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-blue-600 rounded-full p-1 transition-transform duration-200">
                      {isExpanded ? 
                        <ChevronDown size={16} className="text-white" /> : 
                        <ChevronRight size={16} className="text-white" />
                      }
                    </div>
                    <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                      ({summaryData.year})/({summaryData.bookings})/({summaryData.invoice})
                    </span>
                  </div>
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-green-700">
                  {formatCurrency(summaryData.totalRevenue)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-green-600">
                  {formatCurrency(summaryData.actualRevenue)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-orange-600">
                  {formatCurrency(summaryData.remainingRevenue)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-blue-600">
                  {formatCurrency(summaryData.receivedAmount)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-purple-600">
                  {formatCurrency(summaryData.paidSalary)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-gray-600">
                  {formatCurrency(summaryData.expenses)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-red-600">
                  {formatCurrency(summaryData.amountToBePay)}
                </td>
                <td className="border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-semibold text-gray-600">
                  {formatCurrency(summaryData.totalPaidAmt)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Table - Expanded View */}
      {isExpanded && (
        <div className="mb-6 mx-2 sm:ml-8 bg-white rounded-xl shadow-2xl border border-gray-200">
          {/* Detail Header */}
          <div className="bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 rounded-t-xl">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Financial Year - {summaryData.year}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="bg-green-100 text-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
                Total Processing: <strong>120</strong>
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
                Total Cancelled: <strong>7</strong>
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
                Total Received: <strong>0</strong>
              </span>
            </div>
          </div>

          {/* Detail Table with Scroll Controls */}
          <div className="relative px-2 sm:px-12 py-2 sm:py-4">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={13} />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon size={13} />
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="sm:hidden flex justify-between mb-2">
              <button
                onClick={scrollLeft}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft size={13} />
              </button>
              <button
                onClick={scrollRight}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-2 shadow-lg"
              >
                <ChevronRightIcon size={13} />
              </button>
            </div>

            <div className="overflow-x-auto hide-scrollbar responsive-table-container" ref={scrollContainerRef}>
              <table className="w-full border-collapse responsive-table">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[60px] sm:min-w-[80px]">
                      ID
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[90px] sm:min-w-[120px]">
                      Booking Date
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[80px] sm:min-w-[100px]">
                      Month
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[120px] sm:min-w-[180px]">
                      Builder
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[120px] sm:min-w-[180px]">
                      Project
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px] sm:min-w-[140px]">
                      Customer
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[90px] sm:min-w-[120px]">
                      Contact
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[120px] sm:min-w-[140px]">
                      Email
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[60px] sm:min-w-[80px]">
                      Type
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[80px] sm:min-w-[100px]">
                      Unit No
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[70px] sm:min-w-[90px]">
                      Size
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[90px] sm:min-w-[120px]">
                      Agreement
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[70px] sm:min-w-[90px]">
                      Comm %
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[90px] sm:min-w-[120px]">
                      Revenue
                    </th>
                    <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[70px] sm:min-w-[90px]">
                      CashBack
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {detailData.map((row, index) => (
                    <tr 
                      key={row.id} 
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gradient-to-r from-slate-50 to-blue-50"} hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-200`}
                    >
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm font-medium text-blue-700">
                        {row.id}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-gray-700">
                        {row.bookingDate}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-gray-700">
                        {row.month}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm font-medium text-gray-800 truncate">
                        {row.builder}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm font-medium text-indigo-700 truncate">
                        {row.project}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm font-medium text-gray-800 truncate">
                        {row.customerName}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium truncate">
                        {row.contactNo}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium truncate">
                        {row.Email}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.Type}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.UnitNo}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.Size}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.AgreementValue}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.Commission}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
                        {row.TotalRevenue}
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center text-xs sm:text-sm text-green-700 font-medium">
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

      {/* Footer Table */}
      <div className="overflow-hidden shadow-xl rounded-lg border border-blue-200">
        <div className="header-no-scrollbar responsive-table-container">
          <table className="w-full border-collapse bg-white responsive-table">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
                <th className="border border-blue-300 px-2 py-2 text-left text-xs sm:text-sm font-semibold min-w-[120px] sm:min-w-[150px]">
                  Year/Bookings/Invoice
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
                  Total Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
                  Actual Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
                  Remaining Revenue
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
                  Received Amount
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
                  Paid Salary
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[80px]">
                  Expenses
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[120px]">
                  Amount To be Pay
                </th>
                <th className="border border-blue-300 px-2 py-2 text-center text-xs sm:text-sm font-semibold min-w-[100px]">
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