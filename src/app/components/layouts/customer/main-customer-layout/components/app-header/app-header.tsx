import styles from './app-header.module.scss';
import { AppHeaderProps } from './app-header.types';
// import useAppHeaderViewModel from './app-header.view-model';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AppHeader: React.FC<AppHeaderProps> = ({ onToggleSidebar, className }) => {
  return (
    <header className="bg-white shadow-md p-4 sticky z-50 w-full top-0">
      <div className="flex items-center justify-between">
        {/* Sidebar Toggle Button (Mobile Only) */}
        <button
          onClick={onToggleSidebar}
          className="block md:hidden p-2 rounded-md bg-blue-500 text-white shadow-lg"
        >
          Menu
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-x-4 mr-8">
          <Link to="/" className="text-mine-shaft md:text-[14px] text-[12px]">
            Trang chủ
          </Link>
          <Link to="/" className="text-mine-shaft md:text-[14px] text-[12px]">
            FAQ
          </Link>
          <Link to="/" className="text-mine-shaft md:text-[14px] text-[12px]">
            Hướng dẫn thay lõi
          </Link>
          <Link to="/" className="text-mine-shaft md:text-[14px] text-[12px]">
            Liên hệ
          </Link>
        </div>

        {/* Hotline Section */}
        <div className="flex items-center gap-x-2">
          <div className="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8438 7.25782C22.8755 7.13878..."
                fill="#333333"
              />
            </svg>

            <span className="text-[14px] md:text-[24px] text-mine-shaft font-light">
              Hotline:
            </span>
          </div>
          <div className="text-[14px] md:text-[24px] font-extrabold text-mine-shaft">
            0977.190.775
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(withResourceBundle( AppHeader , () => import('./translations')));
