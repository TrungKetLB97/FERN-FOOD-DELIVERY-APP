import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view"

import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";
import {
  StepperInput,
  Header,
  CartQuantityButton,
  IconButton,
  FooterTotal
} from "../../components";

export default function MyCart({ navigation }) {

  const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

  // handler
  // add
  function updateQuantityHandler(newQty, id) {
    const newMyCartList = myCartList.map(cl => (
      cl.id === id ? { ...cl, qty: newQty } : cl
    ))
    setMyCartList(newMyCartList)
  }

  // delete
  function removeMyCartHandler(id) {
    let newMyCartList = [...myCartList]

    const index = newMyCartList.findIndex(cart => cart.id === id)

    newMyCartList.splice(index, 1)
    setMyCartList(newMyCartList)
  }


  function renderHeader() {
    return (
      <Header
        title={"My Cart"}
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
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }
  function renderCartList() {
    return(
      <SwipeListView 
        data={myCartList}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray1,
              ...styles.cartItemContainer
            }}
          >
            {/* food image */}
            <View
              style={{
                width: 90,
                height: 100,
                marginLeft: -10
              }}
            >
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                  position: 'absolute',
                  top: 10
                }}
              />
            </View>
            {/* food info */}
            <View style={{flex: 1}} >
                <Text 
                  style={{ ...FONTS.body3 }}
                > {data.item.name} </Text>
                <Text 
                  style={{ color: COLORS.primary, ...FONTS.h3 }}
                > {data.item.price} </Text>
            </View>
            {/* quantity */}
            <StepperInput 
              containerStyle={{
                height: 50,
                width: 120,
                backgroundColor: COLORS.white,
              }}
              value={data.item.qty}
              onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id)
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton 
            containerStyle={{
              flex:1,
              justifyContent: 'flex-end',
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginRight: 10
            }}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    )
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
     
      {/* cart list */}
      {renderCartList()}

      {/* footer */}
      <FooterTotal 
        subTotal={6.97}
        shippingFee={0.00}
        total={6.97}
        onPress={() => navigation.navigate("MyCard")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cartItemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius
  }
})