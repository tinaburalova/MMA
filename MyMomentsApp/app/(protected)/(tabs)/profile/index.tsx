import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Button from "@/components/Button";
import AppBackground from "@/components/AppBackground";

export default function Profile() {
    return ( 
        <AppBackground style={styles.contentPadding}>
            <View style={styles.container}>
                <Text style={styles.text}>This is my profile!</Text>

                <Link href="/(protected)/(tabs)/profile/about" push asChild>
                    <Button
                        label="Go to About Me"
                        theme="primary"
                    />
                </Link>
                <Link href="/(protected)/(tabs)/profile/change" push asChild>
                    <Button
                        label="Want to change something?"
                        theme="primary"
                    />
                </Link>
            </View>
        </AppBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
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
    }
})