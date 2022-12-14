import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS, FONTS } from "../constants";

export default function TextButton({
  buttonContainerStyle,
  disabled,
  label,
  label2 ="",
  label2Style,
  labelStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
      {label2 != "" && 
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style
          }}
        >
          {label2}
        </Text>
      }
    </TouchableOpacity>
  );
}
