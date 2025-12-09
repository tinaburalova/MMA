import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoungScreen() {
  return (
    <>
    <Stack.Screen options= {{title: "Oops! Not found" }}></Stack.Screen>
    <View style={styles.container}>
        <Link href='/'style={styles.button} >Go to the Home screen</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "White",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "grey",
    fontWeight: "bold",
  }
})