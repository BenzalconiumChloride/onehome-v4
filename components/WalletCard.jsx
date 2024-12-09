// WalletCard.jsx

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { BarCodeScanner } from "expo-barcode-scanner";
import { icons } from "../constants";

const WalletCard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [isQRReaderOpen, setIsQRReaderOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  // Request camera permission
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    requestPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setIsQRReaderOpen(false); // Close the QR reader after scanning
    console.log("Scanned data:", data); // Handle the scanned data as needed
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.cardContainer}>
        <Svg style={styles.card} width="100%" height="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#022C5C" stopOpacity="1" />
              <Stop offset="1" stopColor="#0B5C9A" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="10" // Rounded corners
            fill="url(#grad)"
          />
        </Svg>

        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Image source={icons.mainLogo} style={styles.iconLogo} />
            <View style={styles.textContainer}>
              <Text style={styles.cardText}>My Wallet</Text>
              <Text style={styles.cardBalance}>
                {showBalance ? "₱30,000" : "₱••••••"}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setShowBalance(!showBalance)}
              style={styles.eyeIcon}
            >
              <Image
                source={showBalance ? icons.eye : icons.eyeHide}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.cardAccount}>
            Account # {"\n"}
            <Text style={styles.accountNumber}>1 2 3 4 5 6 7 8 9</Text>
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Cash In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.qrContainer}
              onPress={() => setIsQRReaderOpen(true)}
            >
              <Image source={icons.scan} style={styles.icon} />
              <Text style={styles.qrText}>Scan to Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal for QR Reader */}
      <Modal
        visible={isQRReaderOpen}
        animationType="slide"
        onRequestClose={() => setIsQRReaderOpen(false)}
      >
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={isQRReaderOpen ? handleBarCodeScanned : undefined}
            style={StyleSheet.absoluteFillObject}
          />
          <Button
            title="Close QR Reader"
            onPress={() => setIsQRReaderOpen(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  cardContainer: {
    width: 300,
    borderRadius: 15,
    overflow: "hidden",
    marginLeft: 30,
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardContent: {
    padding: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLogo: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
  },
  cardBalance: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  eyeIcon: {
    marginLeft: "auto",
  },
  cardAccount: {
    color: "#ffffff90",
    fontSize: 14,
    marginTop: 10,
  },
  accountNumber: {
    fontSize: 22,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cardButton: {
    backgroundColor: "#d3dce3",
    borderRadius: 10,
    width: 95,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  cardButtonText: {
    color: "#022C5C",
    fontSize: 14,
  },
  qrContainer: {
    alignItems: "center",
  },
  qrText: {
    fontSize: 10,
    color: "#d3dce3",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default WalletCard;
