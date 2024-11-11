import React, { useState } from "react";
import { TouchableOpacity, Platform, View, Text, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { icons } from "../constants"; // Adjust the import if needed

WebBrowser.maybeCompleteAuthSession();

// Replace with your own Google OAuth client ID
const CLIENT_ID =
  "910168154127-rkpvh0uqr70fuga056mtltjr196h9hhf.apps.googleusercontent.com";

export default function GoogleSignIn() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: AuthSession.makeRedirectUri({
        scheme: Platform.select({ web: undefined, default: "onehome:" }),
      }),
      scopes: ["profile", "email"],
    },
    { authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth" }
  );

  // Handle authentication response
  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      fetchUserInfo(access_token);
    }
  }, [response]);

  // Fetch user information from Google API
  async function fetchUserInfo(token) {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = await response.json();
    setUserInfo(user);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {userInfo ? (
        <Text>Welcome, {userInfo.name}</Text>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#4285F4",
            borderRadius: 10,
            width: 175,
          }}
          disabled={!request}
          onPress={() => promptAsync()}
        >
          <Image
            source={icons.google}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: "white" }}>Sign in with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
