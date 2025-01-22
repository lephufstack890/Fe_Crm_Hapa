import { AccountPageProps } from './account-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';

function AccountPage({ className, styles }: AccountPageProps) {

  return (
    <Page>
      <div className="bg-white rounded-lg mx-6 mt-6 py-10 px-8 mb-20">
        <h1 className="text-mine-shaft text-[24px] font-bold mb-10">Thông tin tài khoản</h1>

        <div>
          <div className="flex items-center  gap-x-2 mb-6">
            <div className="text-[#666666] w-[120px]">Họ và tên:</div>
            <div className="text-mine-shaft">Nguyễn Chí Toàn</div>
          </div>

          <div className="flex items-center  gap-x-2 mb-6">
            <div className="text-[#666666] w-[120px]">Số điện thoại:</div>
            <div className="text-mine-shaft">1234567890</div>
          </div>

          <div className="flex items-center  gap-x-2 mb-6">
            <div className="text-[#666666] w-[120px]">Địa chỉ:</div>
            <div className="text-mine-shaft">Chung cư Hoàng Anh Thanh Bình, Đường D4, Tân Hưng,
              Quận 7, TP. Hồ Chí Minh</div>
          </div>

          <div className="flex items-center  gap-x-2 mb-6">
            <div className="text-[#666666] w-[120px]">Mã khách hàng:</div>
            <div className="text-mine-shaft">223456755</div>
          </div>

        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle( AccountPage , () => import('./translations')));
