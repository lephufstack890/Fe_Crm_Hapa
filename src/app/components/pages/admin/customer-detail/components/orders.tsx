import React from 'react';
import { Table } from 'flowbite-react';

function Orders() {
  return (
    <Table hoverable>
        <Table.Head>
            <Table.HeadCell className="bg-[#E8EAEB]">Mã đơn hàng</Table.HeadCell>
            <Table.HeadCell className="bg-[#E8EAEB]">Trạng thái</Table.HeadCell>
            <Table.HeadCell className="bg-[#E8EAEB]">Địa chỉ nhận hàng</Table.HeadCell>
            <Table.HeadCell className="bg-[#E8EAEB]">Giá trị</Table.HeadCell>
            <Table.HeadCell className="bg-[#E8EAEB]">Chi nhánh</Table.HeadCell>
            <Table.HeadCell className="bg-[#E8EAEB]">Nguồn đơn</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">ORD001</Table.Cell>
                <Table.Cell className="text-[#00CB77]">Thành công</Table.Cell>
                <Table.Cell className="text-mine-shaft">Hà Nội</Table.Cell>
                <Table.Cell>500.000đ</Table.Cell>
                <Table.Cell>Chi nhánh 1</Table.Cell>
                <Table.Cell>Online</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">ORD002</Table.Cell>
                <Table.Cell className="text-[#FF0041]">Thất bại</Table.Cell>
                <Table.Cell className="text-mine-shaft">TP.HCM</Table.Cell>
                <Table.Cell>1.200.000đ</Table.Cell>
                <Table.Cell>Chi nhánh 2</Table.Cell>
                <Table.Cell>Offline</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">ORD003</Table.Cell>
                <Table.Cell className="text-mine-shaft">Chưa gửi</Table.Cell>
                <Table.Cell className="text-mine-shaft">Đà Nẵng</Table.Cell>
                <Table.Cell>750.000đ</Table.Cell>
                <Table.Cell>Chi nhánh 3</Table.Cell>
                <Table.Cell>Online</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">ORD004</Table.Cell>
                <Table.Cell className="text-[#00CB77]">Thành công</Table.Cell>
                <Table.Cell className="text-mine-shaft">Cần Thơ</Table.Cell>
                <Table.Cell>300.000đ</Table.Cell>
                <Table.Cell>Chi nhánh 4</Table.Cell>
                <Table.Cell>Offline</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
  );
}

export default Orders;
