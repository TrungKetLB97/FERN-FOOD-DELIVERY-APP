import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { IconButton } from "../../components";
import { COLORS, SIZES, FONTS, icons, constant, images, dummyData } from "../../constants";
import { utils } from "../../utils";


export default function Map({ navigation }) {

  const mapView = React.useRef()
  const [region, setRegion] = React.useState(null)
  const [toLoc, setToLoc] = React.useState(null)
  const [fromLoc, setFromLoc] = React.useState(null)
  const [angle, setAngle] = React.useState(0)

  const [isReady, setIsReady] = React.useState(false)
  const [duration, setDuration] = React.useState("")


  React.useEffect(() => {
    let initialRegion = {
      latitude: 21.0338406,
      longitude: 105.7943153,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 21.0338406,
      longitude: 105.7943153,
    };
  }, []);

  function renderMapView() {
    return(
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{
                ...FONTS.body3, 
                marginBottom: SIZES.radius,
                }} > Map </Text>
                <Text style={{
                ...FONTS.h2,
                }} > ERROR LIBRARY  </Text>
      </View>
    )
  }


  function renderHeaderBottons(){
    return(
      <>
        <IconButton 
          icon={icons.back}
          containerStyle={{
            position: 'absolute',
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...styles.buttonStyle
          }}
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray2
          }}
          onPress={() => navigation.goBack()}
        />

        <View
          style={{
            position: 'absolute',
            top: SIZES.padding * 2,
            right: SIZES.padding
          }}
        >
          <IconButton 
            icon={icons.globe}
            containerStyle={{
              ...styles.buttonStyle
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray
            }}
          />
          <IconButton 
            icon={icons.focus}
            containerStyle={{
              marginTop: SIZES.radius,
              ...styles.buttonStyle
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray
            }}
          />
        </View>
      </>
    )
  }

  function renderFooterInfo() {
    return(
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: "100%"
        }}
      >
        {/* Linear Gradient */}
        <LinearGradient 
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[
            COLORS.transparent,
            COLORS.lightGray1
          ]}
          style={{
            position:'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === 'ios' ? 200 : 50
          }}
        />

        {/* Info Container */}
        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white
          }}
        >
            {/* delivery time */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Image 
                source={icons.clock}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: COLORS.black
                }}
              />
              <View
                style={{
                  marginLeft: SIZES.padding
                }}
              >
              <Text style={{
                ...FONTS.body4, 
                color: COLORS.gray,
                }} > Your Delivery Time </Text>
                <Text style={{
                ...FONTS.h3,
                }} > 8 minutes </Text>
              </View>
            </View>

            {/* Address */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.padding
              }}
            >
              <Image 
                source={icons.focus}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: COLORS.black
                }}
              />
              <View
                style={{
                  marginLeft: SIZES.padding
                }}
              >
              <Text style={{
                ...FONTS.body4, 
                color: COLORS.gray,
                }} > Your Address </Text>
                <Text style={{
                ...FONTS.h3,
                }} > 265 Đ. Cầu Giấy, Hà Nội, Việt Nam </Text>
              </View>
            </View>

            {/* delivery Man Details */}
            <TouchableOpacity
              style={{
                flexDirection:'row',
                height: 70,
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary
              }}
            >
              <Image 
                source={images.profile}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 5
                }}
              />
              <View style={{flex: 1, marginLeft: SIZES.radius}} >
              <Text style={{
                ...FONTS.h3, 
                color: COLORS.white,
                }} > HOANG TRUNG KET </Text>
                <Text style={{
                ...FONTS.body4,
                color: COLORS.white
                }} > Delivery Man </Text>
              </View>

              <View
                style={{
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  backgroundColor: COLORS.transparentWhite1
                }}
              >
                <Image 
                source={icons.call}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              </View>
            </TouchableOpacity>

        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Map */}
      {renderMapView()}

      {/* header */}
      {renderHeaderBottons()}

      {/* Footer / Info */}
      {renderFooterInfo()}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white
  }
})
