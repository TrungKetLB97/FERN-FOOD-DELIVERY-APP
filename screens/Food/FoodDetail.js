import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";
import {
  Header,
  CartQuantityButton,
  IconLabel,
  TextButton,
  LineDivider,
  Rating,
  StepperInput,
} from "../../components";

const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = React.useState(dummyData.hamburger);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [qty, setQty] = React.useState(1);

  function renderHeader() {
    return (
      <Header
        title={"DETAIL"}
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
            onPress={() => navigation.navigate("Home")}
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
        rightComponent={
          <CartQuantityButton
            quantity={3}
            
          />
        }
      />
    );
  }
  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* food card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories & Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodItem?.calories} Calories
              </Text>
            </View>

            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* food Image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: "100%",
            }}
          />
        </View>
        {/* food info */}
        <View style={{ marginTop: SIZES.padding }}>
          {/* name & description */}
          <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>

          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem?.info}
          </Text>

          {/* ratings, duration & shipping */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
            }}
          >
            {/* ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label="4.5"
              labelStyle={{
                color: COLORS.white,
              }}
            />

            {/* duration */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="30 Mins"
            />

            {/* shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.padding,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="Free Shipping"
            />
          </View>

          {/* sizes */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes:</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes-${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => setSelectedSize(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
        {/* info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}> User </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            {" "}
            1.2 Km away from you
          </Text>
        </View>
        {/* Ratings */}
        <Rating rating={4} iconStyle={{ marginLeft: 3 }} />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* stepper Input */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        {/* text button */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="BUY NOW"
          label2="$ 1.99"
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* header */}
      {renderHeader()}

      {/* body */}
      <ScrollView>
        {/* food detail */}
        {renderDetails()}

        <LineDivider />

        {/* restaurant */}
        {renderRestaurant()}
      </ScrollView>

      {/* footer */}
      <LineDivider />

      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
