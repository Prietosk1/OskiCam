import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function IconButton({ label, onPress, icon }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <FontAwesome name={icon} color="#FFF" size={24} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { gap: 12, justifyContent: "center", alignItems: "center" },
  label: { color: "#FFF" },
});
