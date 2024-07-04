import { View, Image, StyleSheet } from "react-native";
import React from "react";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function ImageViewer({ selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage;
  return (
    <View style={styles.imageContainer}>
      <Image
        source={imageSource}
        style={styles.placeholderImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: { flex: 2, paddingVertical: 20 },
  placeholderImage: {
    width: 340,
    height: 400,
    backgroundColor: "rgba(255,255,255,.10)",
    borderRadius: 18,
  },
});
