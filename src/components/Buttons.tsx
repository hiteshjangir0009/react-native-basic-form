import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FormText from "./Text";
import type { ButtonProps } from "../types";

const Buttons: React.FC<ButtonProps> = ({
  label,
  buttonText,
  onPress,
  style,
  textStyle,
  spacing,
  labelStyle,
}) => {
  return (
    <View style={{ gap: spacing ?? 13 }}>
      <FormText label={label || " "} style={labelStyle} />

      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            backgroundColor: "#2563eb",
            padding: 14,
            borderRadius: 8,
            alignItems: "center",
          },
          style,
        ]}
      >
        <Text style={[{ color: "#fff", fontWeight: "600" }, textStyle]}>
          {buttonText ?? label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
