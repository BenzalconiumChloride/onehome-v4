import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { LayoutAnimation } from 'react-native';
import { icons, images } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  LayoutAnimation.configureNext({
    duration: 1000, //1sec
    create:{
      type: 'linear',
      property: 'opacity',
    },
    update:{
      type: 'linear',
      property: 'opacity',
    },
  });

  return (
    <View style={[styles.tabContainer, focused && styles.focusedTab]}>
      {focused && (
        <>
          <View style={styles.rightHighlight} />
          <View style={styles.leftHighlight} />
        </>
      )}
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={[styles.icon, focused && styles.focusedIcon]}
      />
      <Text style={[styles.label, focused && styles.focusedLabel, { color }]}>
        {name}
      </Text> 
    </View>
  );
};

const TabsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#545454',
            tabBarInactiveTintColor: '#bdbdbd',
            tabBarStyle: {
              backgroundColor: 'linear-gradient(90deg, rgba(2,44,122,1) 0%, rgba(48,48,228,1) 100%)',
              borderTopWidth: 2,
              height: 60,
            },
          }}
        >
          <Tabs.Screen 
            name="home" 
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
              ),
            }}
          />
          <Tabs.Screen 
            name="history" 
            options={{
              title: 'History',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.history} color={color} name="History" focused={focused} />
              ),
            }}
          />
          <Tabs.Screen 
            name="services" 
            options={{
              title: 'Services',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.mainLogo} color={color} name="Services" focused={focused} />
              ),
            }}
          />
          <Tabs.Screen 
            name="updates" 
            options={{
              title: 'Updates',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.notif} color={color} name="Updates" focused={focused} />
              ),
            }}
          />
          <Tabs.Screen 
            name="profile" 
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
              ),
            }}
          />
        </Tabs>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 2,
    width: 65,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  focusedTab: {
    backgroundColor: '#e8e8e8',
    fontWeight: '600',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    shadowColor: '#001',
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 15 },
    shadowOpacity: 5,
    transition: 'all 0.8s ease-in-out',
  },
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    tintColor: '#9c9898', // Dark color for focused icon
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 12,
  },
  focusedLabel: {
    fontWeight: '600',
    color: '#545454',
    marginBottom: 10,
  },
  rightHighlight: {
    backgroundColor: '',
    width: 20,
    height: 22, 
    position: 'absolute',
    left: -18,
    bottom: 2,
    borderTopRightRadius: 50,
    shadowColor: '#e8e8',
    shadowOffset: { width: 5, height: -5 },
    shadowRadius: 0,
    shadowOpacity: 4,
  },
  leftHighlight: {
    backgroundColor: '',
    width: 20,
    height: 22, 
    position: 'absolute',
    right: -19,
    top: 1,
    borderTopLeftRadius: 50,
    shadowColor: '#e8e8',
    shadowOffset: { width: -7, height: -6 },
    shadowRadius: 2.5,
    shadowOpacity: 5,
  },
});

export default TabsLayout;
