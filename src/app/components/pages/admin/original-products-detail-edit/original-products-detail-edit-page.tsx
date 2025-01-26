import { OriginalProductsDetailEditPageProps } from './original-products-detail-edit-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Table } from 'flowbite-react';
import React, { useState } from 'react';

function OriginalProductsDetailEditPage({ className }: OriginalProductsDetailEditPageProps) {

  const [ formData, setFormData ] = useState({
    name: '',
    sku: '',
    linkWebsite: '',
    type: '',
    brand: '',
    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Page>

      {/* Tiêu đề */}
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Máy Lọc Nước RYO Hyundai RP901</h2>

      <div className="grid grid-cols-10 gap-x-[30px] mx-6">

        {/* Thông tin sản phẩm gốc */}
        <div className="bg-white py-[15px] col-span-7">
          <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Thông tin sản phẩm gốc</div>

          <form onSubmit={handleSubmit}>
            <div className="px-6">
              {/* Tên sản phẩm gốc */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tên sản phẩm gốc <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập tên sản phẩm gốc"
                  className="outline-none p-3 mt-1 block w-full border border-solid"
                />
              </div>

              <div className="mb-6 grid grid-cols-2 gap-x-4">
                {/* Mã SKU sản phẩm */}
                <div>
                  <label
                    htmlFor="sku"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mã SKU sản phẩm <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="sku"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="Nhập mã SKU"
                    className="mt-1 block w-full border border-solid p-2 outline-none"
                  />
                </div>

                {/* Link chi tiết trên website */}
                <div>
                  <label
                    htmlFor="linkWebsite"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link chi tiết trên website
                  </label>
                  <input
                    type="text"
                    id="linkWebsite"
                    name="linkWebsite"
                    value={formData.linkWebsite}
                    onChange={handleChange}
                    placeholder="Nhập link chi tiết"
                    className="mt-1 block w-full border border-solid p-2 outline-none"
                  />
                </div>

              </div>

              <div className="mb-6 grid grid-cols-2 gap-x-4">
                {/* Loại sản phẩm gốc */}
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loại sản phẩm gốc <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-solid p-[9px]"
                  >
                    <option value="">- Chọn -</option>
                    <option value="RYO Hyundai">RYO Hyundai</option>
                    <option value="3M">3M</option>
                  </select>
                </div>

                {/* Thương hiệu */}
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Thương hiệu
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-solid p-[9px]"
                  >
                    <option value="">- Chọn -</option>
                    <option value="RYO Hyundai">RYO Hyundai</option>
                    <option value="3M">3M</option>
                  </select>
                </div>

              </div>

            </div>

          </form>
        </div>

        {/* Ảnh sản phẩm gốc */}
        <div className="bg-white py-[15px] col-span-3">
          <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Ảnh sản phẩm gốc</div>

          <div className=" flex items-center justify-center w-full h-48 mb-4">
            {formData.image ? (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <span className="text-blue-500">Upload ảnh</span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div className="flex items-center justify-between px-5">
            <div><button className="text-[14px] text-[#0076DC]">Đổi ảnh</button></div>
            <div><button className="text-[14px] text-[#0076DC]">Xóa</button></div>
          </div>
        </div>

      </div>

      {/* Bảng */}
      <div className="bg-white mx-6 mt-6 py-6 mb-6">
        {/* Tabs */}
        <div className="mb-6 font-bold border-b border-b-solid">
          <button
            className={'inline-block pl-[20px] pb-6 font-bold text-[14px] text-[#0076DC] border-b-[#0076DC] border-b border-b-solid'}
          >
            Thành phẩm sản phẩm chu kỳ
          </button>

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
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm theo tên Sản phẩm chu kỳ, Mã SKU"
              className="w-full text-gray-700 focus:outline-none bg-transparent"
            />
          </div>

        </div>

        {/* Content */}
        <div className="overflow-x-auto">

          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="bg-[#E8EAEB]">STT</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Ảnh</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Sản phẩm chu kỳ</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Thương hiệu</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Mã SKU sản phẩm</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Chu kỳ chăm sóc</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]">Giá bán niêm yết</Table.HeadCell>
              <Table.HeadCell className="bg-[#E8EAEB]"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="text-mine-shaft">1</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                  Lõi lọc RYO Sediment Filter
                </Table.Cell>
                <Table.Cell>RYO Hyundai</Table.Cell>
                <Table.Cell>RYO Sediment</Table.Cell>
                <Table.Cell>6 tháng</Table.Cell>
                <Table.Cell>250,000</Table.Cell>
                <Table.Cell className="flex items-center gap-x-10">
                  <button>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#999999"/>
                    </svg>

                  </button>

                  <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#999999"/>
                    </svg>
                  </button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="text-mine-shaft">2</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white">
                  Lõi lọc RYO Sediment Filter
                </Table.Cell>
                <Table.Cell>RYO Hyundai</Table.Cell>
                <Table.Cell>RYO Sediment</Table.Cell>
                <Table.Cell>6 tháng</Table.Cell>
                <Table.Cell>250,000</Table.Cell>
                <Table.Cell className="flex items-center gap-x-10">
                  <button>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#999999"/>
                    </svg>

                  </button>

                  <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#999999"/>
                    </svg>
                  </button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="text-mine-shaft"></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-[#0076DC] dark:text-white"></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell className="font-semibold text-mine-shaft">Giá trọn bộ:</Table.Cell>
                <Table.Cell className="font-semibold text-mine-shaft">1,940,000đ</Table.Cell>

              </Table.Row>
            </Table.Body>
          </Table>

        </div>
      </div>

      {/** Mô tả */}
      <div className="grid grid-cols-10 gap-x-[30px] mx-6">

        {/* Mô tả sản phẩm gốc */}
        <div className="bg-white py-[15px] col-span-7">
          <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Mô tả sản phẩm gốc</div>

        </div>

        {/* Thông tin bổ sung */}
        <div className="bg-white py-[15px] col-span-3">
          <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Thông tin bổ sung</div>

          <form className="px-[20px]">
            <div className="mb-6">
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700"
              >
                Ghi chú
              </label>
              <input
                type="text"
                id="note"
                name="note"
                placeholder=""
                className="outline-none p-3 mt-1 block w-full border border-solid"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <input
                type="text"
                id="tag"
                name="tag"
                placeholder=""
                className="outline-none p-3 mt-1 block w-full border border-solid"
              />
            </div>
          </form>
        </div>

      </div>

    </Page>
  );
}

export default React.memo(withResourceBundle(OriginalProductsDetailEditPage , () => import('./translations')));
