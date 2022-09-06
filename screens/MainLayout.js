import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { 
  Home, 
  Search, 
  CartTab, 
  Favourite, 
  Notification 
} from "../screens";
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  constant,
  dummyData,
} from "../constants";
import { Header } from "../components";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

const TabButton = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab, 
}) => {

  const flatListRef = React.useRef()
  // reanimated shared value
  // home
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  // search
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  // cart
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  // favourite
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  // notification
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // reanimated Animated Style
  //home
  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });
  //search
  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });
  //cart
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });
  //favourite
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });
  //notification
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  React.useEffect(() => {
    setSelectedTab(constant.screens.home);
  }, []);

  React.useEffect(() => {
    // home
    if (selectedTab == constant.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false
      })

      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    // search
    if (selectedTab == constant.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    // cart
    if (selectedTab == constant.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    // favourite
    if (selectedTab == constant.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    // notification
    if (selectedTab == constant.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, {
        duration: 500,
      });
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: 50,
        ...drawerAnimationStyle
      }}
    >
      {/* header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          // marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
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
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />
      
      {/* Content */}
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList 
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constant.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constant.screens.home && <Home navigation={navigation} />}
                {item.label == constant.screens.search && <Search />}
                {item.label == constant.screens.cart && <CartTab navigation={navigation}/>}
                {item.label == constant.screens.favourite && <Favourite navigation={navigation}/>}
                {item.label == constant.screens.notification && <Notification navigation={navigation}/>}
              </View>
            );
          }}
        />
      </View>

      {/* footer */}
      <View
        style={{
          height: 100,
          justifyContent: "flex-end",
        }}
      >
        {/* shadow */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constant.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constant.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constant.screens.home)}
          />
          <TabButton
            label={constant.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constant.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constant.screens.search)}
          />
          <TabButton
            label={constant.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constant.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab(constant.screens.cart)}
          />
          <TabButton
            label={constant.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constant.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => setSelectedTab(constant.screens.favourite)}
          />
          <TabButton
            label={constant.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constant.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constant.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  )
}
function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);