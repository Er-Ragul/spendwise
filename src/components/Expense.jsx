import "../styles/Expense.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

//let url = 'http://192.168.31.217:5678/webhook-test'   // Dev
let url = 'http://192.168.31.217:5678/webhook'    // Prod

let Expense = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { icon, name } = location.state || {}

  let [amount, setAmount] = useState('')
  let [date, setDate] = useState('')
  let [category, setCategory] = useState(name != '' ? name : '')
  let [note, setNote] = useState('')

  useEffect(() => {
    let token = localStorage.getItem('spendwise_token')

    if(token == null){
      window.alert('⚠ Session expired. Please login')
      navigate('/login')
    }

    setDate(formattedDate())
  }, [])

  let formattedDate = () => {
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    let date = new Date().getDate()
    date = date.toString()

    if(date.length == 1){
      date = '0'+date
    }

    return `${year}-${month}-${date}`
  }

  let saveExpense = () => {
    if(category != ''){
      if(amount != ''){
        let token = localStorage.getItem('spendwise_token')
        let time = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) 

        let data = { 
          amount, date, time, category, icon,
          note: note == '' ? category : note, 
          type: 'expense',
        }

        axios.post(`${url}/expense`, data, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          if(response.data.auth){
            setAmount('')
            setCategory('')
            setNote('')
            window.alert('💳 Expense recorded successfully')
          }
        })
        .catch((error) => {
          if(error.response.data == 'invalid signature'){
            window.alert('⚠ Invalid token please re-login and try again')
          }
        })
      }
      else{
        window.alert('⚠ Amount should not be empty')
      }
    }
    else{
      window.alert('⚠ Category should not be empty')
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <div className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center" onClick={() => navigate('/')}>
            <span className="material-symbols-outlined !text-2xl">
              arrow_back_ios
            </span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Add Expense
          </h2>
          {/* <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111418] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <span className="material-symbols-outlined !text-2xl">more_vert</span>
            </button>
          </div> */}
        </div>
        <div className="flex px-4 py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-gray-800 p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#ef4444] has-[:checked]:text-white has-[:checked]:shadow-[0_0_4px_rgba(239,68,68,0.5)] text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal transition-colors" onClick={() => navigate('/expense')}>
              <span className="truncate">Expense</span>
              {/* Corrected the 'checked' attribute for uncontrolled components */}
              <input
                defaultChecked
                className="invisible w-0"
                name="transaction_type"
                type="radio"
                value="Expense"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#22c55e] has-[:checked]:text-white has-[:checked]:shadow-[0_0_4px_rgba(34,197,94,0.5)] text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal transition-colors" onClick={() => navigate('/income')}>
              <span className="truncate">Income</span>
              <input
                className="invisible w-0"
                name="transaction_type"
                type="radio"
                value="Income"
              />
            </label>
          </div>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          {/* Converted inline style string to a JSX style object */}
          <label
            className="flex flex-col min-w-40 flex-1"
            style={{
              "--select-button-svg":
                "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(97,117,137)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
            }}
          >
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">
              Category
            </p>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-gray-800 focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#617589] dark:placeholder-gray-400 p-4 text-base font-normal leading-normal appearance-none" 
              onClick={() => navigate('/categories')}
              placeholder="Select a category"
              value={category}
              readOnly
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">
              Amount
            </p>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#ef4444] peer-focus:text-[#ef4444]">
                ₹
              </span>
              {/* Used 'defaultValue' for uncontrolled input */}
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#ef4444] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-gray-800 focus:border-none h-14 placeholder:text-[#617589] dark:placeholder-gray-400 p-4 pl-8 text-2xl font-bold leading-normal peer"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">
              Date
            </p>
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-gray-800 focus:border-none h-14 placeholder:text-[#617589] dark:placeholder-gray-400 p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
              {/* <div className="text-[#617589] dark:text-gray-400 flex border-none bg-[#f0f2f4] dark:bg-gray-800 items-center justify-center pr-4 rounded-r-lg border-l-0">
                <span className="material-symbols-outlined">calendar_today</span>
              </div> */}
            </div>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">
              Notes
            </p>
            <textarea
              className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-gray-800 focus:border-none min-h-28 placeholder:text-[#617589] dark:placeholder-gray-400 p-4 text-base font-normal leading-normal"
              placeholder="Add a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="flex-grow"></div>
        <div className="px-4 py-5 bg-background-light dark:bg-background-dark sticky bottom-0">
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-[#ef4444] text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-4" onClick={saveExpense}>
            Save Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expense;