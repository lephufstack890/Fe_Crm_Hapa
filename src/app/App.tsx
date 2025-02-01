import MainAdminLayout from '@components/layouts/admin/main-admin-layout/main-admin-layout';
import MainCustomerLayout from '@components/layouts/customer/main-customer-layout';
import CustomerDetailPage from '@components/pages/admin/customer-detail/customer-detail-page';
import CustomersPage from '@components/pages/admin/customers/customers-page';
import CycleObjectsPage from '@components/pages/admin/cycle-objects/cycle-objects-page';
import CycleObjectsCreatePage from '@components/pages/admin/cycle-objects-create/cycle-objects-create-page';
import CycleObjectsDetailPage from '@components/pages/admin/cycle-objects-detail/cycle-objects-detail-page';
import CycleObjectsDetailEditPage from '@components/pages/admin/cycle-objects-detail-edit/cycle-objects-detail-edit-page';
import DevicesPage from '@components/pages/admin/devices/devices-page';
import FiltersPage from '@components/pages/admin/filters/filters-page';
import FiltersCreateAndEditPage from '@components/pages/admin/filters-create-and-edit/filters-create-and-edit-page';
import FiltersDetailPage from '@components/pages/admin/filters-detail/filters-detail-page';
import LoginsPage from '@components/pages/admin/login-page/login-page';
import OrdersPage from '@components/pages/admin/orders/orders-page';
import OriginalProductsPage from '@components/pages/admin/original-products/original-products-page';
import OriginalProductsCreatePage from '@components/pages/admin/original-products-create/original-products-create-page';
import OriginalProductsDetailPage from '@components/pages/admin/original-products-detail/original-products-detail-page';
import OriginalProductsDetailEditPage from '@components/pages/admin/original-products-detail-edit/original-products-detail-edit-page';
import AccountPage from '@components/pages/customer/account-page/account-page';
import FilterReplacementSchedulePage from '@components/pages/customer/filter-replacement-schedule-page/filter-replacement-schedule-page';
import HomePage from '@components/pages/customer/home-page/home-page';
import LoginPage from '@components/pages/customer/login-page/login-page';
import OrderDetailPage from '@components/pages/customer/order-detail-page/order-detail-page';
import OrderPage from '@components/pages/customer/orders-page/order-page';
import NotFoundPage from '@components/pages/not-found-page/not-found-page';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/** Customer */}
      <Route element={<MainCustomerLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/orders" element={<OrderPage/>}/>
        <Route path="/orders/:id" element={<OrderDetailPage/>}/>
        <Route path="/filter-replacement-schedule" element={<FilterReplacementSchedulePage/>}/>
      </Route>

      {/** Admin */}
      <Route path="admin/login" index element={<LoginsPage/>}/>
      <Route element={<MainAdminLayout/>}>
        <Route path="admin/customers" element={<CustomersPage/>}/>
        <Route path="admin/customers/:id" element={<CustomerDetailPage/>}/>
        <Route path="admin/orders" element={<OrdersPage/>}/>

        {/** các page liên quan đến sản phẩm gốc */}
        <Route path="admin/original-products" element={<OriginalProductsPage/>}/>
        <Route path="admin/original-products/:id" element={<OriginalProductsDetailPage/>}/>
        <Route path="admin/original-products/:id/edit" element={<OriginalProductsDetailEditPage/>}/>
        <Route path="admin/original-products/create" element={<OriginalProductsCreatePage/>}/>

        {/** các page liên quan đến danh sách sản phẩm chu kỳ */}
        <Route path="admin/cycle-objects" element={<CycleObjectsPage/>}/>
        <Route path="admin/cycle-objects/:id" element={<CycleObjectsDetailPage/>}/>
        <Route path="admin/cycle-objects/:id/edit" element={<CycleObjectsDetailEditPage/>}/>
        <Route path="admin/cycle-objects/create" element={<CycleObjectsCreatePage/>}/>

        {/** page tạm thời không dùng */}
        <Route path="admin/filters" element={<FiltersPage/>}/>
        <Route path="admin/filters/:id" element={<FiltersDetailPage/>}/>
        <Route path="admin/filters/:id/edit" element={<FiltersCreateAndEditPage/>}/>
        <Route path="admin/filters/create" element={<FiltersCreateAndEditPage/>}/>
        <Route path="admin/devices" element={<DevicesPage/>}/>
      </Route>

      {/** 404 Page */}
      <Route path="*" element={<NotFoundPage/>}/>

    </Routes>
  );
}

export default App;
