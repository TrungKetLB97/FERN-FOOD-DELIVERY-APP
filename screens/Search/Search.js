import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextButton, HorizontalFoodCard } from "../../components";
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  dummyData,
  constant,
} from "../../constants";

const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginLeft: SIZES.radius,
        ...containerStyle,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  );
};

const Sections = ({ title, onPress, children }) => {
  return (
    <View>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      {children}
    </View>
  );
};

const Search = ({ navigation }) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [popular, setPopular] = React.useState([]);
  const [recommends, setRecommends] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);

  const [showFilterModal, setShowFilterModal] = React.useState(false);

  const [tags, setTags] = React.useState("");

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //handler

  function handleChangeCategory(categoryId, menuTypeId) {
    //Truy xuất menu phổ biến
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    //Lấy menu được đề xuất
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");

    //tìm menu dựa trên menuTypeId
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    // đặt menu phổ biến dựa trên categoryId
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    // đặt menu được đề xuất dựa trên categoryId
    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );

    //đặt menu dựa trên categoryId
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* icon */}
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* text input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder=" search food..."
        />
      </View>
    );
  }

  function renderTags() {
    return (
      <Section>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {constant.tags.map((item, index) => {
            return (
              <TextButton
                key={`Tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  paddingHorizontal: SIZES.padding,
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderSearchHistory() {
    return (
      <Sections title="Search history" onPress={() => console.log("Clear All")}>
        
      </Sections>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* search */}
      {renderSearch()}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* tags */}
            {renderTags()}

            {/* Search history */}
            {renderSearchHistory()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 140,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log("Search History")}
            />
          );
        }}
        ListFooterComponent={<View style={{ height: 200 }} />}
      />
    </View>
  );
};

export default Search;
