import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect, router } from 'expo-router';
import { useRouter } from 'expo-router';
import { icons, images } from '../constants';
import "../global.css";
import ClientBtn from '../components/ClientBtn';
import SerProBtn from '../components/SerProBtn';
import SignInFb from '../components/signInFb';



export default function App() {
    const router = useRouter(); // Use the Expo Router for navigation

    return (
      <SafeAreaView className="bg-primary">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full mt-5 items-center min-h-[85vh] px-4">
            <Image
              source={images.silverlogo}
              className="w-[200px] h-[200px] mb-10 mt-10"
              resizeMode="contain"
            />

            <View className="flex-col items-center justify-center mt-10">
              <ClientBtn
                title="CLIENT"
                handlePress={() => router.push("/client-sign-up")}
                className="mb-15"
              />

              <SerProBtn
                title="SERVICE PROVIDER"
                handlePress={() => router.push("/provider-sign-up")}
                className="mt-15"
              />
            </View>

            <Text
              className="mt-10 font-bold text-lg text-center"
              onPress={() => router.push("/sign-in")} // Navigate to the home screen
              style={{ color: "#0f89e7", marginTop: 10 }}
            >
              Already have an account? {"\n"}
            </Text>

            <View
              style={{
                borderBottomColor: "#fff",
                borderBottomWidth: 1,
                height: 3,
                width: 300,
                marginTop: 10,
                marginBottom: 20,
              }}
            />

            <View className="mb-5">
              <SignInFb />
            </View>
            
            

            <Link href="./(drawer)/(tabs)/home">
              <Text>{"\n"} Testing Home</Text>
            </Link>

            {/* Add two authentication options for sign-up: one for clients and one for service providers */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
