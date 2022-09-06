import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, IconButton, FormInput, CardItem, FooterTotal } from "../../components";
import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";

export default function Checkout({navigation, route}) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  }, []);

  function renderHeader() {
    return (
      <Header
        title={"CHECK OUT"}
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

  function renderMyCards() {
    return (
      <View>
        {selectedCard && dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }

  function renderDeliveryAddr() {
    return(
      <View style={{marginTop: SIZES.padding}} >
        <Text style={{...FONTS.h3}} > Delivery Address</Text>
        <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2
          }}
        >
          <Image 
            source={icons.location1}
            style={{
              width: 40,
              height: 40
            }}
          />
          <Text style={{marginLeft: SIZES.radius, width: '80%', ...FONTS.body3}} >
          265 Đ. Cầu Giấy, Hà Nội, Việt Nam
          </Text>
        </View>
      </View>
    )
  }

  function renderCoupon() {
    return(
      <View style={{marginTop: SIZES.padding}} >
        <Text style={{...FONTS.h3}} > Add Coupon </Text>

        <FormInput 
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: 'hidden'
          }}
          placeholder="Coupon Code"
          appendComponent={
            <View 
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary
              }} 
            >
              <Image 
                source={icons.discount}
                style={{
                  width: 40,
                  height: 40
                }}
              />
            </View>
          }
        />
      </View>
    )
  }

  return (
    <View
    style={{
      flex: 1,
      backgroundColor: COLORS.white
  }}
    >
      {/* header */}
      {renderHeader()}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding
        }}
      >
        {/* my cards */}
        {renderMyCards()}

        {/* delivery address */}
        {renderDeliveryAddr()}

        {/* coupon */}
        {renderCoupon()}

      </KeyboardAwareScrollView>
      <FooterTotal 
        subTotal={6.97}
        shippingFee={0.00}
        total={6.97}
        onPress={() => navigation.replace("Success")}
      />
      
    </View>
  )
}