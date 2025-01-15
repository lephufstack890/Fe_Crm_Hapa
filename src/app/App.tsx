import MainLayout from '@components/layouts/main-layout';
import MainUserLayout from '@components/layouts/user/main-layout';
import HomePage from '@components/pages/home-page/home-page';
import LoginPage from '@components/pages/login-page/login-page';
import AccountPage from '@components/pages/user/account/account-page';
import FilterReplacementSchedulePage from '@components/pages/user/filter-replacement-schedule/filter-replacement-schedule-page';
import OrderDetailPage from '@components/pages/user/order-detail-page/order-detail-page';
import OrderPage from '@components/pages/user/orders/order-page';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>

      <Route element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Route>

      <Route element={<MainUserLayout/>}>
        <Route path="/account" index element={<AccountPage/>}/>
        <Route path="/orders" element={<OrderPage/>}/>
        <Route path="/orders/:id" element={<OrderDetailPage/>}/>
        <Route path="/filter-replacement-schedule" element={<FilterReplacementSchedulePage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
