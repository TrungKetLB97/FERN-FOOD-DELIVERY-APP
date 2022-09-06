import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view"

import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";
import {
  StepperInput,
  IconButton,
  TextButton
} from "../../components";

const CartTab = ({navigation}) => {

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
          backgroundColor: COLORS.white
        }}
      >
        {/* cart list */}
      {renderCartList()}

      <View
        style={{
          flex: 1,
          marginBottom: 150,
          
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
          }}
          label="Order"
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
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

export default CartTab