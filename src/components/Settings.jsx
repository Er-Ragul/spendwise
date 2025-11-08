import "../styles/Settings.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

let url = 'https://n8n.local.in/webhook-test'

let Settings = () => {

  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('spendwise_token')

    if(token == null){
      window.alert('⚠ Session expired. Please login')
      navigate('/login')
    }
  }, [])

  let logOut = () => {
    localStorage.clear('spendwise_token')
    navigate('/login')
  }

  return(
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex items-center bg-[#f6f7f8] dark:bg-[#101922] p-4 pb-2 justify-between sticky top-0 z-10">
          <div
            className="text-[#2C5282] dark:text-white flex size-12 shrink-0 items-center"
            data-icon="ArrowUp"
            data-size="24px"
            data-weight="regular"
            onClick={() => navigate('/')}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-[#2C5282] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Settings
          </h2>
          <div className="w-12"></div> {/*Spacer*/}
        </div>
        <div className="p-4 space-y-6">
          {/* Theme Section */}
          {/* <h2 className="text-[#2C5282] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Theme
          </h2>
          <div className="flex items-center gap-4 bg-white dark:bg-[#2C5282]/20 p-4 rounded-xl justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#38A169] flex items-center justify-center rounded-lg bg-[#38A169]/20 shrink-0 size-10">
                <span className="material-symbols-outlined">nightlight</span>
              </div>
              <p className="text-[#2C5282] dark:text-white text-base font-normal leading-normal flex-1 truncate">
                Dark Mode
              </p>
            </div>
            <div className="shrink-0">
              <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#38A169]">
                <div
                  className="h-full w-[27px] rounded-full bg-white"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                  }}
                ></div>
                <input className="invisible absolute" type="checkbox" />
              </label>
            </div>
          </div> */}
          {/* Account Section */}
          <h2 className="text-[#2C5282] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Account
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-4 bg-white dark:bg-[#2C5282]/20 p-4 rounded-xl justify-between">
              <div className="flex items-center gap-4">
                <div className="text-[#38A169] flex items-center justify-center rounded-lg bg-[#38A169]/20 shrink-0 size-10">
                  <span className="material-symbols-outlined">lock_reset</span>
                </div>
                <p className="text-[#2C5282] dark:text-white text-base font-normal leading-normal flex-1 truncate">
                  Reset Password
                </p>
              </div>
              <div className="shrink-0">
                <div className="text-[#2C5282] dark:text-white flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-[#2C5282]/20 p-4 rounded-xl justify-between">
              <div className="flex items-center gap-4">
                <div className="text-[#38A169] flex items-center justify-center rounded-lg bg-[#38A169]/20 shrink-0 size-10">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#2C5282] dark:text-white text-base font-normal leading-normal truncate">
                    Add New User
                  </p>
                </div>
                {/* <span className="bg-[#DD6B20] text-white text-xs font-bold px-2 py-1 rounded-full">
                  Premium
                </span> */}
              </div>
              <div className="shrink-0">
                <div className="text-[#2C5282] dark:text-white flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-[#2C5282]/20 p-4 rounded-xl justify-between" onClick={logOut}>
              <div className="flex items-center gap-4">
                <div className="text-[#38A169] flex items-center justify-center rounded-lg bg-[#38A169]/20 shrink-0 size-10">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <p className="text-[#2C5282] dark:text-white text-base font-normal leading-normal flex-1 truncate">
                  Logout
                </p>
              </div>
              {/* <div className="shrink-0">
                <div className="text-[#2C5282] dark:text-white flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* Danger Zone Section */}
          <h2 className="text-[#2C5282] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            Danger Zone
          </h2>
          <div className="bg-white dark:bg-[#2C5282]/20 p-4 rounded-xl">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#E53E3E] px-6 py-3 text-center text-base font-semibold text-[#E53E3E] transition-all hover:bg-[#E53E3E]/10">
              <span className="material-symbols-outlined">delete</span>
              Delete Account
            </button>
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 hidden">
        <div className="bg-white dark:bg-[#101922] m-4 w-full max-w-sm rounded-xl p-6 shadow-lg font-display">
          <h3 className="text-lg font-bold text-[#2C5282] dark:text-white">
            Are you sure?
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Deleting your account is a permanent action. All your data will be
            lost and cannot be recovered.
          </p>
          <div className="mt-6 flex justify-end space-x-4">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
              Cancel
            </button>
            <button className="rounded-lg bg-[#E53E3E] px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;