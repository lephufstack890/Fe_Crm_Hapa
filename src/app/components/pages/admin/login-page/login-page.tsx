import React from 'react';
import Logo from '@assets/images/login/logo.png'
import Background1 from '@assets/images/login/bg-1.png'
import Icon from '@assets/images/login/icon-gg.jpg'
import { withResourceBundle } from '@lib/i18n';
import { LoginsPageProps } from './login-page.types';

function LoginsPage({ className }: LoginsPageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-blue-900 py-4 px-6 flex justify-between items-center">
        <img src={Logo} alt="Logo HAPA.VN" className="h-10" />
        <div className="text-white text-sm">
          <span className="text-xl">Hotline: </span>
          <span className="font-bold text-xl">0977.190.775</span>
        </div>
      </div>

      <div className="flex flex-row items-center mt-12 w-full mt-[100px] mb-[100px] mx-auto">
        <img
          src={Background1}
          alt="Illustration"
          className="w-[60%] mb-8"
        />

        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[40%]">
          <h1 className="text-xl font-semibold mb-4">Quản lý cửa hàng (Tenant)</h1>
          <button
            className="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            <img
              src={Icon}
              alt="Google Icon"
              className="h-6 w-6 mr-2"
            />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(withResourceBundle( LoginsPage , () => import('./translations')));
