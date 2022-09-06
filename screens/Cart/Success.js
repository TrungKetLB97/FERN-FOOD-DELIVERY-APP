import { View, Text, Image, BackHandler } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, images } from "../../constants";
import { TextButton } from "../../components";

export default function Success({ navigation }) {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.success}
          style={{
            width: 150,
            height: 150,
          }}
        />

        <Text style={{ ...FONTS.h1, marginTop: SIZES.padding }}>
          {" "}
          Congratulations{" "}
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            marginTop: SIZES.base,
            textAlign: "center",
            color: COLORS.darkGray,
          }}
        >
          {" "}
          Payment was successfully made!{" "}
        </Text>
      </View>

      <TextButton
        buttonContainerStyle={{
          height: 60,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        label="Done"
        onPress={() => navigation.navigate("DeliveryStatus")}
      />
    </View>
  );
}
