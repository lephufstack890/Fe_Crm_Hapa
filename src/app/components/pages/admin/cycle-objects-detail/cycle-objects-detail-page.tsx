import { CycleObjectsDetailPageProps } from './cycle-objects-detail-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox } from '@mui/material';
import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function CycleObjectsDetailPage({ className }: CycleObjectsDetailPageProps) {
  const productData = [
    {
      image: 'https://kinghome.vn/data/products/may-loc-nuoc-ro-nong-lanh-10-loi-sunhouse-shr76210ck-141572591172.jpg',
      productName: 'Máy lọc nước 3M AP904',
      brand: '3M',
      sku: 'AP904',
      careCycle: '24 tháng',
      price: '12,000,000đ',
      usageCount: 10,
      notes: 'Hiệu suất cao, phù hợp dùng lâu dài',
    },
    {
      image: 'https://kinghome.vn/data/products/may-loc-nuoc-ro-nong-lanh-10-loi-sunhouse-shr76210ck-141572591172.jpg',
      productName: 'Máy lọc nước Sunhouse SHR-76210CK',
      brand: 'Sunhouse',
      sku: 'SHR76210CK',
      careCycle: '12 tháng',
      price: '8,000,000đ',
      usageCount: 5,
      notes: 'Sử dụng công nghệ lọc hiện đại, tiết kiệm điện',
    },
    {
      image: 'https://kinghome.vn/data/products/may-loc-nuoc-ro-nong-lanh-10-loi-sunhouse-shr76210ck-141572591172.jpg',
      productName: 'Máy lọc nước Karofi K9',
      brand: 'Karofi',
      sku: 'K9',
      careCycle: '18 tháng',
      price: '10,000,000đ',
      usageCount: 7,
      notes: 'Chất lượng cao, bảo hành dài hạn',
    },
  ];

  return (
    <Page>

      {/* Tiêu đề */}
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Lõi lọc RYO Sediment Filter</h2>

      {/* Thông tin sản phẩm chu kỳ */}
      <div className="grid grid-cols-5 bg-white mx-6 mt-6 p-6 mb-12">
        <div className="flex flex-col gap-x-6 gap-y-4 col-span-2">
          {/* Thương hiệu */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Thương hiệu:</span>
            <span className="w-2/3 text-gray-800">RYO Hyundai</span>
          </div>

          {/* Mã SKU */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Mã SKU:</span>
            <span className="w-2/3 text-gray-800">RYO Sediment</span>
          </div>

          {/* Chu kỳ nhắc lịch */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Chu kỳ nhắc lịch:</span>
            <span className="w-2/3 text-gray-800">6 tháng</span>
          </div>

          {/* Giá bán niêm yết */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Giá bán niêm yết:</span>
            <span className="w-2/3 text-gray-800">280.000đ</span>
          </div>

          {/* Tổng lượt sử dụng */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Tổng lượt sử dụng:</span>
            <span className="w-2/3 text-gray-800">122</span>
          </div>
        </div>

        <div className="flex flex-col gap-x-6 gap-y-4 col-span-2">
          {/* Link mua online */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Link mua online:</span>
            <a
              href="https://hapa.vn/loi-loc-nuoc-ryo-hyundai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 text-blue-500 hover:underline"
            >
              Xem chi tiết
            </a>
          </div>

          {/* Mô tả */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Mô tả:</span>
            <a href="#" className="w-2/3 text-blue-500 hover:underline">
              Xem chi tiết
            </a>
          </div>

          {/* Ghi chú */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Ghi chú:</span>
            <span className="w-2/3 text-gray-800">...</span>
          </div>

          {/* Tags */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Tags:</span>
            <span className="w-2/3 text-gray-800">...</span>
          </div>

          {/* Ngày cập nhật */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Ngày cập nhật:</span>
            <span className="w-2/3 text-gray-800">22/12/2024 15:40</span>
          </div>
        </div>

        <div>
          <div className="border border-solid border-concrete w-[120px] h-[120px]"></div>
        </div>

      </div>

      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        <div className="mb-6 font-bold border-b border-b-solid">
          <div className="inline-block px-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Danh sách lượt sử dụng</div>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="bg-[#E8EAEB]">Mã lịch chăm sóc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Sản phẩm gốc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Tỉnh thành</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Ngày chăm góc gần nhất</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Chu kỳ chăm sóc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB] min-w-[250px]">Ngày thay chăm sóc tiếp theo</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Đơn giá (VND)</Table.HeadCell>
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

export default React.memo(withResourceBundle(CycleObjectsDetailPage, () => import('./translations')));
