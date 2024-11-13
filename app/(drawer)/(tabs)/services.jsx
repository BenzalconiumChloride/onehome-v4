import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";

const Checkbox = () => {
  // State initialization to handle checkbox checked state
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Switch to toggle checkbox state */}
        <Switch
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => setIsChecked(!isChecked)}
        />

        {/* Button that changes depending on isChecked */}
        <TouchableOpacity style={styles.buttonMenu}>
          <Text style={styles.buttonText}>
            {isChecked ? "-" : "+"} {/* Change icon based on isChecked */}
          </Text>
        </TouchableOpacity>

        {/* Only show options A, B, C if isChecked is true */}
        {isChecked && (
          <>
            <TouchableOpacity style={[styles.option, styles.optionA]}>
              <Text style={styles.optionText}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.optionB]}>
              <Text style={styles.optionText}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.optionC]}>
              <Text style={styles.optionText}>C</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 60,
    height: 60,
    opacity: 0,
    position: "absolute",
    zIndex: 10,
  },
  buttonMenu: {
    backgroundColor: "#ffdd00",
    borderColor: "#1e1e1e",
    borderWidth: 2,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    boxShadow: "0px 3px 10px rgba(16, 16, 16, 0.5)",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1e1e1e",
  },
  option: {
    backgroundColor: "#1e1e1e",
    borderColor: "#ffdd00",
    borderWidth: 2,
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: -1,
    boxShadow: "3px 3px 10px rgba(16, 16, 16, 0.5)",
  },
  optionText: {
    color: "#ffdd00",
    fontWeight: "700",
  },
  optionA: {
    transform: [{ translateY: -90 }],
    transitionDelay: 100,
  },
  optionB: {
    transform: [{ translateY: -65 }, { translateX: 65 }],
    transitionDelay: 200,
  },
  optionC: {
    transform: [{ translateX: 90 }],
    transitionDelay: 300,
  },
});

export default Checkbox;
