import styles from './app-header.module.scss';
import { AppHeaderProps } from './app-header.types';
// import useAppHeaderViewModel from './app-header.view-model';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
// import { HiOutlineHome } from 'react-icons/hi2';

function AppHeader(props: AppHeaderProps) {
  const { className, testingID } = props;

  // const { isAuthenticated, user, initials, handleGoToHomeClick } = useAppHeaderViewModel(props);

  return (
    <header className={'bg-white shadow-md p-4 sticky z-50 w-full top-0'} data-testid={testingID}>
      <div className="flex items-center justify-between">

        <div className="text-[24px] font-bold text-mine-shaft">
          Danh sách khách hàng
        </div>

        <div className="flex items-center gap-x-3">

          {/** Avatar */}
          <div className="bg-blue-600 w-[36px] h-[36px] rounded-full">

          </div>

          {/** Admin Name */}
          <div className="text-[14px] text-mine-shaft">
            Nguyễn Chí Toàn
          </div>

          {/** Button */}
          <div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#999999"/>
            </svg>
          </div>

        </div>

      </div>
    </header>
  );
}

export default React.memo(withResourceBundle( AppHeader , () => import('./translations')));
