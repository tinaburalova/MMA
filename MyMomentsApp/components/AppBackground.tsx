import React from 'react';
import { ImageBackground, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';

// ***************************************************************
// Nastavenie cesty k pozadiu
// Odporúča sa použiť lokálny súbor (vyžaduje require)
// ***************************************************************
// PREDPOKLAD: Tvoj obrázok pozadia je uložený napríklad v 'assets/background/leafy_bg.jpg'
const DEFAULT_BACKGROUND_SOURCE: ImageSourcePropType = require('@/assets/images/background-image-1.png');

// Rozhranie definuje, aké vlastnosti (props) komponent prijíma
interface AppBackgroundProps {
    children: React.ReactNode; // Obsah, ktorý má byť zobrazený cez pozadie
    style?: ViewStyle; // Voliteľné dodatočné štýly pre kontajner
    source?: ImageSourcePropType; // Voliteľný zdroj obrázka
}

/**
 * Znovupoužiteľný obal pre pozadie aplikácie s automatickým roztiahnutím.
 * Prijíma akýkoľvek obsah (children) a zobrazí ho na ploche celého pozadia.
 */
const AppBackground: React.FC<AppBackgroundProps> = ({ children, style, source }) => {
    return (
        <ImageBackground
            // Ak nie je zadaný žiadny zdroj, použije sa predvolený
            source={source || DEFAULT_BACKGROUND_SOURCE}
            resizeMode="cover" // Zabezpečí, že obrázok pokryje celú plochu
            style={[styles.container, style]} // Spojenie základného a vlastného štýlu
        >
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      //  flex: 1, // Zabezpečí, že komponent vyplní celú dostupnú plochu
      //  width: '100%',
      //  height: '100%',
      // nastavenie vyššie nefungovalo –> nevyplnená celá obrazovka preto nasledujúce zmeny: 
              // --- TOTO JE NATIVE EXPO/RN RIEŠENIE ---
        // Zabezpečuje, že komponent zaberie celú plochu rodiča (celú obrazovku).
        ...StyleSheet.absoluteFillObject,
    },
});

export default AppBackground;