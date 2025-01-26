import AppHeader from './components/app-header';
import AppSideBar from './components/app-side-bar';
import { MainCustomerLayoutProps } from './main-customer-layout.types';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainUserLayout: React.FC<MainCustomerLayoutProps> = ({ className, styles }) => {

  // State quản lý mở/đóng sidebar
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  // Hàm toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={clsx('bg-[#F3F5F7] h-screen')}>
      <div className="grid grid-cols-1 md:grid-cols-11 h-full">

        {/* Sidebar */}
        <div className="col-span-2 hidden md:block bg-white sticky left-0">
          <AppSideBar/>
        </div>

        {/* Sidebar mobile */}
        {isSidebarOpen && (
          <div
            className={clsx(
              'absolute md:hidden z-40 md:z-auto transition-transform transform h-screen top-[72px]',
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
              'bg-white col-span-2 w-64',
            )}
          >
            <AppSideBar/>
          </div>

        )}

        {/* Main content */}
        <div className="flex flex-1 flex-col col-span-9 bg-[#f3f4f6]">
          {/* Truyền toggleSidebar xuống AppHeader */}
          <AppHeader onToggleSidebar={toggleSidebar}/>
          <main className="flex flex-1 flex-col overflow-y-auto max-h-screen md:max-h-[85vh]">
            <Outlet/>
          </main>
        </div>

        {/* Sidebar Overlay (Mobile Only) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(MainUserLayout);
