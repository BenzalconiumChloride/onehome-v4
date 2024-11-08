import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { images, icons } from '../../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import QRCodeGenerator from '../../../components/QRCodeGenerator'

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar barStyle="dark-content" />

        <Image
          className="mt-14 mb-5 self-center"
          source={images.silverlogoh}
          style={{ width: 200, height: 50 }}
        />

        <View className="w-full">
          <LinearGradient
            colors={["#022c5c", "#08528c"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1, paddingVertical: 20, alignItems: "center" }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              My Profile
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.card}>
          {/* Profile Image and Icon */}
          <View style={styles.imageContainer}>
            <Image
              source={images.profile} // Replace with actual image URL or require() for local images
              style={styles.profileImage}
            />
            <View style={styles.iconContainer}>
              <Image
                source={icons.edit} // Replace with actual icon URL
                style={styles.icon}
              />
            </View>
          </View>

          {/* User Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Alisha Parker</Text>
            <Text style={styles.email}>alishaparker@mail.com</Text>
            <Text style={styles.phone}>+01 234 567 8899</Text>
            <Text style={styles.detail}>Date of registration: 8/8/2024</Text>
            <Text style={styles.detail}>Acct # 123456789</Text>
          </View>
        </View>

        <View style={styles.Tcontainer} className="mt-1">
          <Text style={styles.Ttext}>My Wallet</Text>
          <Text style={styles.Ttext}>₱30,000</Text>
        </View>

        <View className="w-full bg-white mt-1 p-4">
          <Text className="ml-4 mt-4 text-4xl font-bold">Address</Text>
          <Text className="ml-4 mt-4 font-bold text-2xl"> Home </Text>
          <Text className="ml-4"> 121 Park Avenue, King Street, NY 23561 </Text>
          <Text className="ml-4 mt-4 font-bold text-2xl"> Office </Text>
          <Text className="ml-4"> 121 Park Avenue, King Street, NY 23561 </Text>
        </View>

        <View className="w-full bg-white mt-1 justify-center items-center p-1">
          <QRCodeGenerator data="Alisha Parker"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#d5edff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    marginRight: 16,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    padding: 4,
  },
  icon: {
    width: 15,
    height: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    color: "#666",
    marginTop: 4,
  },
  phone: {
    color: "#666",
    marginTop: 2,
  },
  detail: {
    color: "#666",
    marginTop: 2,
  },

  Tcontainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    padding: 12,
    justifyContent: "space-between",
    padding: 16,
  },
  Ttext: {
    fontSize: 24,
  },
});

export default Profile;