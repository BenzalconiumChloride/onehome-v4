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
import * as Facebook from "expo-auth-session/providers/facebook";

const SignInFb = () => {
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

  // Set up Facebook authentication
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "533858566070964", // Replace with your Facebook App ID
  });

  // Handle the response
  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;

      // You can now use this access_token to fetch user info
      console.log("Facebook Access Token:", access_token);
      // Here you would normally save the token to authenticate the user on your server.
    }
  }, [response]);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const passwordsMatch = form.password === form.password1;

  return (
   
        <View style={styles.submitContainer}>
          <TouchableOpacity
            style={[styles.button, styles.facebookButton]}
            onPress={() => {
              promptAsync();
            }}
          >
            <MaterialCommunityIcons name="facebook" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1F2937",
    borderRadius: 8,
    margin: 5,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "row",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
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

export default SignInFb;
