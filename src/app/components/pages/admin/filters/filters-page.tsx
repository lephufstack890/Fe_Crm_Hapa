import React from 'react';
import { FiltersPageProps } from './filters-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table , Button, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function FiltersPage() {

  const dataList = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50', // Thay URL bằng ảnh thực tế
      name: 'Lõi lọc 3M RT20B6G20NN 20”',
      brand: '3M',
      code: 'RT20B6G20NN 20”',
      replacementCycle: '6 tháng',
      price: '880,000đ',
      usageCount: 125,
      notes: 'Hoặc thay khi lỗi...',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc 3M AP917HD-S',
      brand: '3M',
      code: 'AP917HD-S',
      replacementCycle: '12 tháng',
      price: '8,900,000đ',
      usageCount: 56,
      notes: '',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc 3M HF20-MS',
      brand: '3M',
      code: 'HF20-MS',
      replacementCycle: '12 tháng',
      price: '2,580,000đ',
      usageCount: 180,
      notes: 'Thay khi hết công suất',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc RYO Sediment Filter',
      brand: 'RYO Hyundai',
      code: 'RYO Sediment',
      replacementCycle: '6 tháng',
      price: '280,000đ',
      usageCount: 122,
      notes: 'abc',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc RYO Pre-Carbon Filter',
      brand: 'RYO Hyundai',
      code: 'RYO Pre-Carbon',
      replacementCycle: '9 tháng',
      price: '300,000đ',
      usageCount: 25,
      notes: 'Có thể 9-12 tháng',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc RYO UF Membrane Filter',
      brand: 'RYO Hyundai',
      code: 'RYO UF',
      replacementCycle: '24 tháng',
      price: '680,000đ',
      usageCount: 38,
      notes: '',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc RYO Post Carbon Filter',
      brand: 'RYO Hyundai',
      code: 'RYO Post Carbon',
      replacementCycle: '12 tháng',
      price: '320,000đ',
      usageCount: 20,
      notes: '',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/50',
      name: 'Lõi lọc RYO TCR Filter',
      brand: 'RYO Hyundai',
      code: 'RYO TCR Filter',
      replacementCycle: '12 tháng',
      price: '360,000đ',
      usageCount: 110,
      notes: '...',
    },
  ];

  return (
    <Page>
      {/* Nút Tạo lõi lọc */}
      <div className="flex justify-end mt-6 mx-6">
        <Button color="blue" className="bg-[#0076DC] flex items-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
          </svg>

          <span className="ml-2">Tạo lõi lọc</span>
        </Button>
      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid">
          <div className="inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Tất cả lõi lọc</div>
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
              placeholder="Tìm theo tên lõi lọc, mã lõi lọc"
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
              <Table.HeadCell className="bg-[#E8EAEB]">Ảnh</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tên lõi lọc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Thương hiệu</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Mã lõi lọc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Chu kỳ thay thế</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Giá bán</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tổng lượt sử dụng</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Ghi chú</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {dataList.map((item) => (
                <Table.Row
                  key={item.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="p-4">
                    <Checkbox/>
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={item.image}
                      alt="Ảnh lõi lọc"
                      className="h-10 w-10 object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                    <Link to={`/admin/filters/123`}>{item.name}</Link>
                  </Table.Cell>
                  <Table.Cell>{item.brand}</Table.Cell>
                  <Table.Cell>{item.code}</Table.Cell>
                  <Table.Cell>{item.replacementCycle}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.usageCount}</Table.Cell>
                  <Table.Cell>{item.notes}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle( FiltersPage , () => import('./translations')));
