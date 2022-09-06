import React from "react";
import { View, Text, Image } from "react-native";

import { AuthLayout } from "../";
import { COLORS, SIZES, icons } from "../../constants";
import { TextButton, FormInput } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  function isEnableSendEmail() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
      titleContainerStyle={{
        marginTop: SIZES.radius * 2,
      }}
    >
      {/* form input email */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            // validate email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
      {/* footer */}
      <View>
        <TextButton
          label="Send Email"
          disabled={isEnableSendEmail() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
