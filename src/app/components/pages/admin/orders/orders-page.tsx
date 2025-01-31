import { OrdersPageProps } from './orders-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table, Button } from 'flowbite-react';
import React from 'react';

function OrdersPage({ className }: OrdersPageProps) {
  const fakeData = [
    {
      orderId: 'ORD001',
      createdDate: '2025-01-22 10:00',
      customerName: 'Nguyễn Văn A',
      totalAmount: '500,000 VND',
      salesSource: 'Online',
      shippingPartner: 'Viettel Post',
      status: 'Thành công',
    },
    {
      orderId: 'ORD002',
      createdDate: '2025-01-21 14:30',
      customerName: 'Trần Thị B',
      totalAmount: '250,000 VND',
      salesSource: 'In-store',
      shippingPartner: 'Giao Hàng Nhanh',
      status: 'Thất bại',
    },
    {
      orderId: 'ORD003',
      createdDate: '2025-01-20 09:15',
      customerName: 'Lê Minh C',
      totalAmount: '800,000 VND',
      salesSource: 'Online',
      shippingPartner: 'Bưu Điện',
      status: 'Chưa gửi',
    },
  ];

  return (
    <Page>
      {/* Nút đồng bộ */}
      <div className="flex justify-end mt-6 mx-6">
        <Button color="blue" className="bg-[#0076DC] flex items-center">
          <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.49332 5V8L12.6577 4L8.49332 0V3C3.89167 3 0.164551 6.58 0.164551 11C0.164551 12.57 0.643455 14.03 1.45551 15.26L2.97551 13.8C2.50702 12.97 2.24674 12.01 2.24674 11C2.24674 7.69 5.04729 5 8.49332 5ZM15.5311 6.74L14.0111 8.2C14.4692 9.04 14.7399 9.99 14.7399 11C14.7399 14.31 11.9393 17 8.49332 17V14L4.32893 18L8.49332 22V19C13.095 19 16.8221 15.42 16.8221 11C16.8221 9.43 16.3432 7.97 15.5311 6.74Z" fill="white"/>
          </svg>

          <span className="ml-2">Đồng bộ</span>
        </Button>
      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid">
          <div className="inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Tất cả đơn hàng</div>
        </div>

        {/* Tìm kiếm */}
        <div className="flex mx-[20px] max-w-[650px] gap-x-1 mb-6 items-center border border-gray-300 px-3 py-2 ">
          {/* Icon tìm kiếm */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>

          {/* Input tìm kiếm */}
          <div className="border-r px-1 border-r-solid flex-1">
            <input
              type="text"
              placeholder="Tìm theo mã đơn hàng, tên, số điện thoại người nhận"
              className="w-full text-gray-700 focus:outline-none bg-transparent border-none outline-none focus:border-none shadow-none"
            />
          </div>

          {/* Trạng thái gửi tin */}
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <span className="mr-1">Trạng thái gửi tin</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.250178 2.10139C2.27018 4.49216 6.00018 8.92293 6.00018 8.92293V14.4614C6.00018 14.9691 6.45018 15.3845 7.00018 15.3845H9.00018C9.55018 15.3845 10.0002 14.9691 10.0002 14.4614V8.92293C10.0002 8.92293 13.7202 4.49216 15.7402 2.10139C16.2502 1.49216 15.7802 0.615234 14.9502 0.615234H1.04018C0.210178 0.615234 -0.259822 1.49216 0.250178 2.10139Z" fill="#999999"/>
            </svg>

          </button>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4 bg-[#E8EAEB]">
                <Checkbox/>
              </Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Mã đơn hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Ngày tạo đơn</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tên khách hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tổng số tiền</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Nguồn bán hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Đối tác vận chuyển</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Trạng thái gửi tập tin</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {fakeData.map((order, index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    <Checkbox/>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                    {order.orderId}
                  </Table.Cell>
                  <Table.Cell className="text-mine-shaft">{order.createdDate}</Table.Cell>
                  <Table.Cell>{order.customerName}</Table.Cell>
                  <Table.Cell>{order.totalAmount}</Table.Cell>
                  <Table.Cell>{order.salesSource}</Table.Cell>
                  <Table.Cell>{order.shippingPartner}</Table.Cell>
                  <Table.Cell className={`text-${order.status === 'Thành công' ? 'green-400' : order.status === 'Thất bại' ? 'red-400' : 'gray-400'}`}>
                    {order.status}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle(OrdersPage, () => import('./translations')));
