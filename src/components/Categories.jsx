import "../styles/Categories.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let Categories = () => {

  const navigate = useNavigate();

  let passData = (icon, name) => {
    navigate('/expense', { state: {icon, name} })
  }

  return (
    <div className="bg-[#F5F5F7] dark:bg-[#1A202C] font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-4">
        <div className="sticky top-0 z-10 bg-[#F5F5F7] dark:bg-[#1A202C]">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="text-[#1F2937] dark:text-[#E2E8F0] flex size-12 shrink-0 items-center" onClick={() => navigate('/expense')}>
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <h2 className="text-[#1F2937] dark:text-[#E2E8F0] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
              Categories &amp; Items
            </h2>
            <div className="flex size-12 shrink-0 items-center"></div>
          </div>
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#6B7280] dark:text-[#94A3B8] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#1F2937] dark:text-[#E2E8F0] focus:outline-0 focus:ring-2 focus:ring-[#3B82F6] border-none bg-white dark:bg-gray-800 h-full placeholder:text-[#6B7280] dark:placeholder:text-[#94A3B8] px-4 pl-2 text-base font-normal leading-normal"
                  placeholder="Search for an item..."
                />
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          <details
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group"
            open=""
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Housing
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('home', 'Rent/Mortgage')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Rent/Mortgage
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('receipt_long', 'Property Taxes')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Property Taxes
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('admin_panel_settings', 'Home Insurance')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">
                    admin_panel_settings
                  </span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Home Insurance
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('power', 'Utilities (Gas, Water, Electricity)')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">power</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Utilities (Gas, Water, Electricity)
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('wifi', 'Internet & Cable')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Internet &amp; Cable
                </p>
              </div>
            </div>
          </details>
          <details className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Transportation
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('directions_car', 'Fuel')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Fuel
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('commute', 'Public Transport')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">commute</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Public Transport
                </p>
              </div>
            </div>
          </details>
          <details className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Food
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('shopping_cart', 'Groceries')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Groceries
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('restaurant', 'Restaurants')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Restaurants
                </p>
              </div>
            </div>
          </details>
          <details className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Personal &amp; Healthcare
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('health_and_safety', 'Health Insurance')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">
                    health_and_safety
                  </span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Health Insurance
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('spa', 'Personal Care')}>
                <div className="text-[#10B981]">
                  <span className="material-symbols-outlined">spa</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Personal Care
                </p>
              </div>
            </div>
          </details>
          <details className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Entertainment &amp; Recreation
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('theaters', 'Movies')}>
                <div className="text-[#EF4444]">
                  <span className="material-symbols-outlined">theaters</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Movies
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('sports_esports', 'Games')}>
                <div className="text-[#EF4444]">
                  <span className="material-symbols-outlined">sports_esports</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Games
                </p>
              </div>
            </div>
          </details>
          <details className="flex flex-col bg-white dark:bg-gray-800 rounded-lg group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
              <p className="text-[#3B82F6] text-base font-bold leading-normal">
                Miscellaneous
              </p>
              <div className="text-[#1F2937] dark:text-[#E2E8F0] group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] dark:border-[#374151] pt-3" onClick={() => passData('redeem', 'Gifts')}>
                <div className="text-[#EF4444]">
                  <span className="material-symbols-outlined">redeem</span>
                </div>
                <p className="text-[#1F2937] dark:text-[#E2E8F0] text-sm font-normal">
                  Gifts
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Categories;
