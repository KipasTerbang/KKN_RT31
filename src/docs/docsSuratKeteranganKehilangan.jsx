import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import headerImageSrc from "../docs/Header.png";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "column",
    border: 1,
    borderColor: "#000",
    borderRadius: 4,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    flex: 1,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
  },
  tableHeader: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  page: {
    flexDirection: "column",
    padding: 25,
    fontFamily: "Times-Roman",
    marginLeft: 5,
  },
  section: {
    margin: 25,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column1: {
    width: "35%",
  },
  column2: {
    width: "65%",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
    fontFamily: "Times-Bold",
  },
  stitle: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "justify",
  },
  contentNumber: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 30,
  },
  contentNumber2: {
    fontSize: 12,
    marginBottom: 15,
  },
  contentNumbers: {
    fontSize: 12,
    marginBottom: 5,
  },
  contentNumberDesc: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 6,
  },
  footer: {
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerImage: {
    width: 500,
    height: 100,
  },
});

const formatTanggal = (tanggal) => {
  const [tahun, bulan, hari] = tanggal.split("-");
  const namaBulan = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      month: "long",
    }
  );
  return `${parseInt(hari, 10)} ${namaBulan} ${tahun}`;
};

const formatTanggalKehilangan = (tanggal) => {
  const [tahun, bulan, hari] = tanggal.split("-");
  const namaBulan = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      month: "long",
    }
  );
  const namaHari = new Date(`${tahun}-${bulan}-${hari}`).toLocaleDateString(
    "id-ID",
    {
      weekday: "long",
    }
  );
  return `${namaHari}, tanggal ${parseInt(hari, 10)} ${namaBulan} ${tahun}`;
};

const docsSuratKeteranganTidakMampu = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT KETERANGAN KEHILANGAN</Text>
        <Text style={styles.stitle}>
          Nomor: ....................................................
        </Text>
        <Text style={styles.content}>
          Yang bertanda tangan di bawah ini menerangkan bahwa pada hari ini{" "}
          {formatTanggalKehilangan(data.currentDate)} telah datang ke Rukun
          Tetangga 31 Kelurahan Karang Joang yang mengaku bernama :
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama</Text>
            <Text style={styles.contentNumber}>Tempat/Tanggal Lahir</Text>
            <Text style={styles.contentNumber}>Agama</Text>
            <Text style={styles.contentNumber}>Jenis Kelamin</Text>
            <Text style={styles.contentNumber}>Pekerjaan</Text>
            <Text style={styles.contentNumber}>Alamat </Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.nama}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahir}, {formatTanggal(data.tanggalLahir)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.agama}</Text>
            <Text style={styles.contentNumber2}>: {data.jenisKelamin}</Text>
            <Text style={styles.contentNumber2}>: {data.pekerjaan}</Text>
            <Text style={styles.contentNumber2}>: {data.alamat}</Text>
          </View>
        </View>
        <Text></Text>
        <Text style={styles.content}>
          Saudara yang bersangkutan melaporkan bahwa telah kehilangan
          surat-surat penting/barang berharga berupa : {data.keterangan}{" "}
          Diperkirakan hilang pada hari{" "}
          {formatTanggalKehilangan(data.tanggalKehilangan)} Setelah dilakukan
          pencarian dan sampai pada saat ini belum ditemukan.
        </Text>
        <Text style={styles.content}>
          Demikianlah surat keterangan kehilangan ini dibuat dengan
          sebenar-benarnya agar dapat digunakan sebaik mungkin.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: "right",
          marginBottom: 15,
          marginRight: 120,
        }}
      >
        Balikpapan, {formatTanggal(data.currentDate)}
      </Text>
      <View style={styles.footer}>
        <View style={styles.column1}>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 30,
              marginBottom: 70,
              fontFamily: "Times-Roman",
            }}
          >
            Pelapor
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginLeft: 30,
              fontFamily: "Times-Roman",
            }}
          >
            {data.nama}
          </Text>
        </View>
        <View style={styles.column2}>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              marginBottom: 10,
              fontFamily: "Times-Bold",
            }}
          >
            Ketua RT 031,
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              marginBottom: 60,
              fontFamily: "Times-Bold",
            }}
          >
            Kelurahan Karang Joang
          </Text>
          <Text></Text>
          <Text
            style={{
              textAlign: "center",
              marginRight: 0,
              fontFamily: "Times-Bold",
            }}
          >
            Shokim Fedrus Ariadi
          </Text>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableCellHeader}>
            <Text style={styles.tableHeader}>No</Text>
          </View>
          <View style={styles.tableCellHeader}>
            <Text style={styles.tableHeader}>Nama</Text>
          </View>
          <View style={styles.tableCellHeader}>
            <Text style={styles.tableHeader}>Tanda Tangan</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default docsSuratKeteranganTidakMampu;
