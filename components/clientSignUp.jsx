import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ClientSignUp = () => {
  const [form, setForm] = useState({
    password: "",
    password1: "",
    firstName: "",
    middleInitial: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    serviceProvider: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Toggle function for showing/hiding password
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Check if passwords match
  const passwordsMatch = form.password === form.password1;

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>SUBSCRIBER</Text>
        <View style={styles.hr} />

        <View style={styles.inputGroup} className="mt-5">
          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="Your name"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            value={form.firstName}
            onChangeText={(text) => setForm({ ...form, firstName: text })}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroupHalf}>
            <Text style={styles.label}>MI</Text>
            <TextInput
              className="mr-2"
              placeholder="Middle Initial"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              value={form.middleInitial}
              onChangeText={(text) => setForm({ ...form, middleInitial: text })}
            />
          </View>

          <View style={styles.inputGroupHalf}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              value={form.lastName}
              onChangeText={(text) => setForm({ ...form, lastName: text })}
            />
          </View>
        </View>

        <View style={styles.inputGroup} className="mt-5">
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            value={form.firstName}
            onChangeText={(text) => setForm({ ...form, firstName: text })}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            placeholder="Contact Number"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            keyboardType="phone-pad"
            value={form.contactNumber}
            onChangeText={(text) => setForm({ ...form, contactNumber: text })}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Your address"
            placeholderTextColor="#B0B0B0"
            style={[styles.input, styles.textarea]}
            multiline
            value={form.address}
            onChangeText={(text) => setForm({ ...form, address: text })}
          />
        </View>

        <View style={styles.row} className="mb-5">
          <View style={styles.inputGroupHalf}>
            <Text style={styles.label}>ZIP</Text>
            <TextInput
              placeholder="Your ZIP code"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              keyboardType="numeric"
              value={form.zip}
              onChangeText={(text) => setForm({ ...form, zip: text })}
            />
          </View>
        </View>

        {/* Password Field */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#aaa"
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
        </View>

        {/* confirm Password Field */}
        <TextInput
          className="mt-5"
          secureTextEntry={!showPassword}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          value={form.password1}
          onChangeText={(text) => setForm({ ...form, password1: text })}
        />

        <View style={styles.passwordContainer} className="mt-2">
          <MaterialCommunityIcons
            name={showPassword ? "monitor-eye" : "monitor"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
            className="mr-2"
          />
          <Text className="text-white font-psemibold"> Show/Hide Password</Text>
        </View>

        {/* Warning Message if Passwords Don't Match */}
        {!passwordsMatch &&
          form.password1.length > 0 &&
          form.password.length > 0 && (
            <Text style={styles.warningText}>Passwords do not match</Text>
          )}

        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1F2937",
    borderRadius: 8,
    margin: 5,
  },

  warningText: {
    color: "red",
    marginLeft: 90,
  },

  header: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputGroupHalf: {
    flex: 1,
    marginRight: 0,
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#374151",
    color: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  textarea: {
    minHeight: 60,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    backgroundColor: "#374151",
    color: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
  },
  submitContainer: {
    alignItems: "center",
    marginTop: 16,
    justifyContent: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  hr: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
  },
});

export default ClientSignUp;
