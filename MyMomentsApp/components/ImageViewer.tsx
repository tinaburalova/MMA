import { StyleSheet } from "react-native"; 
import { Image } from "expo-image";

//we use components because we want to reuse/re-utilize the same image(code) across our app
//instead of rewriting the same code again and again we create a component that can be callef whatever time we need it
//here we create a component called ImageViewer that takes in a prop imgSource of type string
//this prop will be the source of the image we want to display
//the component then returns an Image tag with the source set to the imgSource prop and styles applied from the stlyes object defined below

type Props = {
    imgSource: string;
};

export default function ImageViewer({ imgSource}: Props) {
    return (
        <Image source={imgSource} style={styles.image}></Image>)
}

 //imgSource je proprerty, ktorá sa odovzdáva do ImageViewe komponentu
 //imgSource will be changing everytime that we call the ImageViewer component with a different image source  

//ImageViewer funkcia na zobrazenie obrázku s daným štýlom jednoducho po zavolaní vracia obrázok,
//respekvíte vracia the same image tag that we are import from Image expo-image package

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})