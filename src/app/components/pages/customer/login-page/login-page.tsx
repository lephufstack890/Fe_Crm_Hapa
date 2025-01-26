import { LoginPageProps } from './login-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';

function LoginPage({ className, styles }: LoginPageProps) {

  return (
    <Page>
      <div className="bg-white rounded-lg mt-8 md:mt-16 max-w-lg w-full mx-auto text-center py-10 px-4 mb-10 md:mb-20">
        <h1 className="text-mine-shaft text-[20px] md:text-[24px] font-bold mb-6 md:mb-10">
          Tra cứu Lịch thay lõi lọc, Lịch sử đơn hàng...
        </h1>
        <form className="w-full md:w-[320px] mx-auto">
          <div className="p-2 border border-solid border-dusty-gray mb-6 md:mb-[20px]">
            <input
              className="w-full border-none outline-none text-center text-[14px]"
              type="text"
              placeholder="Nhập số điện thoại mua hàng"
            />
          </div>
          <button
            type="submit"
            className="bg-science-blue py-3 md:py-[12px] rounded-full w-full text-center text-white text-[14px] md:text-[16px] font-bold"
          >
            Tiếp tục
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg mt-8 md:mt-16 max-w-lg w-full mx-auto text-center py-10 px-4 mb-10 md:mb-20">
        <div className="text-mine-shaft text-[18px] md:text-[22px] mb-6 md:mb-10">
          Chưa tìm thấy thông tin khách hàng 0975322500.
        </div>
        <div className="text-mine-shaft text-[16px] md:text-[22px] mb-6 md:mb-10">
          <div className="font-bold">Bạn đã từng mua hàng tại HAPA chưa?</div>
          <div>
            (Website, Điện thoại, Zalo, Facebook, Shopee, Tiki, Lazada,
            TiktokShop...)
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-5 mb-6 md:mb-10">
          <button className="border w-full md:w-[190px] border-solid border-science-blue py-3 md:py-[12px] rounded-full text-center text-science-blue text-[14px] md:text-[16px] font-bold">
            Chưa từng mua
          </button>
          <button className="bg-science-blue w-full md:w-[190px] py-3 md:py-[12px] rounded-full text-center text-white text-[14px] md:text-[16px] font-bold">
            Đã từng mua
          </button>
        </div>
        <div className="text-[14px] md:text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-8 md:mt-16 max-w-lg w-full mx-auto text-center py-10 px-4 mb-10 md:mb-20">
        <h1 className="text-mine-shaft text-[18px] md:text-[22px] font-bold mb-6 md:mb-10">
          Xin vui lòng nhập thông tin Mã đơn hàng
        </h1>
        <form className="w-full md:w-[320px] mx-auto mb-6 md:mb-10">
          <div className="p-2 border border-solid border-dusty-gray mb-6 md:mb-[20px]">
            <input
              className="w-full border-none outline-none text-center text-[14px]"
              type="text"
              placeholder="Nhập mã đơn hàng"
            />
          </div>
          <button
            type="submit"
            className="bg-science-blue py-3 md:py-[12px] rounded-full w-full text-center text-white text-[14px] md:text-[16px] font-bold"
          >
            Tiếp tục
          </button>
        </form>
        <div className="text-[14px] md:text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle( LoginPage , () => import('./translations')));
