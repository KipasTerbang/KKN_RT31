import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../docs/docsSuratPernyataanJaminanTempatTinggal";

const SuratPernyataanJaminanTempatTinggal = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return `${today.toLocaleDateString("id-ID", {
      day: "numeric",
    })} ${today.toLocaleDateString("id-ID", {
      month: "long",
    })}, ${today.getFullYear()}`;
  };

  const [formData, setFormData] = useState({
    namaPenjamin: "",
    nomorKartuKeluarga: "",
    nomorIndukKependudukan: "",
    namaJalanPenjamin: "",
    kelurahanPenjamin: "",
    kecamatanPenjamin: "",
    noHP: "",
    namaTerjamin: "",
    tempatLahirTerjamin: "",
    tanggalLahirTerjamin: "",
    namaAsalJalanTerjamin: "",
    kelurahanAsalTerjamin: "",
    kecamatanAsalTerjamin: "",
    kotaAsalTerjamin: "",
    namaJalanSekarangTerjamin: "",
    kelurahanSekarangTerjamin: "",
    kecamatanSekarangTerjamin: "",
    jumlahPengikutTerjamin: "",
    statusPerkawinanTerjamin: "Belum Kawin",
    tanggalMenempatiTempatTinggal: "",
    statusHubunganPenjaminDenganTerjamin: "",
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
        Surat Pernyataan Jaminan Tempat Tinggal
      </p>
      <div className="flex justify-center bg-white lg:w-1/2 md:w-2/3 sm:w-3/4 h-auto mx-auto rounded-md shadow-below-right md:shadow-below-right">
        <form className="w-full px-10 py-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="namaPenjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Lengkap Penjamin
            </label>
            <input
              type="text"
              id="namaPenjamin"
              name="namaPenjamin"
              value={formData.namaPenjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nomorKartuKeluarga"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Kartu Keluarga Penjamin
            </label>
            <input
              type="text"
              id="nomorKartuKeluarga"
              name="nomorKartuKeluarga"
              value={formData.nomorKartuKeluarga}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nomorIndukKependudukan"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Induk Kependudukan Penjamin
            </label>
            <input
              type="text"
              id="nomorIndukKependudukan"
              name="nomorIndukKependudukan"
              value={formData.nomorIndukKependudukan}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatLengkap"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Lengkap Penjamin
            </label>
            <input
              type="text"
              id="namaJalanPenjamin"
              name="namaJalanPenjamin"
              value={formData.namaJalanPenjamin}
              onChange={handleChange}
              placeholder="Jalan"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full mb-1"
            />
            <input
              type="text"
              id="kelurahanPenjamin"
              name="kelurahanPenjamin"
              value={formData.kelurahanPenjamin}
              onChange={handleChange}
              placeholder="Kelurahan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kecamatanPenjamin"
              name="kecamatanPenjamin"
              value={formData.kecamatanPenjamin}
              onChange={handleChange}
              placeholder="Kecamatan"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="noHP"
              className="block text-sm font-medium text-gray-700"
            >
              Nomer Telepon Penjamin
            </label>
            <input
              type="text"
              id="noHP"
              name="noHP"
              value={formData.noHP}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Lengkap Terjamin
            </label>
            <input
              type="text"
              id="namaTerjamin"
              name="namaTerjamin"
              value={formData.namaTerjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalLahirTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir Terjamin
            </label>
            <input
              type="date"
              id="tanggalLahirTerjamin"
              name="tanggalLahirTerjamin"
              value={formData.tanggalLahirTerjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tempatLahirTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir Terjamin
            </label>
            <input
              type="text"
              id="tempatLahirTerjamin"
              name="tempatLahirTerjamin"
              value={formData.tempatLahirTerjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="statusPerkawinanTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Status Perkawinan Terjamin
            </label>
            <select
              id="statusPerkawinanTerjamin"
              name="statusPerkawinanTerjamin"
              value={formData.statusPerkawinanTerjamin}
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
              htmlFor="alamatLengkap"
              className="block text-sm font-medium text-gray-700"
            >
              Asal Daerah Terjamin
            </label>
            <input
              type="text"
              id="namaAsalJalanTerjamin"
              name="namaAsalJalanTerjamin"
              value={formData.namaAsalJalanTerjamin}
              onChange={handleChange}
              placeholder="Jalan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kelurahanAsalTerjamin"
              name="kelurahanAsalTerjamin"
              value={formData.kelurahanAsalTerjamin}
              onChange={handleChange}
              placeholder="Kelurahan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kecamatanAsalTerjamin"
              name="kecamatanAsalTerjamin"
              value={formData.kecamatanAsalTerjamin}
              onChange={handleChange}
              placeholder="Kecamatan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kotaAsalTerjamin"
              name="kotaAsalTerjamin"
              value={formData.kotaAsalTerjamin}
              onChange={handleChange}
              placeholder="Kota/Kabupaten"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jumlahPengikutTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Pengikut Terjamin
            </label>
            <input
              type="text"
              id="jumlahPengikutTerjamin"
              name="jumlahPengikutTerjamin"
              value={formData.jumlahPengikutTerjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamatLengkap"
              className="block text-sm font-medium text-gray-700"
            >
              Asal Daerah Terjamin
            </label>
            <input
              type="text"
              id="namaJalanSekarangTerjamin"
              name="namaJalanSekarangTerjamin"
              value={formData.namaJalanSekarangTerjamin}
              onChange={handleChange}
              placeholder="Jalan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kelurahanSekarangTerjamin"
              name="kelurahanSekarangTerjamin"
              value={formData.kelurahanSekarangTerjamin}
              onChange={handleChange}
              placeholder="Kelurahan"
              className="mt-1 mb-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              id="kecamatanSekarangTerjamin"
              name="kecamatanSekarangTerjamin"
              value={formData.kecamatanSekarangTerjamin}
              onChange={handleChange}
              placeholder="Kecamatan"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalMenempatiTempatTinggal"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Menempati Tempat Tinggal
            </label>
            <input
              type="date"
              id="tanggalMenempatiTempatTinggal"
              name="tanggalMenempatiTempatTinggal"
              value={formData.tanggalMenempatiTempatTinggal}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="statusHubunganPenjaminDenganTerjamin"
              className="block text-sm font-medium text-gray-700"
            >
              Status Hubungan Penjamin dengan Terjamin
            </label>
            <textarea
              id="statusHubunganPenjaminDenganTerjamin"
              name="statusHubunganPenjaminDenganTerjamin"
              value={formData.statusHubunganPenjaminDenganTerjamin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows={4}
            />
          </div>
          <div className="mb-2">
            <PDFDownloadLink
              document={<PDFDocument data={formData} />}
              fileName="surat_pernyataan_jaminan_tempat_tinggal.pdf"
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

export default SuratPernyataanJaminanTempatTinggal;
