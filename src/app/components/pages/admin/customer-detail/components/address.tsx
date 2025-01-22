import React from 'react';
import { Table } from 'flowbite-react';

function Address() {
  const data = [
    {
      phoneNumber: '0981234567',
      address: 'Số 1, Ngõ 2, Đường ABC',
      ward: 'Phường 1',
      district: 'Quận Hoàn Kiếm',
      province: 'Hà Nội',
      postalCode: '100000'
    },
    {
      phoneNumber: '0912345678',
      address: 'Số 3, Đường XYZ',
      ward: 'Phường 2',
      district: 'Quận Ba Đình',
      province: 'Hà Nội',
      postalCode: '200000'
    },
    {
      phoneNumber: '0933456789',
      address: 'Số 5, Đường Lê Văn Lương',
      ward: 'Phường 3',
      district: 'Quận Cầu Giấy',
      province: 'Hà Nội',
      postalCode: '300000'
    },
    {
      phoneNumber: '0974567890',
      address: 'Số 7, Đường Nguyễn Văn Cừ',
      ward: 'Phường 4',
      district: 'Quận Thanh Xuân',
      province: 'Hà Nội',
      postalCode: '400000'
    }
  ];

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="bg-[#E8EAEB]">Số điện thoại</Table.HeadCell>
        <Table.HeadCell className="bg-[#E8EAEB]">Địa chỉ</Table.HeadCell>
        <Table.HeadCell className="bg-[#E8EAEB]">Phường xã</Table.HeadCell>
        <Table.HeadCell className="bg-[#E8EAEB]">Quận huyện</Table.HeadCell>
        <Table.HeadCell className="bg-[#E8EAEB]">Tỉnh thành phố</Table.HeadCell>
        <Table.HeadCell className="bg-[#E8EAEB]">Mã bưu điện</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((item, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">{item.phoneNumber}</Table.Cell>
            <Table.Cell>{item.address}</Table.Cell>
            <Table.Cell>{item.ward}</Table.Cell>
            <Table.Cell>{item.district}</Table.Cell>
            <Table.Cell>{item.province}</Table.Cell>
            <Table.Cell>{item.postalCode}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Address;
