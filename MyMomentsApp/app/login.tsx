import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { AuthContext } from "@/utils/authContext";
import React, { useContext } from "react";
import Button from "@/components/Button";
import AppBackground from "@/components/AppBackground";
import LeafLogo from "@/components/LeafLogo";


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
    const authState = useContext(AuthContext);

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
                    onPress={authState.logIn}
                    label="Prihlásiť sa" 
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