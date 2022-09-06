import { View, Text, Image } from "react-native";
import React from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { images, SIZES, FONTS, COLORS } from "../../constants";

export default function AuthLayout({
  title,
  subtitle,
  titleContainerStyle,
  children,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.padding,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* app icon */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.logo_2}
            resizeMode="contain"
            style={{
              width: 250,
              height: 150,
            }}
          />
        </View>

        {/* title & sub title */}
        <View
          style={{
            marginTop: SIZES.base,
            ...titleContainerStyle,
          }}
        >
          <Text style={{ textAlign: "center", ...FONTS.h2 }}> {title} </Text>
          <Text
            style={{
              textAlign: "center",
              ...FONTS.body3,
              marginTop: SIZES.base,
              color: COLORS.darkGray,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {/* contenr / children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
}
