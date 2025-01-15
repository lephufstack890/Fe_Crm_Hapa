import AppHeader from './components/app-header';
import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {

  return (
    <div className={clsx('main-layout', 'flex bg-[#F3F5F7] ')}>
      <div className="flex flex-1 flex-col">
        <AppHeader/>
        <main className="flex flex-1 flex-col ">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default React.memo(MainLayout);
