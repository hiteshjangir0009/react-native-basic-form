import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
const Buttons = ({ label, buttonText, onPress, style, textStyle, spacing, labelStyle, ...touchableProps }) => {
    return (<View style={{}}>
      <TouchableOpacity {...touchableProps} onPress={onPress} style={[
            {
                backgroundColor: "#2563eb",
                padding: 14,
                borderRadius: 8,
                alignItems: "center",
            },
            style,
        ]}>
        <Text style={[{ color: "#fff", fontWeight: "600" }, textStyle]}>
          {buttonText !== null && buttonText !== void 0 ? buttonText : label}
        </Text>
      </TouchableOpacity>
    </View>);
};
export default Buttons;
