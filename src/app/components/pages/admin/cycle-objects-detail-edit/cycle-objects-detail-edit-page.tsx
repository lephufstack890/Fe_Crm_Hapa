import { CycleObjectsDetailEditPageProps } from './cycle-objects-detail-edit-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox } from '@mui/material';
import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CycleObjectsDetailEditPage({ className }: CycleObjectsDetailEditPageProps) {
  const [ formData, setFormData ] = useState({
    name: '',
    brand: '',
    sku: '',
    replacementCycle: '',
    price: '',
    link: '',
    notes: '',
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
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Lõi lọc RYO Sediment Filter</h2>

      <div className="mx-6 mt-6 mb-20">
        <div className="grid grid-cols-3 gap-6">
          {/* Form Section */}

          <div className="col-span-2">
            <div className="bg-white mb-[30px] shadow">
              <h3 className="text-lg p-6 border-b border-b-solid font-semibold text-gray-700 mb-4">
                Thông tin Sản phẩm chu kỳ
              </h3>

              <div className="p-6">
                {/* Tên Sản phẩm chu kỳ */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tên Sản phẩm chu kỳ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên sản phẩm chu kỳ"
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
                      Mã SKU sản phẩm  <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="sku"
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      placeholder="Nhập mã sku"
                      className="mt-1 block w-full border border-solid p-2 outline-none"
                    />
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

                <div className="mb-6 grid grid-cols-2 gap-x-4">

                  {/* Chu kỳ chăm sóc */}
                  <div>
                    <label
                      htmlFor="replacementCycle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chu kỳ chăm sóc (tháng)
                    </label>
                    <select
                      id="replacementCycle"
                      name="replacementCycle"
                      value={formData.replacementCycle}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-solid p-[9px]"
                    >
                      <option value="">- Chọn -</option>
                      <option value="6">6 tháng</option>
                      <option value="12">12 tháng</option>
                    </select>
                  </div>

                  {/* Giá bán niêm yết */}
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Giá bán niêm yết <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Nhập giá"
                      className="mt-1 block w-full p-2 border border-solid outline-none"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* Mô tả sản phẩm gốc */}
            <div className="bg-white mb-[30px] py-[15px]">
              <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Mô tả sản phẩm gốc</div> </div>

            {/* Link mua sản phẩm online */}
            <div className="bg-white mb-[30px] py-[15px]">
              <div className="px-[20px] pb-[15px] mb-[15px] border-b border-solid border-b-[#E8EAEB] text-[14px] font-semibold text-[#333]">Link mua sản phẩm online</div>

              <div className="px-[20px]">

                <div className="grid grid-cols-3 gap-x-6 mb-4">

                  {/* Nền tảng */}
                  <div className="col-span-1">
                    <label
                      htmlFor="platform"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nền tảng
                    </label>
                    <select
                      id="platform"
                      // name="platform"
                      // value={formData.brand}
                      // onChange={handleChange}
                      className="mt-1 block w-full border border-solid p-[9px]"
                    >
                      <option value="">- Chọn -</option>
                      <option value="RYO Hyundai">RYO Hyundai</option>
                      <option value="3M">3M</option>
                    </select>
                  </div>

                  <div className="col-span-2">

                    <label
                      htmlFor="link"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Link chi tiết
                    </label>
                    <input
                      type="text"
                      id="link"
                      name="link"
                      // value={formData.name}
                      // onChange={handleChange}
                      placeholder="Nhập Link chi tiết"
                      className="outline-none px-[12px] py-[9px] mt-1 block w-full border border-solid"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-x-6">
                  <div className="col-span-1">
                    <button className="flex items-center w-full justify-center gap-x-2 text-[#0076DC] border border-solid border-[#0076DC] rounded-sm py-[10px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#0076DC"/>
                      </svg>

                      <span>Thêm link</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Image Upload Section */}
          <div className="bg-white shadow">
            <div className=" ">
              <h3 className="text-lg p-6 border-b border-b-solid font-semibold text-gray-700 mb-4">
                Thông tin bổ sung
              </h3>

              <div className="flex items-center justify-center w-full h-48">
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

              <div className="flex items-center justify-between p-5">
                <div><button className="text-[14px] text-[#0076DC]">Đổi ảnh</button></div>
                <div><button className="text-[14px] text-[#0076DC]">Xóa</button></div>
              </div>
            </div>

            {/* Ghi chú */}
            <div className="px-6 mb-6">
              <label
                htmlFor="sku"
                className="block text-sm font-medium text-gray-700"
              >
                Ghi chú
              </label>

              <input
                type="text"
                // id="sku"
                // name="sku"
                // value={formData.sku}
                // onChange={handleChange}
                placeholder=""
                className="mt-1 block w-full border border-solid p-2 outline-none"
              />
            </div>

            {/* Tags */}
            <div className="px-6 pb-6">
              <label
                htmlFor="sku"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>

              <input
                type="text"
                // id="sku"
                // name="sku"
                // value={formData.sku}
                // onChange={handleChange}
                placeholder=""
                className="mt-1 block w-full border border-solid p-2 outline-none"
              />
            </div>
          </div>

        </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(CycleObjectsDetailEditPage, () => import('./translations')));
