import { DevicesPageProps } from './devices-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table , Button } from 'flowbite-react';
import React from 'react';

function DevicesPage() {

  return (
    <Page>
      {/* Nút Tạo thiết bị */}
      <div className="flex justify-end mt-6 mx-6">
        <Button color="blue" className="bg-[#0076DC] flex items-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
          </svg>

          <span className="ml-2">Tạo thiết bị</span>
        </Button>
      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid">
          <div className="inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Tất cả khách hàng</div>
        </div>

        {/* Tìm kiếm */}
        <div className="flex mx-[20px] max-w-[700px] gap-x-1 mb-6 items-center border border-gray-300 px-3 py-2 ">
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
              placeholder="Tìm theo tên thiết bị, mã thiết bị"
              className="w-full text-gray-700 focus:outline-none bg-transparent"
            />
          </div>

          {/* Thương hiệu */}
          <div className="border-r px-1 border-r-solid">
            <select name="Thương hiệu" id="" className="text-mine-shaft outline-none border-none">
              <option value="1">Thương hiệu 1</option>
              <option value="1">Thương hiệu 2</option>
              <option value="1">Thương hiệu 3</option>
            </select>
          </div>

          {/* Bộ lọc khác */}
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <span className="mr-1">Bộ lọc khác</span>
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
              <Table.HeadCell className="bg-[#E8EAEB]">Mã khách hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tên khách hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Số điện thoại</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Điểm hiện tại</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tổng SL đơn hàng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tổng chi tiêu</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Giới tính</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                  <Checkbox/>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                  ABC
                </Table.Cell>
                <Table.Cell className="text-mine-shaft">ABC</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle( DevicesPage , () => import('./translations')));
