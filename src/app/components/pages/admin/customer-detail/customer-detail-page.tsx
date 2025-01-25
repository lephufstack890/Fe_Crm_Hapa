import { CustomerDetailPageProps } from './customer-detail-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table , Button, Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import Orders from './components/orders';
import Address from './components/address';

function CustomerDetailPage({ className }: CustomerDetailPageProps) {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <Page>

      {/* Tiêu đề */}
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Nguyễn Chí Toàn</h2>

      <div className="grid grid-cols-[60%_40%] gap-y-4 mx-6">
        <div className="bg-white p-6 rounded-lg shadow mr-6">
          <h6 className="text-xl font-bold text-gray-500 mb-4 text-black">Thông tin cá nhân</h6>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-500 font-medium">Số điện thoại:</span>
                <span className="w-2/3 text-gray-800">0975322500</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-500 font-medium">Email:</span>
                <span className="w-2/3 text-gray-800">sale@hapa.vn</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-500 font-medium">Ngày sinh:</span>
                <span className="w-2/3 text-gray-800">09/04/1992</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-500 font-medium">Giới tính:</span>
                <span className="w-2/3 text-gray-800">Nam</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-500 font-medium">Mã số thuế:</span>
                <span className="w-2/3 text-gray-800">---</span>
              </div>
            </div>
            <div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Mã khách hàng:</span>
                <span className="w-1/2 text-gray-800">CUZN01077</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Nhóm khách hàng:</span>
                <span className="w-1/2 text-gray-800">Doanh nghiệp</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Nhận tin nhắn:</span>
                <span className="text-[#00CB77] px-4 border border-[#82FCD1] rounded rounded-xl">BẬT</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Mô tả:</span>
                <span className="w-1/2 text-gray-800">---</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Ngày tạo:</span>
                <span className="w-1/2 text-gray-800">15/12/2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h6 className="text-xl font-bold text-gray-500 mb-4 text-black">Thông tin thành viên</h6>
            <div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Điểm hiện tại:</span>
                <span className="w-1/2 text-gray-800">187,000</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Hạng thẻ:</span>
                <span className="w-1/2 text-gray-800">VIP-SD</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Tổng SL đơn:</span>
                <span className="w-1/2 text-gray-800">3</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Tổng chi tiêu:</span>
                <span className="w-1/2 text-gray-800">37,400,000</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/2 text-gray-500 font-medium">Lần mua cuối:</span>
                <span className="w-1/2 text-gray-800">20/11/2024</span>
              </div>
            </div>
        </div>
      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid flex">
          <div
            className={`inline-block px-[20px] pb-6 font-bold text-[14px] cursor-pointer ${
              activeTab === "orders"
                ? "text-[#0076DC] border-b border-b-solid border-b-[#0076DC]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Đơn hàng
          </div>
          <div
            className={`inline-block px-[20px] pb-6 font-bold text-[14px] cursor-pointer ${
              activeTab === "address"
                ? "text-[#0076DC] border-b border-b-solid border-b-[#0076DC]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("address")}
          >
            Địa chỉ
          </div>
        </div>
        <div className="p-6">
          {activeTab === "orders" && (
            <Orders />
          )}
          {activeTab === "address" && (
            <Address />
          )}
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle(CustomerDetailPage , () => import('./translations')));
