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
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column1: {
    width: "35%",
  },
  column2: {
    width: "65%",
  },
  column1s: {
    width: "25%",
  },
  column2s: {
    width: "85%",
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
  content1: {
    fontSize: 12,
    textAlign: "justify",
  },
  contents: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: "justify",
  },
  contentNumber: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 30,
  },
  contentNumber1: {
    fontSize: 12,
  },
  contentNumber2: {
    fontSize: 12,
    marginBottom: 15,
  },
  contentNumbers: {
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 90,
  },
  footer: {
    fontSize: 12,
    marginRight: 30,
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

const docsSuratPengantar = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT PENGANTAR</Text>
        <Text
          style={{
            textAlign: "right",
            marginBottom: 10,
            fontSize: 12,
            fontFamily: "Times-Roman",
          }}
        >
          Balikpapan, {data.currentDate}
        </Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View>
            <Text style={styles.contentNumber1}>Nomor</Text>
            <Text style={styles.contentNumber1}>Lampiran</Text>
            <Text style={styles.contentNumber1}>perihal</Text>
          </View>
          <View style={styles.column2s}>
            <Text style={styles.contentNumber1}>: </Text>
            <Text style={styles.contentNumber1}>: </Text>
            <Text style={styles.contentNumber1}>: Surat Pengantar</Text>
          </View>
        </View>
        <Text style={styles.content1}>Kepada Yth.</Text>
        <Text style={styles.content1}>Bapak Lurah Karang Joang</Text>
        <Text style={styles.content1}>Di-</Text>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 10,
            textAlign: "justify",
            marginLeft: 30,
          }}
        >
          Tempat
        </Text>
        <Text style={styles.content}>
          Bersama ini kami hadapkan seorang warga RT.031, yang tersebut di bawah
          ini :
        </Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>1. Nama</Text>
            <Text style={styles.contentNumber}>2. Jenis Kelamin</Text>
            <Text style={styles.contentNumber}>3. Tempat/Tgl. Lahir</Text>
            <Text style={styles.contentNumber}>4. Status Perkawinan</Text>
            <Text style={styles.contentNumber}>5. Golongan Darah</Text>
            <Text style={styles.contentNumber}>6. Kewarganegaraan</Text>
            <Text style={styles.contentNumber}>7. Pekerjaan</Text>
            <Text style={styles.contentNumber}>8. Agama</Text>
            <Text style={styles.contentNumber}>9. Alamat</Text>
            <Text style={styles.contentNumber}>10. No.KTP/KK</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.nama}</Text>
            <Text style={styles.contentNumber2}>: {data.jenisKelamin}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahir}, {formatTanggal(data.tanggalLahir)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.statusPerkawinan}</Text>
            <Text style={styles.contentNumber2}>: {data.golonganDarah}</Text>
            <Text style={styles.contentNumber2}>: {data.kewarganegaraan}</Text>
            <Text style={styles.contentNumber2}>: {data.pekerjaan}</Text>
            <Text style={styles.contentNumber2}>: {data.agama}</Text>
            <Text style={styles.contentNumber2}>: {data.alamat}</Text>
            <Text style={styles.contentNumber2}>: {data.nik}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          Bermaksud untuk mengurus :{" "}
          {data.bermaksud === "yang lainnya" ? data.lainnya : data.bermaksud}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text></Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 35,
            marginBottom: 10,
            fontFamily: "Times-Bold",
          }}
        >
          Ketua RT 031,
        </Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 10,
            marginBottom: 60,
            fontFamily: "Times-Bold",
          }}
        >
          Kelurahan Karang Joang
        </Text>
        <Text></Text>
        <Text
          style={{
            textAlign: "right",
            marginRight: 18,
            fontFamily: "Times-Bold",
          }}
        >
          Shokim Fedrus Ariadi
        </Text>
      </View>
    </Page>
  </Document>
);

export default docsSuratPengantar;
