import { Stack, usePathname} from 'expo-router';
import { StatusBar } from "expo-status-bar";

//obrazovka zobrazuje nazvy obrazoviek v tomto layoute, vypnuté to je v layoute tabs (false pre profile –> ale tento nezobrazoval šípku) 
//no s tymito obrazovkami ktorých názvy sú zobrazované je viditeľná šípka späť
// no v kroku hore nebolo možné zobrazovať názvy jednotlivých obrazoviek

export default function ProfileLayout() {
  const pathname = usePathname();
  console.log(pathname);

  return (
      <>
        <StatusBar style="auto" />  
        <Stack>
            <Stack.Screen 
              name="index" 
              options ={{
                title: "Profile",
                headerShown: true,
                headerTransparent: true,
                headerStyle:{
                  backgroundColor: "transparent",
                },
                //headerShown: false,
                headerLeft: () => <></>, ///šípka vľavo/späť prázdna, z indexu sa nedá vraciať je to homescreen
                //animation: pathname.startsWith("/profile") ? "default" : "none", –> patrí k popToTop v _layoute (tabs)
              }}
            />
            <Stack.Screen
              name="about"
              options={{ 
                title: "About Me",
                headerShown: true,
                headerTransparent: true,
                headerStyle:{
                  backgroundColor: "transparent",
                },
               // headerShown: false,
               }}
            />
            <Stack.Screen
              name="change"
              options={{ 
                title: "Change Profile Info",
                headerShown: true,
                headerTransparent: true,
                headerStyle:{
                  backgroundColor: "transparent",
                },
               // headerShown: false,
              }}
            />
            {/* Ďalšie obrazovky v profile môžu byť pridané tu */}
        </Stack>
      </>
    );
  }