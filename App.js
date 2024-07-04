import { StatusBar } from "expo-status-bar";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const [showOptions, setShowOptions] = useState(false); // Estado del modal

  const onReset = () => {
    setShowOptions(false);
  };

  const onEditImage = () => {};

  const onSaveImageAsync = async () => {};

  // Selecionar imagen
  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    // Se actualizara la imagen si se selecciona
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setShowOptions(true);
      console.log(JSON.stringify(result, null, 2));
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageViewer selectedImage={imageUri} />
        {showOptions ? (
          <View style={styles.optionsContainer}>
            <IconButton label="Save" icon="save" onPress={onEditImage} />
            <CircleButton onPress={onEditImage} />
            <IconButton label="Reset" icon="refresh" onPress={onReset} />
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              label="Choose a photo"
              theme="primary"
              handler={pickImage}
            />
            <Button
              label="Use this photo"
              handler={() => setShowOptions(true)}
            />
          </View>
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
    padding: 5,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
