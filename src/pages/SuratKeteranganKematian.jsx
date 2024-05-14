import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../docs/docsSuratKeteranganKematian";

const SuratKeteranganKematian = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return `${today.toLocaleDateString("id-ID", {
      day: "numeric",
    })} ${today.toLocaleDateString("id-ID", {
      month: "long",
    })}, ${today.getFullYear()}`;
  };

  const [formData, setFormData] = useState({
    nama: "",
    tempatLahir: "",
    tanggalLahir: "",
    nik: "",
    jenisKelamin: "Laki-laki",
    alamat: "",
    agama: "Islam",
    statusPerkawinan: "Belum Kawin",
    pekerjaan: "",
    kewarganegaraan: "WNI",
    tanggalKematian: "",
    jamKematian: "",
    penyebabKematian: "",
    currentDate: getCurrentDate(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      currentDate: getCurrentDate(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-4 mx-auto mb-8">
      <p className="md:text-2xl text-xl font-bold text-center mb-4">
        Surat Keterangan Kematian
      </p>
      <div className="flex justify-center bg-white lg:w-1/2 md:w-2/3 sm:w-3/4 h-auto mx-auto rounded-md shadow-below-right md:shadow-below-right">
        <form className="w-full px-10 py-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nik"
              className="block text-sm font-medium text-gray-700"
            >
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalLahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tempatLahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempatLahir"
              name="tempatLahir"
              value={formData.tempatLahir}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jenisKelamin"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Kelamin
            </label>
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.tempatTinggal}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="agama"
              className="block text-sm font-medium text-gray-700"
            >
              Agama
            </label>
            <select
              id="agama"
              name="agama"
              value={formData.agama}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Islam">Islam</option>
              <option value="Protestan">Protestan</option>
              <option value="Katolik">Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Khonghucu">Khonghucu</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="statusPerkawinan"
              className="block text-sm font-medium text-gray-700"
            >
              Status Perkawinan
            </label>
            <select
              id="statusPerkawinan"
              name="statusPerkawinan"
              value={formData.statusPerkawinan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Belum Kawin">Belum Kawin</option>
              <option value="Kawin">Kawin</option>
              <option value="Cerai Hidup">Cerai Hidup</option>
              <option value="Cerai Mati">Cerai Mati</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pekerjaan"
              className="block text-sm font-medium text-gray-700"
            >
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kewarganegaraan"
              className="block text-sm font-medium text-gray-700"
            >
              Kewarganegaraan
            </label>
            <select
              id="kewarganegaraan"
              name="kewarganegaraan"
              value={formData.kewarganegaraan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="WNI">WNI</option>
              <option value="WNA">WNA</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalKematian"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Kematian
            </label>
            <input
              type="date"
              id="tanggalKematian"
              name="tanggalKematian"
              value={formData.tanggalKematian}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jamKematian"
              className="block text-sm font-medium text-gray-700"
            >
              Jam Kematian
            </label>
            <input
              type="time"
              id="jamKematian"
              name="jamKematian"
              value={formData.jamKematian}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="penyebabKematian"
              className="block text-sm font-medium text-gray-700"
            >
              Penyebab Kematian
            </label>
            <input
              type="text"
              id="penyebabKematian"
              name="penyebabKematian"
              value={formData.penyebabKematian}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-2">
            <PDFDownloadLink
              document={<PDFDocument data={formData} />}
              fileName="surat_keterangan_kematian.pdf"
              className=" w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </PDFDownloadLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuratKeteranganKematian;
