import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const FAQS = () => {
  return (
    <View style={styles.container}>
      {/* Left icons */}
      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="home" size={24} color="#444" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="heart" size={24} color="#444" />
      </TouchableOpacity>

      {/* Center circular icon */}
      <View style={styles.centerButton}>
        <TouchableOpacity style={styles.centerIcon}>
          <MaterialIcons name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Right icons */}
      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="bell" size={24} color="#444" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="user" size={24} color="#444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom:10,
    left: 10,
    position: 'absolute',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 70,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  icon: {
    padding: 10,
  },
  centerButton: {
    position: "absolute",
    top: -30, // Push the button upwards
    alignSelf: "center",
  },
  centerIcon: {
    backgroundColor: "#0096FF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default FAQS