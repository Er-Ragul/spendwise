import axios from "axios";
import "../styles/Dashboard.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//let url = 'http://192.168.31.217:5678/webhook-test'   // Dev
let url = 'http://192.168.31.217:5678/webhook'    // Prod

let Dashboard = () => {

  const navigate = useNavigate()
  let [balance, setBalance] = useState(0)
  let [income, setIncome] = useState(0)
  let [expense, setExpense] = useState(0)
  let [month, setMonth] = useState(0)
  let [graph, setGraph] = useState([])
  let [overall, setOverall] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('spendwise_token')

    if(token == null){
      window.alert('⚠ Session expired. Please login')
      navigate('/login')
    }

    axios.get(`${url}/report`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data.result.graph);
      if(response.data.auth){
        setBalance(response.data.result.totalBalance)
        setIncome(response.data.result.totalIncome)
        setExpense(response.data.result.totalExpense)
        setMonth(response.data.result.monthlyExpense)
        setOverall(response.data.result.transaction)
        setGraph(response.data.result.graph)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* Top App Bar */}
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <div className="flex size-12 shrink-0 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="User profile picture">
                <img src="/spendwise.jpg" />
              </div>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-gray-900 dark:text-white">
            SpendWise
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-gray-900 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0" onClick={() => navigate('/settings')}>
              <span className="material-symbols-outlined text-gray-900 dark:text-white">
                settings
              </span>
            </button>
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
            <p className="text-base font-medium leading-normal text-gray-600 dark:text-gray-400">
              Total Balance
            </p>
            <p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              ₹{balance}
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
            <p className="text-base font-medium leading-normal text-green-600 dark:text-green-400">
              Total Income
            </p>
            <p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              ₹{income}
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-800">
            <p className="text-base font-medium leading-normal text-red-500 dark:text-red-400">
              Total Expenses
            </p>
            <p className="tracking-light text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              ₹{expense}
            </p>
          </div>
        </div>
        {/* Charts */}
        <div className="flex flex-wrap gap-4 px-4 py-6">
          <div className="flex min-w-72 flex-1 flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-background-dark/50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base font-medium leading-normal text-gray-900 dark:text-white">
                  Weekly Spending
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This Month
                </p>
              </div>
              <p className="tracking-light text-3xl font-bold leading-tight truncate text-gray-900 dark:text-white">
                ₹{month}
              </p>
            </div>
            <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
              {
                graph.map((weeks, index) => (
                  <>
                    <div className="bg-red-200 dark:bg-red-800/50 w-full rounded-t-lg" style={{ height: `${Math.round(weeks.totalExpense / month * 100)}%` }}></div>
                    <p className="text-sm font-bold leading-normal tracking-[0.015em] text-gray-600 dark:text-gray-400">Week {weeks.week}</p>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        {/* Section Header */}
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-gray-900 dark:text-white">
          Recent Transactions
        </h2>
        {/* List Items */}
        <div className="flex flex-col gap-2 px-4 pb-24">
          {
            overall.length > 0 ? 
              overall.map((item) => (
                item.json.type == "income" ? 
                (
                  <div className="flex items-center gap-4 bg-white dark:bg-background-dark/50 px-4 min-h-[72px] py-2 justify-between rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50 shrink-0 size-12">
                        <span className="material-symbols-outlined">{item.json.icon}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-base font-medium leading-normal line-clamp-1 text-gray-900 dark:text-white">
                          {item.json.category}
                        </p>
                        <p className="text-sm font-normal leading-normal line-clamp-2 text-gray-600 dark:text-gray-400">
                          {item.json.date}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className="text-base font-medium leading-normal text-green-600 dark:text-green-400">
                        +{item.json.amount}
                      </p>
                    </div>
                  </div>
                ):(
                <div className="flex items-center gap-4 bg-white dark:bg-background-dark/50 px-4 min-h-[72px] py-2 justify-between rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="text-red-600 dark:text-red-400 flex items-center justify-center rounded-lg bg-red-100 dark:bg-green-900/50 shrink-0 size-12">
                      <span className="material-symbols-outlined">{item.json.icon}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-base font-medium leading-normal line-clamp-1 text-gray-900 dark:text-white">
                        {item.json.category}
                      </p>
                      <p className="text-sm font-normal leading-normal line-clamp-2 text-gray-600 dark:text-gray-400">
                        {item.json.date}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <p className="text-base font-medium leading-normal text-red-600 dark:text-red-400">
                      -{item.json.amount}
                    </p>
                  </div>
                </div>
                )
              ))
            : null
          }
        </div>
        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6">
          <button className="flex items-center justify-center rounded-full h-16 w-16 bg-[#137fec] text-white shadow-lg" onClick={() => navigate('/income')}>
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


{/* <div
  className="bg-red-200 dark:bg-red-800/50 w-full rounded-t-lg"
  style={{ height: "33.3%" }}
></div>
<p className="text-sm font-bold leading-normal tracking-[0.015em] text-gray-600 dark:text-gray-400">
  Week 1
</p> */}