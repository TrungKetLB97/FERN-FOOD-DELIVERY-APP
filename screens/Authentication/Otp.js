import React from "react";
import { View, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { COLORS, SIZES, FONTS } from "../../constants";
import { TextButton } from "../../components";
import { AuthLayout } from "../";

const Otp = ({ navigation }) => {

    const [timer, setTimer] = React.useState(60)

    // set countdown times
    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to hoangtrungket113@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.radius * 2,
      }}
    >
      {/* OTP input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 70,
            height: 70,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray1,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => {
            console.log(code);
          }}
        />

        {/* countdown times */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* footer */}
      <View>
        <TextButton
            label="Continue"
            buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                backgroundColor: COLORS.primary
            }}
            onPress={() => console.log("Continue")}
          />
          <View
            style={{
                marginTop: SIZES.padding,
                alignItems:'center'
            }}
          >
            <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            By signing up, you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              marginBottom: SIZES.radius,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => console.log("Terms and Conditions")}
          />
          </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
