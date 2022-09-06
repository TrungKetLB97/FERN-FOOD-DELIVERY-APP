import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Header,
  IconButton,
  FormInputCard,
  TextButton,
  FormInput,
  FormInputCheck,
  RadioButton,
} from "../../components";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";
import { utils } from "../../utils";

export default function AddCard({ navigation, route }) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [cardNumber, setCardNumber] = React.useState("");
  const [cardNumberError, setCardNumberError] = React.useState("");

  const [cardName, setCardName] = React.useState("");
  const [cardNameError, setCardNameError] = React.useState("");

  const [expiryDate, setExpiryDate] = React.useState("");
  const [expiryDateError, setExpiryDateError] = React.useState("");

  const [cvv, setCvv] = React.useState("");
  const [cvvError, setCvvError] = React.useState("");

  const [isRemember, setIsRemember] = React.useState(false);

  React.useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  }, []);

  function isEnableAddCard() {
    return (
      cardNumber != "" &&
      cardName != "" &&
      expiryDate != "" &&
      cvv != "" &&
      cardNumberError == "" &&
      cardNameError == "" &&
      expiryDateError == "" &&
      cvvError == ""
    );
  }

  function renderHeader() {
    return (
      <Header
        title={"ADD NEW CARD"}
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 50,
          alignItems: "center",
        }}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        }
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        {/* detail */}
        <View
          style={{
            position: "absolute",
            bottom: 15,
            right: 0,
            left: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        {/* card number */}

        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChange={(value) => {
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 19, setCardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        {/* Card Holder Name */}
        <FormInput
          label="Cardholder Name"
          value={cardName}
          onChange={(value) => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          errorMsg={cardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
        />

        {/* expiry date & cvv */}
        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          {/* Expiry Date */}
          <FormInput
            label="Expiry Date"
            value={expiryDate}
            placeholder="MM/YY"
            maxLength={5}
            onChange={(value) => {
              utils.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            containerStyle={{
              flex: 1,
            }}
            errorMsg={expiryDateError}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          {/* cvv */}
          <FormInput
            label="CVV"
            value={cvv}
            maxLength={3}
            onChange={(value) => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            errorMsg={cvvError}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>
        {/* Remember */}
        <View
          style={{
            alignItems: "flex-start",
            marginTop: SIZES.padding,
          }}
        >
          <RadioButton
            label="Remember this card detail "
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label="Add Card"
          disabled={isEnableAddCard() ? false : true}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* header */}
      {renderHeader()}
      {/* body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* card */}
        {renderCard()}

        {/* forms */}
        {renderForm()}
      </KeyboardAwareScrollView>

      {/* footer */}
      {renderFooter()}
    </View>
  );
}
