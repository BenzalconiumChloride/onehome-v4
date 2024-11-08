import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRCodeGenerator = ({ data }) => {
  return (
    <View style={styles.container}>
      <QRCode
        value={data} // The data to encode in the QR code
        size={100} // Adjust size as needed
        color="black" // Foreground color
        backgroundColor="white" // Background color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default QRCodeGenerator;
