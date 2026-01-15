/*

import { useRoute } from "@react-navigation/native";
import { router, useRouter } from "expo-router";
import { createContext, useState, PropsWithChildren } from "react";


type AuthState = {
    isLoggedIn: boolean,
    logIn: () => void,              //function that INITIATE login and logout
    logOut: () => void,
}

export const AuthContext = createContext<AuthState>({       //to pass the state of auth
    isLoggedIn: false,
    logIn: () => { },              // initial value in 
    logOut: () => { },              //but all option is mandatory
});

export function AuthProvider({ children }: PropsWithChildren) {  //samotný provider, 
    const [isLoggedIn, setIsLoggedIn] = useState(false);   //we've stored our login in useState variable –> ist in memory –> refresh = reset to initial value (login again please)
    // we want to persist this value, save it do device storage and read it on launch (AsyngStorage)
    const router = useRouter()

    const logIn = () => {
        setIsLoggedIn(true);
        router.replace("/");   //namiesto replace keby bolo push –> tak sa potiahnutím prsta dá vrátiť na login obrazovku = neželané
    };

    const logOut = () => {
        setIsLoggedIn(false);
        router.replace("/login");
    };


    // chceme wrap out our root layout with this provider to be accesable to anyone: 
    //we need to make sure that this provvider will accept children (props with children)
    //the value we pass to into provider is O state which we can manage inside this component –> 
    // vytvorenie const to state value definition for loggedin 
    // and then create a little constatne function for login and logout
    //all of them will pass to the provider value and be available from the O context –> now go to the root layout (app/_layout)

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )

}
    */