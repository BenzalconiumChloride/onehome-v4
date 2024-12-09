import React, { useState } from "react";
import { StatusBar, View, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../constants";
import WalletCard from "../../../components/WalletCard";
import SearchBar from "../../../components/find";
import QRReader from "../../../components/QRReader";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar barStyle="dark-content" />

          <View style={{ marginTop: -50, marginBottom: -50 }}>
            <Image
              source={icons.bluelogoh}
              style={{ width: 200, height: 200, alignSelf: "center" }}
              resizeMode="contain"
            />
          </View>

          {/* Use WalletCard component */}
          <WalletCard />

          {/* Use SearchBar component */}
          <SearchBar />

          <QRReader />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
