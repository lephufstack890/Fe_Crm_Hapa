import { LoginPageProps } from './login-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';

function LoginPage({ className, styles }: LoginPageProps) {

  return (
    <Page>
      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <h1 className="text-mine-shaft text-[24px] font-bold mb-10">Tra cứu Lịch thay lõi lọc, Lịch sử đơn hàng...</h1>

        <form className="w-[320px] mx-auto">
          <div className="p-2 border border-solid border-dusty-gray mb-[20px]">
            <input
              className="w-full border-none outline-none text-center"
              type="text"
              placeholder="Nhập số điện thoại mua hàng"
            />
          </div>

          <button
            type="submit"
            className="bg-science-blue py-[12px] rounded-full w-full text-center text-white text-[16px] font-bold"
          >Tiếp tục</button>
        </form>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <div className="text-mine-shaft text-[22px] mb-10">Chưa tìm thấy thông tin khách hàng 0975322500.</div>

        <div className="text-mine-shaft text-[22px] mb-10">
          <div className="font-bold">Bạn đã từng mua hàng tại HAPA chưa?</div>
          <div>(Website, Điện thoại, Zalo, Facebook, Shopee, Tiki, Lazada, TiktokShop...)</div>
        </div>

        <div className="flex items-center justify-center gap-x-5 mb-10">
          <button
            className="border w-[190px] border-solid border-science-blue py-[12px] rounded-full  text-center text-science-blue text-[16px] font-bold"
          >Chưa từng mua</button>

          <button

            className="bg-science-blue py-[12px] rounded-full w-[190px] text-center text-white text-[16px] font-bold"
          >Đã từng mua</button>
        </div>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <h1 className="text-mine-shaft text-[22px]  mb-10">Xin vui lòng nhập thông tin
          Mã đơn hàng</h1>

        <form className="w-[320px] mx-auto mb-10">
          <div className="p-2 border border-solid border-dusty-gray mb-[20px]">
            <input
              className="w-full border-none outline-none text-center"
              type="text"
              placeholder="Nhập mã đơn hàng"
            />
          </div>

          <button
            type="submit"
            className="bg-science-blue py-[12px] rounded-full w-full text-center text-white text-[16px] font-bold"
          >Tiếp tục</button>
        </form>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <div className="text-caribbean-green text-[22px]  mb-10">
          <div>Gửi thành công.</div>
          <div>
            HAPA sẽ phản hồi cho Quý khách trong thời gian
            sớm nhất.
          </div>
        </div>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <h1 className="text-mine-shaft text-[22px] mb-10">
          Mã xác nhận đã được gửi đến
          số điện thoại 0975322500
        </h1>

        <form className="w-[320px] mx-auto mb-10">
          <div className="p-2 border border-solid border-dusty-gray mb-[20px]">
            <input
              className="w-full border-none outline-none text-center"
              type="text"
              placeholder="Nhập mã xác nhận gồm 6 chữ số"
            />
          </div>

          <button
            type="submit"
            className="bg-science-blue py-[12px] rounded-full w-full text-center text-white text-[16px] font-bold"
          >Tiếp tục</button>
        </form>

        <div className="text-[16px] text-mine-shaft font-normal mb-10">
          Nếu không nhận được mã, thử lại sau <span className="font-bold">55 giây</span>
        </div>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <h1 className="text-mine-shaft text-[22px] mb-10">
          Mã xác nhận đã được gửi đến
          số điện thoại 0975322500
        </h1>

        <form className="w-[320px] mx-auto mb-10">
          <div className="p-2 border border-solid border-dusty-gray mb-[20px]">
            <input
              className="w-full border-none outline-none text-center"
              type="text"
              value={123456}
              placeholder="Nhập mã xác nhận gồm 6 chữ số"
            />
          </div>

          <button
            type="submit"
            className="bg-science-blue py-[12px] rounded-full w-full text-center text-white text-[16px] font-bold"
          >Tiếp tục</button>
        </form>

        <div className="text-[16px] text-science-blue font-bold mb-10">
          Gửi lại mã xác nhận
        </div>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>

      <div className="bg-white rounded-lg mt-16 w-[650px] mx-auto text-center py-10 mb-20">
        <h1 className="text-mine-shaft text-[22px] mb-10">
          Mã xác nhận đã được gửi đến
          số điện thoại 0975322500
        </h1>

        <form className="w-[320px] mx-auto mb-10">
          <div className="p-2 border border-solid border-dusty-gray mb-[20px]">
            <input
              className="w-full border-none outline-none text-center"
              type="text"
              placeholder="Nhập mã xác nhận gồm 6 chữ số"
            />
          </div>
        </form>

        <div className="text-[16px] text-mine-shaft font-normal mb-10">
          Nếu không nhận được mã, thử lại sau <span className="font-bold">55 giây</span>
        </div>

        <div className="text-[16px] text-science-blue font-normal">
          Thay đổi số điện thoại
        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle( LoginPage , () => import('./translations')));
