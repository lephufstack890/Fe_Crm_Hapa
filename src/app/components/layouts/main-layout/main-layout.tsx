import AppHeader from './components/app-header';
import styles from './main-layout.module.scss';
import { MainLayoutProps } from './main-layout.types';
import clsx from 'clsx';
import React from 'react';

function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID } = props;

  return (
    <div className={clsx('main-layout', 'flex bg-[#F3F5F7] ', styles.mainLayout, className)} data-testid={testingID}>
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader/>
        <main className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default React.memo(MainLayout);
