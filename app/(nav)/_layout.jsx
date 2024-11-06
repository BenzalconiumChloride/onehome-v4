// app/_layout.jsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabsLayout from "../(tabs)/_layout"; // Import the tabs layout
import FAQ from "./faqs"; // Import the new pages
import About from "./aboutUs";
import Contact from "./contactUs";

const Drawer = createDrawerNavigator();

const NavLayout = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { width: 250 },
        }}
      >
        {/* Drawer item that contains the Tabs navigator */}
        <Drawer.Screen
          name="Tabs"
          component={TabsLayout}
          options={{ title: "Home" }}
        />
        {/* Additional pages in the drawer */}
        <Drawer.Screen name="FAQ" component={FAQ} options={{ title: "FAQ" }} />
        <Drawer.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Contact" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavLayout;
