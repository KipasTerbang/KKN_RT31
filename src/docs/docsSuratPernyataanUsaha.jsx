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
    width: 200,
    marginLeft: 25,
  },
  tableContainers: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    width: 200,
    marginLeft: 25,
    height: 30,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    width: 30,
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 3,
    paddingTop: 3,
  },
  tableCellHeadern: {
    width: 85,
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    paddingTop: 3,
  },
  tableCellHeaders: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    paddingTop: 3,
    width: 85,
  },
  tableCell: {
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,
    paddingTop: 8,
    width: 30,
  },
  tableCell2: {
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 17,
    width: 85,
  },
  tableCell3: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    paddingTop: 3,
    width: 85,
  },
  tableHeader: {
    fontSize: 10,
    fontFamily: "Times-Roman",
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
    marginBottom: 2,
    marginTop: 20,
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  column1: {
    width: "16%",
  },
  column2: {
    width: "84%",
  },
  column1s: {
    width: "10%",
  },
  column2s: {
    width: "95%",
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
    marginBottom: 2,
    textAlign: "justify",
  },
  contentNumber: {
    fontSize: 12,
    marginBottom: 3,
  },
  contentNumber2: {
    fontSize: 12,
    marginBottom: 3,
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

const docsSuratPernyataanUsaha = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT PERNYATAAN</Text>
        <Text style={styles.content}>
          Saya yang bertanda tangan di bawah ini :{" "}
        </Text>
        <Text style={styles.content}>Nama : {data.nama}</Text>
        <Text style={styles.content}>Jenis Kelamin : {data.jenisKelamin}</Text>
        <Text style={styles.content}>
          Tempat/Tgl.Lahir : {data.tempatLahir},{" "}
          {formatTanggal(data.tanggalLahir)}
        </Text>
        <Text style={styles.content}>
          Kewarganegaraan : {data.kewarganegaraan}
        </Text>
        <Text style={styles.content}>Pekerjaan : {data.pekerjaan}</Text>
        <Text style={styles.content}>Agama : {data.agama}</Text>
        <Text style={styles.content}>Nomor KTP : {data.nomorKTP}</Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1s}>
            <Text style={styles.contentNumber}>Alamat : </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
          </View>
          <View style={styles.column2s}>
            <Text style={styles.contentNumber2}>Jalan {data.jalan}</Text>
            <Text style={styles.contentNumber2}>
              Kelurahan {data.kelurahan}
            </Text>
            <Text style={styles.contentNumber2}>
              Kecamatan {data.kecamatan}
            </Text>
            <Text style={styles.contentNumber2}>Kab/kota {data.kabKota}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          Menyatakan dengan sebenar-benarnya bahwa saya memiliki usaha
          sebagaimana tersebut dibawah ini :{" "}
        </Text>
        <Text style={styles.content}>Nama Usaha : </Text>
        <Text style={styles.content}>Jenis Usaha : </Text>
        <Text style={styles.content}>Akte Pendirian Usaha : </Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Alamat Usaha : </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
            <Text style={styles.contentNumber}> </Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>Jalan {data.jalanUsaha}</Text>
            <Text style={styles.contentNumber2}>
              Kelurahan {data.kelurahanUsaha}
            </Text>
            <Text style={styles.contentNumber2}>
              Kecamatan {data.kecamatanUsaha}
            </Text>
            <Text style={styles.contentNumber2}>
              Kab/kota {data.kabKotaUsaha}
            </Text>
          </View>
        </View>
        <Text style={styles.content}>
          Demikian surat pernyataan ini saya buat apabila dikemudian hari
          ternyata pernyataan saya ini tidak benar, maka saya bersedia dituntut
          sesuai dengan hukum yang berlaku.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: "right",
          marginRight: 40,
        }}
      >
        Balikpapan, {data.currentDate}
      </Text>
      <View style={styles.sectionNumber}>
        <View style={styles.column1}>
          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              marginLeft: 25,
            }}
          >
            Saksi-saksi
          </Text>
        </View>
        <View style={styles.column2}>
          <Text
            style={{
              fontSize: 12,
              textAlign: "right",
              marginRight: 40,
              fontFamily: "Times-Roman",
              marginTop: 5,
            }}
          >
            Yang membuat pernyataan,
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ width: "50%" }}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <View style={styles.tableCellHeader}>
                <Text style={styles.tableHeader}>No</Text>
              </View>
              <View style={styles.tableCellHeadern}>
                <Text style={styles.tableHeader}>Nama</Text>
              </View>
              <View style={styles.tableCellHeaders}>
                <Text style={styles.tableHeader}>Tanda Tangan</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableContainers}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeader}>1</Text>
              </View>
              <View style={styles.tableCell2}>
                <Text style={styles.tableHeader}> </Text>
              </View>
              <View style={styles.tableCell3}>
                <Text style={styles.tableHeader}> </Text>
              </View>
            </View>
          </View>
          <View style={styles.tableContainers}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeader}>2</Text>
              </View>
              <View style={styles.tableCell2}>
                <Text style={styles.tableHeader}> </Text>
              </View>
              <View style={styles.tableCell3}>
                <Text style={styles.tableHeader}> </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: "50%", marginTop: 20 }}>
          <Text></Text>
          <View
            style={{
              textAlign: "left",
              border: 1,
              borderStyle: "dashed",
              width: 70,
              fontSize: 10,
              paddingBottom: 5,
              paddingTop: 5,
              marginLeft: 60,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginBottom: 5,
                fontFamily: "Times-Bold",
              }}
            >
              Materai
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Times-Roman",
              }}
            >
              10000
            </Text>
          </View>
          <Text
            style={{
              textAlign: "right",
              marginRight: 40,
              fontFamily: "Times-Bold",
            }}
          >
            {data.nama}
          </Text>
        </View>
      </View>
      <View
        style={{
          fontFamily: "Times-Roman",
          fontSize: 12,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Times-Roman",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          Mengetahui dan Membenarkan :
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Ketua RT.031
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Times-Bold",
            textDecoration: "underline",
          }}
        >
          Shokim Fedrus Ariadi
        </Text>
      </View>
    </Page>
  </Document>
);

export default docsSuratPernyataanUsaha;
