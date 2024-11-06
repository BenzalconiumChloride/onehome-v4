import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProvForm from "../../components/ProvForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ProviderSignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
    <StatusBar barStyle="dark-content" />
      <ScrollView >
        <ProvForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderSignUp;
