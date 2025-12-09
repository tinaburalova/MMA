import React from "react";
import { View, Pressable, Text, StyleSheet, ViewStyle, TextStyle} from "react-native";
import { FontAwesome } from "@expo/vector-icons";



// FARBY A KONFIG

const COLORS = {
    primary: '#758D76', // Tvoja Sage Green
    white: '#FFFFFF',   // Biela
    darkText: '#1E1E1E',// Tmavá farba pre text na bielom pozadí
    // Text v tvojej Sage Green, ak je pozadie biele alebo transparentné
};



//Props is object that defines what kind of data we want to pass into our component
//here we define a prop called label of type string that will be used to display the text on the button
//we also define an optional prop theme of type "primary" that can be used to style the button differently based on the theme   

//props are properties that are passed into a component to customize it or make it reusable with different data 
//I want to re-utilize this button component with different labels so I define a prop label that will take in the text to be displayed on the button

type Props = {
    label: string;
    onPress?: () => void;
    theme?: 'primary' | 'text' | 'white' ; // Primárne tlačidlo (zelené) alebo iba text (transparentné)
    style?: ViewStyle; // Voliteľné dodatočné štýly pre kontajner
    textStyle?: TextStyle; // Voliteľné dodatočné štýly pre text
    iconName?: keyof typeof FontAwesome.glyphMap //voliteľná ikona
};

//theme is optional property indicated by the  ? symbol
//if we want more flexibility in styling we can add more themes or styles based on the theme prop


//v If statmente je array [] of property styles pri každom či view alebo pressable komponente 
//aray[] ma v sebe potom množstvo objektov {}

//je možnosť vyrobiť viacero tém a tie potom iba aplikovať/volať cez props do funkcie button a na obrazovke iba zadať ktorá téma sa má použiť

export default function Button({ label, theme = 'primary', onPress, style, textStyle, iconName } : Props) {
   
    // Dynamické nastavenie farieb a štýlov
    let buttonBackgroundColor: string;
    let buttonTextColor: string;
    let buttonExtraStyle: ViewStyle = {};
    let labelExtraStyle: TextStyle = {};

    switch (theme) {
        case 'primary':
            buttonBackgroundColor = COLORS.primary;
            buttonTextColor = COLORS.white;
            // Špecifický tieň pre primárnu farbu
            buttonExtraStyle = { 
                shadowColor: COLORS.primary,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 6, 
            };
            break;
            
        case 'white':
            buttonBackgroundColor = COLORS.white;
            buttonTextColor = COLORS.primary; // Text v Sage Green
            // Jemnejší tieň pre biely gombík
            buttonExtraStyle = {
                shadowColor: COLORS.darkText, 
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 3,
                elevation: 3,
            };
            break;
            
        case 'text':
            buttonBackgroundColor = 'transparent';
            buttonTextColor = COLORS.primary;
            buttonExtraStyle = {
                // Textové tlačidlo bez tieňa, menší padding
                paddingVertical: 10,
                elevation: 0,
                shadowOpacity: 0,
            };
            labelExtraStyle = {
                textDecorationLine: 'underline',
                fontWeight: '600',
            };
            break;
            
        default:
            buttonBackgroundColor = COLORS.primary;
            buttonTextColor = COLORS.white;
    }

    // Obsah tlačidla (ikona + text)
    const Content = (
        <>
            {iconName && (
                <FontAwesome
                    name={iconName}
                    size={18}
                    color={buttonTextColor}
                    style={styles.buttonIcon}
                />
            )}
            <Text 
                style={[
                    styles.buttonLabel, 
                    { color: buttonTextColor, fontFamily: 'CustomSansSerifBold' },
                    labelExtraStyle,
                    textStyle
                ]}
            >
                {label}
            </Text>
        </>
    );

    // Pressable pre všetky témy
    return (
        <View style={[styles.buttonContainer, style]}>
            <Pressable
                // Štýly aplikované priamo na Pressable, aby tieňovanie a pozadie správne fungovali
                style={({ pressed }) => [
                    styles.button,
                    styles.baseStyle, // Spoločné štýly (padding, radius 12)
                    buttonExtraStyle, // Tieň a špecifický padding
                    { 
                        backgroundColor: buttonBackgroundColor,
                        opacity: pressed ? 0.85 : 1, // Vizualizácia stlačenia
                    },
                ]}
                onPress={onPress}
            >
                {Content}
            </Pressable>
        </View>
    );
}


//Pressable is a component that can detect various types of interactions such as presses, long presses, etc.
//here we use Pressable to create a button that can be pressed
//when the button is pressed, an alert is shown with the message "You pressed a button"
//onPress is action insice Pressable component that defines what happens when the button is pressed



const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%', //umožní obsahu ovládať šírku
        //height: 68,
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        //padding: 3, 
    },
    baseStyle: {
        //spoločné vizuálne vlastnosti pre vyplnené tlačidlá
        //vzhľad dizajnu: zaoblenie a vertikálny padding
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 24,
    },

    button: {
        //borderRadius: 10, 
        width: "100%",
        //height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        //color: "white",
        fontSize: 16,
        fontWeight: '600',
    },
})
