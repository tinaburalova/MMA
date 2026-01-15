import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React, { useContext, useEffect } from "react";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { useAuth } from "@/context/AuthContext";

import Button from "@/components/Button";
import AppBackground from "@/components/AppBackground";
import LeafLogo from "@/components/LeafLogo";


// Toto povie prehliadaču, aby po prihlásení vrátil kontrolu aplikácii
WebBrowser.maybeCompleteAuthSession();

// 1. Logo komponent pre názov aplikácie
const AppLogo: React.FC = () => (
    <View style={styles.logoContainer}>
        {/* Použitie importovaného SVG komponentu */}
        <LeafLogo size={32} /> 
        <Text style={styles.appName}>MyMomentsApp</Text>
    </View>
);

// 2. Funkcia pre centrálnu, jemnú grafiku
const PlaceholderGraphic: React.FC = () => (
    <View style={styles.graphicContainer}>
        <Text style={styles.graphicText}></Text>
    </View>
);

// 3. Hlavný komponent prihlasovacej obrazovky
const LoginScreen: React.FC = () => {
    const { signIn } = useAuth();

    // 4. Konfigurácia Google prihlásenia
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "6129931752-9mdfip5qe2o46gpoc128hujb4dcaj1eu.apps.googleusercontent.com",
        // Ak neskôr vytvoríš Android, pridáš ho sem:
        // androidClientId: "..."
    });

    // 5. Sledovanie odpovede z Google
    useEffect(() => {
        if (response?.type === "success") {
            const { authentication } = response;
            
            // Tu simulujeme získanie dát (neskôr ich budeme ťahať z Google API)
            signIn({
                id: authentication?.accessToken || "google-id",
                name: "Užívateľ MyMoments",
                email: "user@example.com"
            });
        }
    }, [response]);

    return ( 
        // CELÁ OBRAZOVKA JE ZABALENÁ do AppBackground
        <AppBackground style={styles.contentPadding}>
            
            <AppLogo /> 
            
            <Text style={styles.subtitle}>
                Tvoje spomienky, usporiadané s láskou
            </Text>

            <PlaceholderGraphic />

            {/* Tlačidlo posunuté dole, do 'Thumb Zone' */}
            <View style={styles.buttonZone}>
                <Button 
                    // Tlačidlo je vypnuté, kým sa nepripraví Google request
                    disabled={!request}
                    // 6. Spustenie Google okna
                    onPress={() => promptAsync()}
                    label="Prihlásiť sa cez Google" 
                    theme="primary" />
                <Text style={styles.actionText}>
                    Registrovať sa!
                </Text>
            </View>
            
        </AppBackground>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    // V AppBackground je už flex: 1, tu len definujeme paddingy pre obsah
    contentPadding: {
        paddingHorizontal: 32,
        paddingTop: 80, 
        paddingBottom: 40, 
        alignItems: 'center',
    },
    
    // Logo sekcia
    logoContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    appName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1E1E1E',
        fontFamily: 'CustomSansSerifBold', 
    },

    // Podtitul
    subtitle: {
        color: '#494949',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 4,
        marginBottom: 60,
        maxWidth: 250,
        lineHeight: 22,
    },
    
    // Grafika v strede
    graphicContainer: {
        flex: 1, // Vyplní priestor
        justifyContent: 'center',
        alignItems: 'center',
    },
    graphicText: {
        fontSize: 100,
        opacity: 0.15, 
        transform: [{ rotate: '-15deg' }],
    },

    // Tlačidlo a text dole
    buttonZone: {
        width: '100%',
        alignItems: 'center',
    },
    actionText: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: '500',
        color: '#758D76', 
        textDecorationLine: 'underline',
    }
});