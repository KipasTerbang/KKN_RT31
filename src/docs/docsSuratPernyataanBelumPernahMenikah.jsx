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
    marginBottom: 5,
    marginTop: 20,
  },
  sectionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column1: {
    width: "25%",
  },
  column2: {
    width: "75%",
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

const docsSuratPernyataanBelumPernahMenikah = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerImage} src={headerImageSrc} />
      <View style={styles.section}>
        <Text style={styles.title}>SURAT PERNYATAAN BELUM PERNAH MENIKAH</Text>
        <Text style={styles.content}>Yang bertanda tangan di bawah ini :</Text>
        <Text></Text>
        <View style={styles.sectionNumber}>
          <View style={styles.column1}>
            <Text style={styles.contentNumber}>Nama</Text>
            <Text style={styles.contentNumber}>No KTP</Text>
            <Text style={styles.contentNumber}>Tempat, Tgl Lahir</Text>
            <Text style={styles.contentNumber}>Jenis Kelamin</Text>
            <Text style={styles.contentNumber}>Alamat</Text>
            <Text style={styles.contentNumber}>Pekerjaan </Text>
            <Text style={styles.contentNumber}>Agama </Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.contentNumber2}>: {data.nama}</Text>
            <Text style={styles.contentNumber2}>: {data.nik}</Text>
            <Text style={styles.contentNumber2}>
              : {data.tempatLahir}, {formatTanggal(data.tanggalLahir)}
            </Text>
            <Text style={styles.contentNumber2}>: {data.jenisKelamin}</Text>
            <Text style={styles.contentNumber2}>: {data.alamat}</Text>
            <Text style={styles.contentNumber2}>: {data.pekerjaan}</Text>
            <Text style={styles.contentNumber2}>: {data.agama}</Text>
          </View>
        </View>
        <Text style={styles.content}>
          {"                  "}
          Dengan ini menyatakan dengan sebenar benarnya dan sanggup diangkat
          sumpah sesuai dengan agama yang saya anut, bahwa saya belum pernah
          menikah.
        </Text>
        <Text style={styles.content}>
          {"               "}
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
            textDecoration: "underline",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          Mengetahui
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

export default docsSuratPernyataanBelumPernahMenikah;
