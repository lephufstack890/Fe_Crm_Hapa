import { OrderPageProps } from './order-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderPage() {

  return (
    <Page>
      <div className="bg-white rounded-lg mx-6 mt-6 py-10 px-8 mb-20">
        <h1 className="text-mine-shaft text-[24px] font-bold mb-10">Lịch sử đơn hàng</h1>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ngày đặt hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Mã đơn hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Địa chỉ đơn hàng
                </th>
                <th scope="col" className="px-6 py-3">
                  Tổng số tiền
                </th>
                <th scope="col" className="px-6 py-3">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  25/10/2024
                </th>
                <td className="px-6 py-4 text-[#0076DC]">
                  <Link to="/orders/HP681278">HP681278</Link>
                </td>
                <td className="px-6 py-4">
                  Chung cư Hoàng Anh Thanh Bình, D4, Tân Hưng, Quận 7...
                </td>
                <td className="px-6 py-4">
                  28.000.000đ
                </td>
                <td className="px-6 py-4 text-[#00CB77]">
                  Đã nhận hàng
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle( OrderPage , () => import('./translations')));
