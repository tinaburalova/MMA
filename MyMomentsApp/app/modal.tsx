import { View } from "react-native";
import { Stack } from "expo-router";

//modal screen layout
export default function ModalLayout() {
    return (
        <Stack.Screen 
            options ={{
                headerShown: false,
                presentation: 'modal', //modal presentation style
            }}
        />
    )
}


//do index import priamo cez href:
//<Link href="/modal" push asChild>
//Button title="open modal"/Button>
//</Link>

// v layoute option:
//<Stack.Screen
//  name="modal"
//  options ={{
//      headerShown: false,
//      presentation: 'modal', //modal presentation style
//  }}
///>

//swipe to close animation
// vo videu robila ajmožnosť že modal vyskočí ako prvý pri zapnutí aplikácie.. využitie možno na prihlásovanie? neviem