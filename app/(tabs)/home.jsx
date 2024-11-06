import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { icons, images } from "../../constants";

const Home = () => {
  const [showBalance, setShowBalance] = useState(true); // State to show/hide balance

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar barStyle="dark-content" />

          <View style={{ marginTop: -50, marginBottom: 20 }}>
            <Image
              source={icons.bluelogoh}
              className="w-[200px] h-[200px] mt-0 self-center"
              resizeMode="contain"
            />
          </View>

          {/* Wallet Card with Gradient */}
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
                rx="10" // For rounded corners
                fill="url(#grad)"
              />
            </Svg>

            {/* Content on top of the gradient */}
            <View style={styles.cardContent}>
              <View className="flex-row items-center">
                <Image
                  source={icons.mainLogo}
                  className="w-[50px] h-[50px]"
                  resizeMode="contain"
                />

                <View className="ml-3 flex-col">
                  <Text style={styles.cardText}>My Wallet</Text>

                  {/* Toggle visibility of cardBalance based on showBalance state */}
                  {showBalance ? (
                    <Text style={styles.cardBalance}>₱30,000 </Text>
                  ) : (
                    <Text style={styles.cardBalance}>****</Text>
                  )}
                </View>

                {/* Eye icon to toggle balance visibility */}
                <TouchableOpacity
                  onPress={() => setShowBalance((prev) => !prev)}
                  style={styles.eyeIcon}
                >
                  <Image
                    source={showBalance ? icons.eye : icons.eyeHide} // Assuming you have eye and eyeOff icons
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.cardAccount}>
                Account # {"\n"}
                <Text className="font-bold text-2xl">1 2 3 4 5 6 7 8 9 </Text>
              </Text>

              <View className="flex-row justify-between mt-5">
                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Cash In</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-col items-center">
                  <Image
                    source={icons.scan} // Replace 'someIcon' with the actual icon you want to use
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <Text style={styles.qrText}> Scan to Pay </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>Pay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 29,
    marginTop: -40,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardContent: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    paddingTop: -20,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  cardBalance: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardAccount: {
    color: "#ffffff90",
    fontSize: 14,
    marginTop: 10,
  },
  cardButton: {
    backgroundColor: "#d3dce3",
    borderRadius: 10,
    width: 95,
    height: 35,
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    alignItems: "center",
  },
  cardButtonText: { color: "#022C5C", fontSize: 14 },
  icon: {
    width: 30,
    height: 30,
    color: "#ffff",
    marginTop: 10,
  },
  eyeIcon: {
    marginLeft: "auto",
    padding: 5,
  },
  qrText: {
    fontSize: 10,
    color: "#d3dce3",
  },
});

export default Home;
