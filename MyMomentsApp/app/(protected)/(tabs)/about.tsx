import AppBackground from "@/components/AppBackground";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return ( 
        <AppBackground style={styles.contentPadding}>
            <View>
                <Text style={styles.text}>About the future and the past</Text>
            </View>
        </AppBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'burlywood',
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    
    },
    contentPadding: {
        flex: 1, 
        paddingHorizontal: 20,
        paddingTop: 120, 
        paddingBottom: 1, 
        alignItems: 'center',
    },
})