import { OrderDetailPageProps } from './order-detail-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OrderDetailPage({ className, styles }: OrderDetailPageProps) {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Quay lại trang trước đó trong lịch sử
  };

  return (
    <Page>
      <div className="m-4 md:m-6">
        {/** Quay lại danh sách */}
        <button
          onClick={goBack}
          className="mb-4 md:mb-6 flex items-center gap-x-2 text-[#999999] text-[12px] md:text-[14px]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6666 6.16658H3.52492L8.18325 1.50825L6.99992 0.333252L0.333252 6.99992L6.99992 13.6666L8.17492 12.4916L3.52492 7.83325H13.6666V6.16658Z"
              fill="#999999"
            />
          </svg>
          <span>Quay lại Danh sách đơn hàng</span>
        </button>

        {/** Chi tiết đơn hàng */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-y-6 lg:gap-x-6 mb-6">
          <div className="bg-white rounded-lg py-6 px-4 lg:py-10 lg:px-8 col-span-7">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-10">
              <h1 className="text-mine-shaft text-[20px] lg:text-[24px] font-bold">
                Chi tiết đơn hàng #HP681278
              </h1>
              <div className="text-[#999999] text-[12px] lg:text-[14px]">
                25/10/2024
              </div>
            </div>

            <div className="flex items-center gap-x-2 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.95992 22.1867C9.2994 22.0877..."
                  fill="#999999"
                />
              </svg>
              <span className="font-semibold text-[#999999]">
                ĐỊA CHỈ NHẬN HÀNG
              </span>
            </div>

            <div>
              {/** Thông tin người nhận */}
              <div className="flex flex-col gap-y-4">
                <div className="flex items-start gap-x-2">
                  <div className="text-[#666666] w-32 lg:w-[120px]">Họ và tên:</div>
                  <div className="text-mine-shaft">Nguyễn Chí Toàn</div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="text-[#666666] w-32 lg:w-[120px]">Số điện thoại:</div>
                  <div className="text-mine-shaft">1234567890</div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="text-[#666666] w-32 lg:w-[120px]">Địa chỉ:</div>
                  <div className="text-mine-shaft">
                    Chung cư Hoàng Anh Thanh Bình, Đường D4, Tân Hưng, Quận 7, TP.
                    Hồ Chí Minh
                  </div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="text-[#666666] w-32 lg:w-[120px]">Trạng thái:</div>
                  <div className="text-[#00CB77]">Đã nhận hàng</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="h-full bg-blue-500 rounded-lg flex flex-col items-center justify-center text-white shadow-md p-6">
              <div className="text-white flex items-center gap-x-2 mb-4">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.8398 18.3449H12.9098C14.4098..." fill="white"/>
                </svg>
                <span>ĐIỂM TÍCH LŨY THÊM</span>
              </div>

              <p className="text-2xl lg:text-4xl font-bold mt-2">+140.000</p>
              <p className="text-sm lg:text-base font-medium mt-1">điểm</p>
            </div>
          </div>
        </div>

        {/** Thông tin sản phẩm */}
        <div className="bg-white rounded-lg py-6 px-4 lg:py-10 lg:px-8">
          <div className="flex items-center gap-x-2 mb-6">
            <svg
              width="24"
              height="29"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.3333 6.99992H18.6667C18.6667..." fill="#999999"/>
            </svg>
            <span className="font-semibold text-[#999999]">THÔNG TIN SẢN PHẨM</span>
          </div>

          <div className="ml-0 lg:ml-[40px]">
            {/** Danh sách sản phẩm */}
            <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-x-6 text-gray-700 mb-4 lg:mb-6">
              <div className="col-span-7">Máy Lọc Nước Đầu Nguồn 3M AP904</div>
              <div className="col-span-1">1 x</div>
              <div className="col-span-2">22.500.000đ</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-x-6 text-gray-700 mb-4 lg:mb-6">
              <div className="col-span-7">Bộ Lọc Thô 3M 20 inch</div>
              <div className="col-span-1">1 x</div>
              <div className="col-span-2">5.500.000đ</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-x-6 text-gray-700 mb-4 lg:mb-6">
              <div className="col-span-7">
                Công kỹ thuật lắp đặt và vật tư
              </div>
              <div className="col-span-1">1 x</div>
              <div className="col-span-2">1.500.000đ</div>
            </div>

            {/** Divider */}
            <hr className="my-4"/>

            {/** Tổng cộng */}
            <div className="flex flex-col items-end space-y-2">
              <div className="flex justify-between w-full lg:min-w-[300px] text-gray-700 text-sm">
                <span>Tạm tính:</span>
                <span className="font-semibold">29.850.000đ</span>
              </div>
              <div className="flex justify-between w-full lg:min-w-[300px] text-gray-700 text-sm">
                <span>Giảm giá:</span>
                <span className="font-semibold text-red-500">-1.900.000đ</span>
              </div>
              <div className="flex justify-between w-full lg:min-w-[300px] text-gray-700 text-sm">
                <span>Phí vận chuyển:</span>
                <span className="font-semibold">50.000đ</span>
              </div>
              <div className="flex justify-between w-full lg:min-w-[300px] text-gray-800 font-bold text-base mt-4">
                <span>Tổng cộng thanh toán:</span>
                <span className="text-blue-600">28.000.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle( OrderDetailPage , () => import('./translations')));
