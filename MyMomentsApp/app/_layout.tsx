import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { AuthProvider } from "@/utils/authContext";

//how to prevent warnings 
LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <AuthProvider>
      <>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
          <Stack.Screen
            name="+not-found"
            options={{
              animation: "none"
            }}
          />
        </Stack>
      </>
    </AuthProvider>
  );
}


//we wrapped all rootlayout into AuthProvider function from /utils/authContext.tsx