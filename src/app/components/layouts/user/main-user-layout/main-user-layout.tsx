import AppHeader from './components/app-header';
import AppSideBar from './components/app-side-bar';
import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainUserLayout() {

  return (
    <div className={clsx('bg-[#F3F5F7] h-screen')}>
      <div className="grid grid-cols-11 h-full">
        {/* Sidebar */}
        <div className="col-span-2 bg-white sticky left-0">
          <AppSideBar/>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col col-span-9 bg-[#f3f4f6]">
          <AppHeader/>
          <main className="flex flex-1 flex-col overflow-y-auto max-h-[85vh]">
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainUserLayout);
