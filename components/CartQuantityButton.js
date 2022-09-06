import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function CartQuantityButton({
  containerStyle,
  iconStyle,
  quantity,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightOrange2,
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 15,
          height: 15,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            lineHeight: 0,
            fontSize: 10,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
