import { FilterReplacementSchedulePageProps } from './filter-replacement-schedule-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';
import { Link } from 'react-router-dom';

function FilterReplacementSchedulePage({ className }: FilterReplacementSchedulePageProps) {

  const data = [
    {
      id: 1,
      title: 'Combo Máy Lọc Nước Đầu Nguồn 3M AP904 + Bộ Lọc Thô 3M',
      filters: [
        {
          name: 'Lõi lọc 3M RT20B6G20NN 20"',
          lastChange: '18/06/2024',
          cycle: '6 tháng',
          nextChange: '18/12/2024',
          status: 'Quá hạn 12 ngày',
          statusClass: 'text-red-600 bg-red-100',
          price: '880,000',
        },
        {
          name: 'Lõi lọc 3M AP917HD-S',
          lastChange: '18/06/2024',
          cycle: '12 tháng',
          nextChange: '18/06/2025',
          status: 'Còn 35 ngày',
          statusClass: 'text-green-600 bg-green-100',
          price: '8,800,000',
        },
      ],
    },
    {
      id: 2,
      title: 'Máy Lọc Nước 3M ICE140-S',
      filters: [
        {
          name: 'Lõi lọc 3M HF40-S',
          lastChange: '18/06/2024',
          cycle: '6 tháng',
          nextChange: '18/01/2025',
          status: 'Chỉ còn 15 ngày',
          statusClass: 'text-yellow-600 bg-yellow-100',
          price: '3,990,000',
        },
      ],
    },
  ];

  const messages = [
    {
      date: '04/11/2024 09:30',
      phone: '********50',
      content: 'Nhắc lịch thay lõi (Địa điểm: #1558883342)',
    },
    {
      date: '15/07/2024 10:18',
      phone: '********50',
      content: 'Nhắc lịch thay lõi (Địa điểm: #1558883123)',
    },
    {
      date: '08/02/2024 15:25',
      phone: '********50',
      content: 'Nhắc lịch thay lõi (Địa điểm: #1558883574)',
    },
    {
      date: '20/09/2023 09:18',
      phone: '********50',
      content: 'Đơn hàng #ABCXYZ hoàn tất',
    },
    {
      date: '10/06/2023 09:18',
      phone: '********50',
      content: 'Kích hoạt tài khoản',
    },
  ];

  return (
    <Page>
      <div className="p-6 ">
        <div className="bg-white p-6 mb-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row mb-6 items-start md:items-center gap-y-4 md:gap-x-6">
            {/* Số thứ tự */}
            <div className="w-[50px] h-[50px] text-white text-[24px] font-bold bg-[#666] rounded-full flex items-center justify-center">
              1
            </div>

            {/* Nội dung chính */}
            <div className="flex flex-col md:flex-row flex-1 gap-y-4 md:gap-x-4">
              {/* Địa chỉ lắp đặt */}
              <div className="text-[12px] text-[#999] md:text-left">
                <div>Địa chỉ lắp đặt:</div>
                <div>Người nhận hàng | SĐT:</div>
              </div>

              {/* Địa chỉ và thông tin nhận hàng */}
              <div className="flex-1 text-[12px] text-[#999] md:text-left">
                <div className="font-bold text-mine-shaft">
                  Chung cư Hoàng Anh Thanh Bình, Đà, Tân Hưng, Quận 7, TP. Hồ Chí Minh
                </div>
                <div>Lâm Nguyễn | SĐT: ********975</div>
              </div>

              {/* Schedule ID */}
              <div className="text-[12px] text-[#999] md:text-right">
                <div>Schedule ID #5558883574</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left bg-[#F0F9FE]">
              <thead className="bg-mine-shaft text-white">
                <tr>
                  <th className="py-5 px-3">#</th>
                  <th className="py-5 px-3">Ảnh</th>
                  <th className="py-5 px-3">Tên lõi lọc / Dịch vụ</th>
                  <th className="py-5 px-3">Ngày thay gần nhất</th>
                  <th className="py-5 px-3">Chu kỳ thay</th>
                  <th className="py-5 px-3">Ngày thay tiếp theo</th>
                  <th className="py-5 px-3">Đơn giá (VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td colSpan={2} className="p-3 font-bold">{item.id}</td>
                      <td colSpan={4} className="p-3 font-bold">{item.title}</td>
                    </tr>
                    {item.filters.map((filter, index) => (
                      <tr key={index} className="">
                        <td className="p-3"></td>
                        <td className="p-3 bg-white border-b"></td>
                        <td className="p-3 bg-white border-b">{filter.name}</td>
                        <td className="p-3 bg-white">{filter.lastChange}</td>
                        <td className={`p-3 !bg-white ${filter.statusClass}`}>{filter.cycle}</td>
                        <td className="p-3 bg-white">
                          <span className={`px-2 py-1 rounded ${filter.statusClass}`}>
                            {filter.status}
                          </span>
                        </td>
                        <td className="p-3 bg-white">{filter.price}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h1 className="text-[24px] font-bold text-mine-shaft mb-4">Lịch sử gửi tin nhắn</h1>
          <div>
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 py-2 border-b last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16C3.57647 16 0 12.4235 0 8C0 3.57647 3.57647 0 8 0C12.4235 0 16 3.57647 16 8C16 12.4235 12.4235 16 8 16ZM8 0.941176C4.09412 0.941176 0.941176 4.09412 0.941176 8C0.941176 11.9059 4.09412 15.0588 8 15.0588C11.9059 15.0588 15.0588 11.9059 15.0588 8C15.0588 4.09412 11.9059 0.941176 8 0.941176Z" fill="#0076DC"/>
                      <path d="M7.05896 11.4825L2.96484 7.38835L3.62367 6.72952L7.05896 10.1648L12.3766 4.84717L13.0354 5.50599L7.05896 11.4825Z" fill="#0076DC"/>
                    </svg>
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-x-8">
                  <div className="text-sm text-[#999] min-w-[120px]">{message.date}</div>
                  <div className="text-sm text-mine-shaft font-medium min-w-[80px]">
                    {message.phone}
                  </div>
                  <div className="text-sm text-mine-shaft">{message.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle( FilterReplacementSchedulePage , () => import('./translations')));
