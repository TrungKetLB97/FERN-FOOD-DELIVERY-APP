import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { SIZES, COLORS, FONTS,icons, images, dummyData } from "../../constants";

const Notification = () => {

  function renderNotifiToday (){
    return(
      <View
        style={{
          margin: SIZES.padding
        }}
      >
        <Text style={{...FONTS.h3, color: COLORS.black}} > ToDay </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.padding,
            paddingVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white2
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              width: 80,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: SIZES.padding,
              borderRadius: SIZES.radius
            }}
          >
            <Image 
            source={icons.rice}
            style={{
              width: 50,
              height: 50,
            }}
          />

          </View>

          <Text style={{marginLeft: SIZES.radius, width: '75%', ...FONTS.body3}} >
            265 Đ. Cầu Giấy, Hà Nội, Việt Nam
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.radius,
            paddingVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white2
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              width: 80,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: SIZES.padding,
              borderRadius: SIZES.radius,
            }}
          >
            <Image 
            source={icons.rice}
            style={{
              width: 50,
              height: 50,
            }}
          />

          </View>

          <Text style={{marginLeft: SIZES.radius, width: '75%', ...FONTS.body3}} >
            265 Đ. Cầu Giấy, Hà Nội, Việt Nam
          </Text>
        </View>

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
        {/* notification today */}
        {renderNotifiToday()}
        

      </View>
    );
}

export default Notification;