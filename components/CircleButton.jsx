import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome name="plus" size={35} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "#ffd33d",
    borderWidth: 4,
    padding: 3,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#FFF",
  },
});
