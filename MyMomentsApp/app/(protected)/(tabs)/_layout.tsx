import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

//customised the navigation headers for tabs:

export default function TabsLayout() {
  //we can define options for each specific screen in the tab navigator but 
  //in Tabs layout file do same for all of them, by accesing the container Tabs 
    return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#1E1E1E',
            tabBarInactiveTintColor: 'gray',
            headerStyle:{
                backgroundColor: 'white', 
            },
            tabBarShowLabel: false,  //zruší názvy pod ikonami
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: 'white',
            }
        }}
    >
       <Tabs.Screen 
          name="index" 
          options ={{ 
            headerTitle: "My Moments",
            headerShown: true,
            headerTransparent: true,
            headerStyle:{
              backgroundColor: "transparent",
            },
            tabBarIcon: ({focused, color}) => 
                <Ionicons 
                    name={focused ? "home" : "home-outline"}
                    //if no color={color} then icon is always black
                    //tabBarBadge na počet notofikácii
                    color={color}
                    size={30} 
                />
           // headerLeft: () => <></> ///šípka vľavo/späť prázdna, z indexu sa nedá vraciať je to homescreen
          }} 
        />
       <Tabs.Screen 
          name="about" 
          options ={{ 
            headerShown: true,
            headerTransparent: true,
            headerStyle:{
              backgroundColor: "transparent",
            },
            tabBarIcon: ({focused, color}) => 
                <Ionicons 
                    name={focused ? "heart" : "heart-outline"}
                    //if no color={color} then icon is always black
                    color={color}
                    size={30} 
                />
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options ={{ 
            //headerTitle: "Profile",
            headerShown: false,
            //headerShown: false,
            //href: null, //to disable navigating to this tab screen via link
            //popToTop: true –> go to the top screen in stack when taping on other icon in tab navigator and then back to this
            // without this nested screens would remain as they were left
            tabBarIcon: ({focused, color}) => 
                <Ionicons 
                    name={focused ? "person" : "person-outline"}
                    color={color}
                    size={30} 
                />
          }} 
        />
    </Tabs>
  );
}
