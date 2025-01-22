import { FiltersCreateAndEditPageProps } from './filters-create-and-edit-page.types';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import { Checkbox, Table , Button, Dropdown } from 'flowbite-react';
import React, { useState } from 'react';

function FiltersCreateAndEditPage({ className }: FiltersCreateAndEditPageProps) {

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
      <h2 className=" mx-6 mt-6 text-[24px] font-bold text-mine-shaft mb-4">Thêm mới lõi lọc</h2>

      <div className="mx-6 mt-6 mb-20">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="col-span-2">
            <div className="bg-white  shadow">
              <h3 className="text-lg p-6 border-b border-b-solid font-semibold text-gray-700 mb-4">
                Thông tin lõi lọc
              </h3>

              <div className="p-6">
                {/* Tên lõi lọc */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tên lõi lọc <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên lõi lọc"
                    className="outline-none p-3 mt-1 block w-full border border-solid"
                  />
                </div>

                <div className="mb-6 grid grid-cols-2 gap-x-4">
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

                  {/* Mã lõi lọc */}
                  <div>
                    <label
                      htmlFor="sku"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mã lõi lọc (SKU) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="sku"
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      placeholder="Nhập mã lõi lọc"
                      className="mt-1 block w-full border border-solid p-2 outline-none"
                    />
                  </div>

                </div>

                <div className="mb-6 grid grid-cols-2 gap-x-4">

                  {/* Chu kỳ thay thế */}
                  <div>
                    <label
                      htmlFor="replacementCycle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chu kỳ thay thế (tháng) <span className="text-red-500">*</span>
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

                {/* Link sản phẩm */}
                <div className="mb-6">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link sản phẩm chi tiết (website)
                  </label>
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="Nhập URL"
                    className="mt-1 block w-full border border-solid p-3 outline-none"
                  />
                </div>

                {/* Ghi chú */}
                <div className="col-span-2">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ghi chú
                  </label>

                  <input
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Nhập ghi chú"
                    className="mt-1 block w-full border border-solid p-3 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <div className="bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 ">
                Ảnh lõi lọc
              </h3>

              <div className="flex items-center justify-center w-full h-48 border border-dashed border-gray-300 rounded-md">
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
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(FiltersCreateAndEditPage , () => import('./translations')));
