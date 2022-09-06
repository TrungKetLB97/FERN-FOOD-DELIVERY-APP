import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, icons } from "../constants";

export default function Rating({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) {
  return (
    <View style={{ flexDirection: 'row' }} >
      <Image 
        source={icons.star}
        style={{
                tintColor: rating >= 1 ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{
                tintColor: rating >= 2 ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{
                tintColor: rating >= 3 ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{
                tintColor: rating >= 4 ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{
                tintColor: rating >= 5 ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
