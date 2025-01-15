import styles from './app-header.module.scss';
import { AppSidebarProps } from './app-sidebar.types';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function AppSidebar() {
  return (
    <div className="flex flex-col justify-between h-full">

      <div className="flex-1">
        <div className="flex items-center gap-x-2 mt-[80px] mb-5 px-4">
          <div className="flex-1 ">
            <div>Xin chào Quý khách</div>
            <div className="font-semibold">Nguyễn Chí Toàn</div>
          </div>

          <div>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.7071 7.7071C7.51957 7.89457 7.26526 7.99989 7.0001 7.99989C6.73493 7.99989 6.48063 7.89457 6.2931 7.7071L0.636099 2.0501C0.540589 1.95785 0.464406 1.84751 0.411997 1.7255C0.359588 1.6035 0.332002 1.47228 0.330848 1.3395C0.329694 1.20672 0.354996 1.07504 0.405277 0.952145C0.455558 0.829249 0.529811 0.717596 0.623704 0.623704C0.717597 0.529811 0.829248 0.455558 0.952145 0.405277C1.07504 0.354996 1.20672 0.329694 1.3395 0.330848C1.47228 0.332002 1.6035 0.359588 1.7255 0.411997C1.84751 0.464406 1.95785 0.540588 2.0501 0.636098L7.0001 5.5861L11.9501 0.636098C12.1387 0.45394 12.3913 0.353146 12.6535 0.355424C12.9157 0.357703 13.1665 0.462872 13.3519 0.64828C13.5373 0.833688 13.6425 1.0845 13.6448 1.3467C13.6471 1.60889 13.5463 1.8615 13.3641 2.0501L7.7071 7.7071Z" fill="#333333"/>
            </svg>
          </div>
        </div>

        <div>
          <NavLink
            className={({ isActive }) =>
              `p-4 flex items-center ${
                isActive ? 'bg-[#F0F9FE] text-[#0076DC]' : 'text-mine-shaft hover:bg-[#F0F9FE] hover:text-[#0076DC]'
              }`
            }
            to="/account/1"
          >
            Thời gian thay lõi
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `p-4 flex items-center ${
                isActive ? 'bg-[#F0F9FE] text-[#0076DC]' : 'text-mine-shaft hover:bg-[#F0F9FE] hover:text-[#0076DC]'
              }`
            }
            to="/orders"
          >
            Lịch sử đơn hàng
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `p-4 flex items-center ${
                isActive ? 'bg-[#F0F9FE] text-[#0076DC]' : 'text-mine-shaft hover:bg-[#F0F9FE] hover:text-[#0076DC]'
              }`
            }
            to="/account"
          >
            Tài khoản của tôi
          </NavLink>
        </div>
      </div>

      <div className="mx-4 mb-4 bg-[#FFF8D4] p-3 rounded-md text-center">
        <div>Tổng điểm tích lũy</div>
        <div><span className="font-semibold">187.000</span> điểm</div>
      </div>
    </div>
  );
}

export default React.memo(withResourceBundle( AppSidebar , () => import('./translations')));
