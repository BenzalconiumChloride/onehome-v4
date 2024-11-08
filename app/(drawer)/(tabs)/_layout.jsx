import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { LayoutAnimation } from "react-native";
import { icons } from "../../../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused }) => {
  LayoutAnimation.configureNext({
    duration: 500, // Animation duration
    create: { type: "linear", property: "opacity" },
    update: { type: "linear", property: "opacity" },
  });

  return (
    <View style={[styles.tabContainer, focused && styles.focusedTab]}>
      {focused && <View style={styles.highlightCircle} />}
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          { tintColor: focused ? color : "#fff" }, // White when inactive
          focused && styles.focusedIcon,
        ]}
      />
      <Text style={[styles.label, focused && styles.focusedLabel, { color }]}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: "#000",
              tabBarInactiveTintColor: "#fff",
              tabBarStyle: [
                styles.tabBarStyle,
                { display: isKeyboardVisible ? "none" : "flex" },
              ],
            }}
          >
            <Tabs.Screen
              name="home"
              options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="history"
              options={{
                title: "History",
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.history}
                    color={color}
                    name="History"
                    focused={focused}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="services"
              options={{
                title: "Services",
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.mainLogo}
                    color={color}
                    name="Services"
                    focused={focused}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="updates"
              options={{
                title: "Updates",
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.notif}
                    color={color}
                    name="Updates"
                    focused={focused}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.profile}
                    color={color}
                    name="Profile"
                    focused={focused}
                  />
                ),
              }}
            />
          </Tabs>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    position: "relative",
    paddingVertical: 2,
  },
  focusedTab: {
    position: "absolute",
    top: -20,
    backgroundColor: "#fbf9f9",
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    tintColor: "#022c5c",
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 12,
  },
  focusedLabel: {
    fontWeight: "600",
    color: "#000",
    marginTop: 5,
  },
  tabBarStyle: {
    backgroundColor: "#022c5c",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabsLayout;
