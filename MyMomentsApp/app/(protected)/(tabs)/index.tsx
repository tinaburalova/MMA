//import { Link } from "expo-router";
import { View, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
//import { Image } from "expo-image";
import ImageViewer  from "../../../components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
//this way of import allows us to access all methods, functions and properties from this library, just write ImagePicker. and you will see all available options
import { useState } from "react";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import AppBackground from "@/components/AppBackground";

const PlaceholderImage = require("../../../assets/images/background-image-1.png");
//toto už nepotrebujeme keďže používame ImageViewer component, tak nakoniec ano lebo nemame definovaný typ prč imgSource v ImageViewer komoponente



export default function Index() {
  
  const authState = useContext(AuthContext);

  //Setter function and State variable for selected image (from the resault down in pickImageAsync function in result part (if))
  //method selectedImge will hold the uri using a hook useState, and setSelectedImgae is method that will set the value of this variable
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  //function to pick image from device library, we get info about image like size, uri, type etc –> we can call uri in function to set the selected image
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result);
      //setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image, try again!");
    }
  };

  return (
    //Starý štýl zobrazenia obrázok hore a pod ním text
    //<View style={styles.container}>
    //   <Image source={PlaceholderImage}
    //    style={styles.image}></Image>
    //  <Text style={styles.text}>Welcome to timelaps of your story.</Text> 
    //</View>

    //Tento štýl zobrazenia s obrazkom v podazí hardcoded obrázok a text –> nahradiť componentom ImageViewer
   //  <View style={styles.container}>
   //   <View style={styles.imageContainer}>
   //     <Image source={PlaceholderImage} style={styles.image}></Image>
   //   </View>
   // </View>

   //ImageViewer    ///after setSelectedImage vieme nahradiť placeholderImage práve selected image but in || because we need to have this validated and selected image is set after upload
  <AppBackground style={styles.contentPadding}>

    <SafeAreaView style={styles.contentContainer}>

          <View style={styles.container}>
              <View style={styles.imageContainer}>
                 <ImageViewer imgSource={selectedImage || PlaceholderImage}/>
              </View>

              <View style={styles.footerContainer}>
                <Button 
                    onPress={pickImageAsync}
                    label="Choose a photo" 
                    theme="primary" />
                <Button label="Use this photo" />
              </View>

              <View style={styles.footerContainer}>
                <Button 
                    onPress={authState.logOut}
                    label="Log out!" 
                    theme="primary" />
              </View>

     
        </View>

      </SafeAreaView>

   </AppBackground>



//this View is going to serve as my container for the footer of the screen 

  );
}

//vymazaný link ale vo fungujúcom stave: 
//<Link href="/about" style={styles.button} >Go to the About screen</Link>
//import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: "hidden",
  },
  // NOVÝ KONTAJNER: Definuje rozloženie obsahu
  contentContainer: {
    flex: 1, // Kľúčové: aby sa obsah roztiahol na 100% v rámci AppBackground
    paddingHorizontal: 20, // ZMENENÉ na 20
    paddingBottom: 1, // ZMENENÉ na 1 (minimálne spodné odsadenie)
    alignItems: 'center',
    // paddingTop je riešený pomocou SafeAreaView
  },
  contentPadding: {
    flex: 1, 
    paddingHorizontal: 20,
    paddingTop: 120, 
    paddingBottom: 1, 
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
})

//flex 1 / 3 znamená že táto časť zaberie tretinu dostupného priestoru v rodičovskom kontejnery