import { OriginalProductsDetailPageProps } from './original-products-detail-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Box, Collapse, IconButton, Paper, TableHead, TableRow, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Table as TableFlowbite } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function createData(
  CareScheduleCode: string,
  Customer: string,
  ProvinceOrCity: string,
  StartTime: string,
  TechnicalFee: string,
  Notes: string,
) {
  return {
    CareScheduleCode,
    Customer,
    ProvinceOrCity,
    StartTime,
    TechnicalFee,
    Notes,
    childrens: [
      {
        image: '',
        OriginalProduct: 'Lõi số 1 - RYO Sediment Filter',
        LastCareDate: '01/01/2024',
        CareCycle: '6 tháng',
        NextCareDate: '01/07/2025',
        price: '111,111',
      },
      {
        image: '',
        OriginalProduct: 'Lõi số 1 - RYO Sediment Filter',
        LastCareDate: '01/01/2024',
        CareCycle: '6 tháng',
        NextCareDate: '01/07/2025',
        price: '111,111',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [ open, setOpen ] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ?
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 9.99984L6 15.9998L0 9.99984L1.41 8.58984L6 13.1698L10.59 8.58984L12 9.99984ZM12 1.99984L6 7.99984L0 1.99984L1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984Z" fill="#0076DC"/>
              </svg>
              :
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 0L16.0001 6L10.0001 12L8.59009 10.59L13.1701 6L8.59009 1.41L10.0001 0ZM2.00009 0L8.00009 6L2.00009 12L0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0Z" fill="#999999"/>
              </svg>

            }
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Link to={''} className="text-[#0076DC]">{row.CareScheduleCode}</Link>
        </TableCell>
        <TableCell>
          row.Customer
        </TableCell>
        <TableCell>{row.ProvinceOrCity}</TableCell>
        <TableCell>{row.StartTime}</TableCell>
        <TableCell>{row.TechnicalFee}</TableCell>
        <TableCell>{row.Notes}</TableCell>
      </TableRow>
      <TableRow className="bg-[#F0F9FE]">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: '60px', paddingRight: '0' }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, margrinLeft: 0, marginRight: 0 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="bg-[#666] text-white "><span className="text-white font-semibold">Ảnh</span></TableCell>
                    <TableCell className="bg-[#666] text-white "> <span className="text-white font-semibold">Sản phẩm gốc</span></TableCell>
                    <TableCell className="bg-[#666] text-white">
                      <span className="text-white font-semibold">Ngày chăm sóc gần nhất</span>
                    </TableCell>
                    <TableCell className="bg-[#666] text-white">
                      <span className="text-white font-semibold">Chu kỳ chăm sóc</span>
                    </TableCell>
                    <TableCell className="bg-[#666] text-white min-w-[250px]">
                      <span className="text-white font-semibold">Ngày chăm sóc tiếp theo</span>
                    </TableCell>
                    <TableCell className="bg-[#666] text-white">
                      <span className="text-white font-semibold">Đơn giá</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.childrens.map((item) => (
                    <TableRow key={item.OriginalProduct}>
                      <TableCell component="th" scope="row" className="bg-white">
                        {item.image}
                      </TableCell>
                      <TableCell className="bg-white">
                        {item.OriginalProduct}
                      </TableCell>
                      <TableCell className="bg-white">{item.LastCareDate}</TableCell>
                      <TableCell className="bg-white">{item.CareCycle}</TableCell>
                      <TableCell className="bg-white min-w-[250px]">
                        <span className="text-[#00CB77] mr-2">  {item.NextCareDate}</span>
                        <span
                          className={'px-2 py-1 rounded-full text-[#00CB77] bg-[#F0FDF9]'}
                        >
                          Chỉ còn 15 ngày
                        </span>
                      </TableCell>
                      <TableCell className="bg-white">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell component="th" scope="row" className="bg-white">

                    </TableCell>
                    <TableCell className="bg-white">

                    </TableCell>
                    <TableCell className="bg-white"></TableCell>
                    <TableCell className="bg-white"></TableCell>
                    <TableCell className="bg-white ">
                      <span className="text-right font-semibold text-mine-shaft">Giá trọn bộ lõi lọc</span>

                    </TableCell>
                    <TableCell className="bg-white">
                      <span className="font-semibold text-mine-shaft">1,159,111</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData('5558465375', 'Hoàng Oanh', 'TP. Hồ Chí Minh', '', '0', 'abc'),
  createData('5558465375', 'Hoàng Oanh', 'TP. Hồ Chí Minh', '', '0', 'abc'),
];
function OriginalProductsDetailPage({ className }: OriginalProductsDetailPageProps) {

  const [ activeTab, setActiveTab ] = useState('products'); // Tab mặc định

  return (
    <Page>

      {/* Tiêu đề */}
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Máy Lọc Nước RYO Hyundai RP901</h2>

      {/* Thông tin lõi lọc */}
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

          {/* Loại sản phẩm gốc */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Loại sản phẩm gốc:</span>
            <span className="w-2/3 text-gray-800">Thiết bị lọc nước</span>
          </div>

          {/* Tổng lượt sử dụng */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Tổng lượt sử dụng:</span>
            <span className="w-2/3 text-gray-800">111</span>
          </div>

          {/* Ngày cập nhật */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Ngày cập nhật:</span>
            <span className="w-2/3 text-gray-800">22/12/2024 15:40</span>
          </div>
        </div>

        <div className="flex flex-col gap-x-6 gap-y-4 col-span-2">
          {/* Link web */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600">Link website:</span>
            <a
              href="https://hapa.vn/loi-loc-nuoc-ryo-hyundai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 text-blue-500 hover:underline"
            >
              https://hapa.vn/loi-loc-nuoc-ryo-hyundai
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

          {/* Để trống */}
          <div className="flex">
            <span className="w-1/3 font-medium text-gray-600"></span>
            <span className="w-2/3 text-gray-800"></span>
          </div>
        </div>

        <div>
          <div className="border border-solid border-concrete w-[120px] h-[120px]"></div>
        </div>

      </div>

      {/* Bảng */}
      <div className="bg-white mx-6 mt-6 py-6 mb-20">
        {/* Tabs */}
        <div className="mb-6 font-bold border-b border-b-solid">
          <button
            className={`inline-block pl-[20px] pb-6 font-bold text-[14px] ${
              activeTab === 'products' ? 'text-[#0076DC] border-b-[#0076DC]' : 'text-[#999] border-b-transparent'
            } border-b border-b-solid`}
            onClick={() => setActiveTab('products')}
          >
            Thành phẩm sản phẩm chu kỳ
          </button>
          <button
            className={`inline-block pl-[20px] pb-6 font-bold text-[14px] ${
              activeTab === 'usage' ? 'text-[#0076DC] border-b-[#0076DC]' : 'text-[#999] border-b-transparent'
            } border-b border-b-solid`}
            onClick={() => setActiveTab('usage')}
          >
            Danh sách lượt sử dụng
          </button>
        </div>

        {/* Content */}
        <div className="overflow-x-auto">
          {activeTab === 'products' && (
            <TableFlowbite hoverable>
              <TableFlowbite.Head>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">STT</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Ảnh</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Sản phẩm chu kỳ</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Thương hiệu</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Mã SKU sản phẩm</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Chu kỳ chăm sóc</TableFlowbite.HeadCell>
                <TableFlowbite.HeadCell className="bg-[#E8EAEB]">Giá bán niêm yết</TableFlowbite.HeadCell>
              </TableFlowbite.Head>
              <TableFlowbite.Body className="divide-y">
                <TableFlowbite.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableFlowbite.Cell className="text-mine-shaft">1</TableFlowbite.Cell>
                  <TableFlowbite.Cell></TableFlowbite.Cell>
                  <TableFlowbite.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                    Lõi lọc RYO Sediment Filter
                  </TableFlowbite.Cell>
                  <TableFlowbite.Cell>RYO Hyundai</TableFlowbite.Cell>
                  <TableFlowbite.Cell>RYO Sediment</TableFlowbite.Cell>
                  <TableFlowbite.Cell>6 tháng</TableFlowbite.Cell>
                  <TableFlowbite.Cell>250,000</TableFlowbite.Cell>
                </TableFlowbite.Row>
                <TableFlowbite.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableFlowbite.Cell className="text-mine-shaft">2</TableFlowbite.Cell>
                  <TableFlowbite.Cell></TableFlowbite.Cell>
                  <TableFlowbite.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                    Lõi lọc RYO Sediment Filter
                  </TableFlowbite.Cell>
                  <TableFlowbite.Cell>RYO Hyundai</TableFlowbite.Cell>
                  <TableFlowbite.Cell>RYO Sediment</TableFlowbite.Cell>
                  <TableFlowbite.Cell>6 tháng</TableFlowbite.Cell>
                  <TableFlowbite.Cell>250,000</TableFlowbite.Cell>
                </TableFlowbite.Row>
                <TableFlowbite.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableFlowbite.Cell className="text-mine-shaft"></TableFlowbite.Cell>
                  <TableFlowbite.Cell></TableFlowbite.Cell>
                  <TableFlowbite.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white"></TableFlowbite.Cell>
                  <TableFlowbite.Cell></TableFlowbite.Cell>
                  <TableFlowbite.Cell></TableFlowbite.Cell>
                  <TableFlowbite.Cell className="font-semibold text-mine-shaft">Giá trọn bộ:</TableFlowbite.Cell>
                  <TableFlowbite.Cell className="font-semibold text-mine-shaft">1,940,000đ</TableFlowbite.Cell>
                </TableFlowbite.Row>
              </TableFlowbite.Body>
            </TableFlowbite>
          )}

          {activeTab === 'usage' && (
            <div className="overflow-x-auto">
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead className="bg-[#E8EAEB]">
                    <TableRow>
                      <TableCell/>
                      <TableCell><span className="text-mine-shaft font-semibold">Mã lịch chăm sóc</span></TableCell>
                      <TableCell>
                        <span className="text-mine-shaft font-semibold">Khách hàng</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-mine-shaft font-semibold">Tỉnh/thành</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-mine-shaft font-semibold">Thời gian bắt đầu</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-mine-shaft font-semibold">Phi kỹ thuật</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-mine-shaft font-semibold">Ghi chú</span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.CareScheduleCode} row={row}/>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle(OriginalProductsDetailPage , () => import('./translations')));
