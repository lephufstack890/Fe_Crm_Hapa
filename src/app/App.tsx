import MainAdminLayout from '@components/layouts/admin/main-admin-layout/main-admin-layout';
import MainCustomerLayout from '@components/layouts/customer/main-customer-layout';
import CustomersPage from '@components/pages/admin/customers/customers-page';
import DevicesPage from '@components/pages/admin/devices/devices-page';
import FiltersPage from '@components/pages/admin/filters/filters-page';
import LoginsPage from '@components/pages/admin/login-page/login-page';
import FiltersCreateAndEditPage from '@components/pages/admin/filters-create-and-edit/filters-create-and-edit-page';
import FiltersDetailPage from '@components/pages/admin/filters-detail/filters-detail-page';
import OrdersPage from '@components/pages/admin/orders/orders-page';
import AccountPage from '@components/pages/customer/account-page/account-page';
import FilterReplacementSchedulePage from '@components/pages/customer/filter-replacement-schedule-page/filter-replacement-schedule-page';
import HomePage from '@components/pages/customer/home-page/home-page';
import LoginPage from '@components/pages/customer/login-page/login-page';
import OrderDetailPage from '@components/pages/customer/order-detail-page/order-detail-page';
import OrderPage from '@components/pages/customer/orders-page/order-page';
import NotFoundPage from '@components/pages/not-found-page/not-found-page';
import { Routes, Route } from 'react-router-dom';
import CustomerDetailPage from '@components/pages/admin/customer-detail/customer-detail-page';
import CycleObjectsPage from '@components/pages/admin/cycle-objects/cycle-objects-page';

function App() {
  return (
    <Routes>
      {/** Customer */}
      <Route element={<MainCustomerLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/account" index element={<AccountPage/>}/>
        <Route path="/orders" element={<OrderPage/>}/>
        <Route path="/orders/:id" element={<OrderDetailPage/>}/>
        <Route path="/filter-replacement-schedule" element={<FilterReplacementSchedulePage/>}/>
      </Route>

      {/** Admin */}
        <Route path="/admin/login" index element={<LoginsPage />}/>
      <Route element={<MainAdminLayout/>}>
        <Route path="/admin/customers" index element={<CustomersPage/>}/>
        <Route path="/admin/customers/:id" index element={<CustomerDetailPage/>}/>
        <Route path="/admin/orders" index element={<OrdersPage/>}/>
        <Route path="/admin/cycle-objects" index element={<CycleObjectsPage/>}/>
        <Route path="/admin/filters" index element={<FiltersPage/>}/>
        <Route path="/admin/filters/:id" index element={<FiltersDetailPage/>}/>
        <Route path="/admin/filters/:id/edit" index element={<FiltersCreateAndEditPage/>}/>
        <Route path="/admin/filters/create" index element={<FiltersCreateAndEditPage/>}/>

      </Route>

      {/** 404 Page */}
      <Route path="*" element={<NotFoundPage/>}/>

    </Routes>
  );
}

export default App;
