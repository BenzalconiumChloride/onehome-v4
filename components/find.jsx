import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import { icons } from "../constants"; // Adjust the path based on your project structure

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Need to fix?"
        placeholderTextColor="#8e8e8f"
        style={styles.searchInput}
        
      />
      <Image source={icons.search} style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    margin: 20,
    width: 290,
    alignSelf: 'center'
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#8e8e8f", // Adjust color to match the image if needed
  },
});

export default SearchBar;
