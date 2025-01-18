import { FiltersDetailPageProps } from './filters-detail-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table , Button, Dropdown } from 'flowbite-react';
import React from 'react';

function FiltersDetailPage() {

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

      {/* Tiêu đề */}
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Lõi lọc RYO Sediment Filter</h2>

      {/* Thông tin lõi lọc */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 bg-white mx-6 mt-6 p-6 mb-12">
        {/* Thương hiệu */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Thương hiệu:</span>
          <span className="w-2/3 text-gray-800">RYO Hyundai</span>
        </div>

        {/* Link web */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Link web:</span>
          <a
            href="https://hapa.vn/loi-loc-nuoc-ryo-hyundai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-2/3 text-blue-500 hover:underline"
          >
            https://hapa.vn/loi-loc-nuoc-ryo-hyundai
          </a>
        </div>

        {/* Mã lõi lọc */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Mã lõi lọc:</span>
          <span className="w-2/3 text-gray-800">RYO Sediment</span>
        </div>

        {/* Mô tả ngắn */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Mô tả ngắn:</span>
          <a href="#" className="w-2/3 text-blue-500 hover:underline">
            Xem chi tiết
          </a>
        </div>

        {/* Chu kỳ thay thế */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Chu kỳ thay thế:</span>
          <span className="w-2/3 text-gray-800">6 tháng</span>
        </div>

        {/* Ghi chú */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Ghi chú:</span>
          <span className="w-2/3 text-gray-800">abc</span>
        </div>

        {/* Giá bán niêm yết */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Giá bán niêm yết:</span>
          <span className="w-2/3 text-gray-800">280,000đ</span>
        </div>

        {/* Tạo bởi */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Tạo bởi:</span>
          <span className="w-2/3 text-gray-800">Nguyễn Chí Toàn</span>
        </div>

        {/* Tổng lượt sử dụng */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Tổng lượt sử dụng:</span>
          <span className="w-2/3 text-gray-800">122</span>
        </div>

        {/* Thời gian tạo */}
        <div className="flex">
          <span className="w-1/3 font-medium text-gray-600">Thời gian tạo:</span>
          <span className="w-2/3 text-gray-800">22/12/2024 15:40</span>
        </div>
      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid">
          <div className="inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Danh sách lượt sử dụng</div>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="bg-[#E8EAEB]">Mã lịch thay lõi</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tên thiết bị</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tỉnh thành lắp đặt</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Ngày thay gần nhất</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Chu kỳ thay thế</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB] min-w-[250px]">Ngày thay tiếp theo</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Đơn giá</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                  5558465375
                </Table.Cell>
                <Table.Cell className="text-mine-shaft">Máy Lọc Nước RYO Hyundai RP901</Table.Cell>
                <Table.Cell>Hà Nội</Table.Cell>
                <Table.Cell>30/03/2024</Table.Cell>
                <Table.Cell>6 tháng</Table.Cell>
                <Table.Cell className="min-w-[250px]">
                  <span className="text-yellow-600">30/09/2025</span>
                  <span
                    className={'px-2 py-1 rounded-full text-yellow-600 bg-yellow-100'}
                  >
                    Chỉ còn 15 ngày
                  </span>
                </Table.Cell>
                <Table.Cell>250,000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle(FiltersDetailPage , () => import('./translations')));
