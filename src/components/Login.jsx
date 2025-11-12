import "../styles/Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//let url = 'http://192.168.31.217:5678/webhook-test'    // Dev
let url = 'http://192.168.31.217:5678/webhook'    // Prod

let Login = () => {
  
  const navigate = useNavigate()
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()

  useEffect(() => {
    let token = localStorage.getItem('spendwise_token')
    
    if(token != null){
      axios.post(`${url}/auth`, { token })
      .then((response) => {
        console.log(response.data)
        if(response.data.auth){
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert('❌ Unable to reach server')
      })
    }
  },[])

  let logIn = (e) => {
    e.preventDefault()
    axios.post(`${url}/login`, {email, password})
    .then((response) => {
      console.log(response.data);
      if(response.data.auth){
        localStorage.setItem('spendwise_token', response.data.token)
        navigate('/')
      }
      else{
        window.alert('⚠ Invalid email or password')
      }
    })
    .catch((error) => {
      console.log(error);
      window.alert('❌ Unable to reach server')
    })
  }

  return (
    <div className="bg-[var(--base-light)] dark:bg-[var(--base-dark)] font-display text-[var(--text-light)] dark:text-[var(--text-dark)]">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-sm space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center shadow-lg">
              <img src="/spendwise.jpg" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-light)] dark:text-[var(--text-dark)]">
              Welcome Back
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Log in to manage your finances
            </p>
          </div>
          <form className="space-y-6" onSubmit={logIn}>
            <div className="space-y-2">
              <label
                className="text-sm font-semibold text-gray-600 dark:text-gray-300"
                for="email"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {" "}
                  mail{" "}
                </span>
                <input
                  className="form-input w-full rounded-xl border-[var(--gray-light)] bg-white py-3 pl-11 pr-4 text-base text-[var(--text-light)] placeholder-gray-400 ring-2 ring-transparent focus:border-[var(--brand-blue)] focus:ring-[var(--brand-blue)]/30 dark:border-[var(--gray-dark)] dark:bg-gray-800 dark:text-[var(--text-dark)] dark:placeholder-gray-500"
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-semibold text-gray-600 dark:text-gray-300"
                  for="password"
                >
                  Password
                </label>
                <a
                  className="text-sm font-medium text-[var(--brand-blue)] hover:underline"
                  href="#"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {" "}
                  lock{" "}
                </span>
                <input
                  className="form-input w-full rounded-xl border-[var(--gray-light)] bg-white py-3 pl-11 pr-4 text-base text-[var(--text-light)] placeholder-gray-400 ring-2 ring-transparent focus:border-[var(--brand-blue)] focus:ring-[var(--brand-blue)]/30 dark:border-[var(--gray-dark)] dark:bg-gray-800 dark:text-[var(--text-dark)] dark:placeholder-gray-500"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="btn flex w-full items-center justify-center rounded-xl bg-[var(--brand-blue)] py-3.5 text-base font-bold text-white shadow-md shadow-[var(--brand-blue)]/30 hover:bg-opacity-90">
              <span className="truncate">Log In</span>
            </button>
          </form>
          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--gray-light)] dark:border-[var(--gray-dark)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[var(--base-light)] px-2 text-gray-500 dark:bg-[var(--base-dark)] dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <button className="btn flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--gray-light)] bg-white py-3 text-base font-semibold text-[var(--text-light)] shadow-sm hover:bg-gray-50 dark:border-[var(--gray-dark)] dark:bg-gray-800 dark:text-[var(--text-dark)] dark:hover:bg-gray-700">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5777 12.2714C22.5777 11.4704 22.5113 10.6841 22.3862 9.924H12V14.331H17.9546C17.722 15.758 17.0658 16.993 16.0352 17.7345V20.358H19.7892C21.6038 18.665 22.5777 15.758 22.5777 12.2714Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23C14.9744 23 17.4839 22.019 19.2882 20.358L16.0352 17.7345C15.0451 18.4255 13.6364 18.887 12 18.887C9.13818 18.887 6.69773 17.009 5.76273 14.498L1.89818 14.498V17.2145C3.70182 20.7305 7.52773 23 12 23Z"
                fill="#34A853"
              ></path>
              <path
                d="M5.76273 14.498C5.55318 13.882 5.43727 13.2295 5.43727 12.5C5.43727 11.7705 5.55318 11.118 5.76273 10.502L1.89818 7.7855C1.19636 9.2015 0.812727 10.7915 0.812727 12.5C0.812727 14.2085 1.19636 15.7985 1.89818 17.2145L5.76273 14.498Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 6.113C13.7836 6.113 15.1582 6.7865 15.7768 7.3775L19.3514 3.9305C17.4727 2.2475 14.9744 1 12 1C7.52773 1 3.70182 3.2695 1.89818 6.7855L5.76273 9.498C6.69773 6.981 9.13818 6.113 12 6.113Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span>Sign in with Google</span>
          </button> */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            New to SpendWise?
            <a
              className="font-semibold text-[var(--brand-blue)] hover:underline"
              href="/signup"
            >
              {' '}Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;