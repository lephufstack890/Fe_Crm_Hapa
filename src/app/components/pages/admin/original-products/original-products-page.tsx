import { OriginalProductsPageProps } from './original-products-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, IconButton, Paper, TableHead, TableRow, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button } from 'flowbite-react';
import React from 'react';

function createData(
  image: string,
  deviceName: string,
  brand: string,
  deviceID: string,
  sum: number,
  notes: string,
) {
  return {
    image,
    deviceName,
    brand,
    deviceID,
    sum,
    notes,
    childrens: [
      {
        image: '',
        filter_name: 'Máy Lọc Nước Đầu Nguồn 3M AP904',
        brand: 'RYO Hyundai',
        filter_code: 'RYO Sediment',
        replacement_cycle: '6 tháng',
        price: '280,000đ',
      },
      {
        image: '',
        filter_name: 'Máy Lọc Nước Đầu Nguồn 3M AP904',
        brand: 'RYO Hyundai',
        filter_code: 'RYO Sediment',
        replacement_cycle: '6 tháng',
        price: '280,000đ',
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
          {row.image}
        </TableCell>
        <TableCell>{row.deviceName}</TableCell>
        <TableCell>{row.brand}</TableCell>
        <TableCell>{row.deviceID}</TableCell>
        <TableCell>{row.sum}</TableCell>
        <TableCell>{row.notes}</TableCell>
      </TableRow>
      <TableRow className="bg-[#F0F9FE]">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: '60px', paddingRight: '0' }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, margrinLeft: 0, marginRight: 0 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="bg-white "></TableCell>
                    <TableCell className="bg-white "><span className="text-mine-shaft font-semibold">Ảnh</span></TableCell>
                    <TableCell className="bg-white "> <span className="text-mine-shaft font-semibold">Tên lõi lọc</span></TableCell>
                    <TableCell className="bg-white">
                      <span className="text-mine-shaft font-semibold">Thương hiệu</span>
                    </TableCell>
                    <TableCell className="bg-white">
                      <span className="text-mine-shaft font-semibold">Mã lõi lọc</span>
                    </TableCell>
                    <TableCell className="bg-white">
                      <span className="text-mine-shaft font-semibold">Chu kỳ thay thế</span>
                    </TableCell>
                    <TableCell className="bg-white">
                      <span className="text-mine-shaft font-semibold">Giá bán</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.childrens.map((item) => (
                    <TableRow key={item.filter_code}>
                      <TableCell className="bg-white"></TableCell>
                      <TableCell component="th" scope="row" className="bg-white">
                        {item.image}
                      </TableCell>
                      <TableCell className="bg-white">{item.filter_name}</TableCell>
                      <TableCell className="bg-white">{item.brand}</TableCell>
                      <TableCell className="bg-white">{item.filter_code}</TableCell>
                      <TableCell className="bg-white">
                        {item.replacement_cycle}
                      </TableCell>
                      <TableCell className="bg-white">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
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
  createData('','Máy Lọc Nước Đầu Nguồn 3M AP904', '3M', 'AP904', 25, ''),
  createData('','Máy Lọc Nước Đầu Nguồn 3M AP904', '3M', 'AP904', 25, ''),
];

function OriginalProductPage({ className }: OriginalProductsPageProps) {

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
          <div className="inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC]  border-b border-b-solid border-b-[#0076DC]">Tất cả sản phẩm gốc</div>
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
              placeholder="Tìm theo tên Sản phẩm gốc, Mã SKU sản phẩm"
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
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead className="bg-[#E8EAEB]">
                <TableRow>
                  <TableCell/>
                  <TableCell><span className="text-mine-shaft font-semibold">Ảnh</span></TableCell>
                  <TableCell>
                    <span className="text-mine-shaft font-semibold">Tên thiết bị</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-mine-shaft font-semibold">Thương hiệu</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-mine-shaft font-semibold">Mã thiết bị</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-mine-shaft font-semibold">Tổng lượt sử dụng</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-mine-shaft font-semibold">Ghi chú</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.deviceID} row={row}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle( OriginalProductPage , () => import('./translations')));
