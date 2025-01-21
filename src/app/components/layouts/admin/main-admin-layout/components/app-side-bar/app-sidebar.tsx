import { withResourceBundle } from '@lib/i18n';
import { CustomFlowbiteTheme, Sidebar } from 'flowbite-react';
import React from 'react';
import { HiAnnotation, HiHome, HiOutlineShoppingCart, HiUser } from 'react-icons/hi';
import { IoSettingsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const customTheme: CustomFlowbiteTheme = {
  root: {
    base: 'text-[18px] h-full',
    collapsed: {
      on: 'w-16',
      off: 'w-100',
    },
    inner: 'h-full text-white overflow-y-auto overflow-x-hidden rounded bg-[#263A53] px-3 py-4 dark:bg-[#263A53]',
  },
  collapse: {
    button: 'group text-[13px] flex w-full items-center rounded-lg p-2 text-white font-normal transition duration-75 hover:bg-blue-600 dark:text-white dark:hover:bg-gray-700',
    icon: {
      base: 'h-6 w-6 text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white',
      open: {
        off: '',
        on: 'text-white',
      },
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left text-[18px]',
      icon: {
        base: 'h-6 w-6 transition delay-0 ease-in-out',
        open: {
          on: 'rotate-180',
          off: '',
        },
      },
    },
    list: 'space-y-2 py-2',
  },
  cta: {
    base: 'mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700',
    color: {
      blue: 'bg-cyan-50 dark:bg-cyan-900',
      dark: 'bg-dark-50 dark:bg-dark-900',
      failure: 'bg-red-50 dark:bg-red-900',
      gray: 'bg-alternative-50 dark:bg-alternative-900',
      green: 'bg-green-50 dark:bg-green-900',
      light: 'bg-light-50 dark:bg-light-900',
      red: 'bg-red-50 dark:bg-red-900',
      purple: 'bg-purple-50 dark:bg-purple-900',
      success: 'bg-green-50 dark:bg-green-900',
      yellow: 'bg-yellow-50 dark:bg-yellow-900',
      warning: 'bg-yellow-50 dark:bg-yellow-900',
    },
  },
  item: {
    base: 'flex text-[18px] items-center justify-center rounded-lg p-2 text-white font-normal hover:bg-blue-600 dark:text-white dark:hover:bg-gray-700',
    active: 'bg-gray-100 dark:bg-gray-700',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold',
    },
    content: {
      base: 'flex-1 whitespace-nowrap px-3 text-[18px]',
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-white transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white',
      active: 'text-gray-700 dark:text-gray-100',
    },
    label: '',
    listItem: '',
  },
  items: {
    base: '',
  },
  itemGroup: {
    base: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700 text-[18px]',
  },
  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    },
    img: 'mr-3 h-6 sm:h-7',
  },
};

function AppSidebar() {
  return (
    <Sidebar className="h-screen !text-white !rounded-none max-w-full" theme={customTheme}>
      <Sidebar.Items className="rounded-none">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiHome}>
            Tổng quan
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineShoppingCart}>
            <Link className="w-100 block" to="/admin/orders">Đơn đặt hàng / Tickets</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiAnnotation}>
            Danh sách tin nhắn
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Khách hàng">
            <Sidebar.Item href="#">Lịch chăm sóc định kỳ</Sidebar.Item>
            <Sidebar.Item href="#">Lịch sử đơn hàng</Sidebar.Item>
            <Sidebar.Item href="#"><Link className="w-100 block" to="/admin/customers">Danh sách khách hàng</Link></Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={IoSettingsSharp} label="Cấu hình">
            <Sidebar.Item href="#"><Link className="w-100 block" to="/admin/devices">Danh sách thiết bị</Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link className="w-100 block" to="/admin/filters">Danh sách lõi lọc</Link></Sidebar.Item>
            <Sidebar.Item href="#">Cấu hình tin nhắn</Sidebar.Item>
            <Sidebar.Item href="#">Quản lý kết nối API</Sidebar.Item>
            <Sidebar.Item href="#">Nhật ký hoạt động</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
}

export default React.memo(withResourceBundle( AppSidebar , () => import('./translations')));
