import { useAuth } from "@/context/AuthContext"; // Používame náš nový Hook
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { LogBox } from "react-native";

//how to prevent warnings 
LogBox.ignoreAllLogs(true);

//perfect layout for auth, lebo domovská stránka čiže MyMomentsApp je cesta je app/(protected)/(tabs) a zároveň nemože byť v rootlayout lebo potrebujeme nejakú obrazovku pred tým
//lebo služi ako gate pre ostatné skryté obrazovky
//bude teda volaný pred ostanými obrazovkami

const isLogin = false;
//but we to be able to read and edit this value from both layout file as well as from login screen –> state managment (createContext from RN)


export default function ProtectedLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <StatusBar style="auto" />  
      <Stack>
        <Stack.Screen 
            name="(tabs)" 
            options ={{ 
              headerShown: false,
              //headerLeft: () => <></> ///šípka vľavo/späť prázdna, z indexu sa nedá vraciať je to homescreen
            }} 
          />
      </Stack>
    </>
  );
}
