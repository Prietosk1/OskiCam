import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Button({
  label,
  theme = "none",
  handler = () => {
    console.log("Pressed");
  },
}) {
  const usePrimaryStyles = theme === "primary";

  return (
    <View
      style={{
        ...styles.buttonContainer,
        borderWidth: usePrimaryStyles ? 4 : 0,
        borderColor: usePrimaryStyles ? "#ffd33d" : "transparent",
        borderRadius: usePrimaryStyles ? 18 : 0,
      }}
    >
      <Pressable
        style={{
          ...styles.button,
          backgroundColor: usePrimaryStyles ? "#fff" : "transparent",
        }}
        onPress={handler}
        android_ripple={true}
      >
        {theme === "primary" && (
          <FontAwesome name="picture-o" size={18} color="#25292e" />
        )}
        <Text
          style={{
            ...styles.buttonText,
            color: usePrimaryStyles ? "#25292e" : "#FFF",
          }}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});
