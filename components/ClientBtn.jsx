import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; // Import router directly

const ClientBtn = ({title, handlePress, isLoading}) => {


  return (
    <TouchableOpacity
      style={[styles.button, isLoading ? { opacity: 0.5 } : {}]}
      disabled={isLoading}
      onPress={handlePress}
    >
      <LinearGradient
        colors={["#022c5c", "#044475"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    marginBottom: 5,
  },
  gradient: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    // Shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
};

export default ClientBtn;
