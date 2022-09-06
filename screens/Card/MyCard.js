import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

import { CardItem, Header, IconButton, TextButton } from "../../components";
import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";

export default function MyCard({ navigation }) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  function renderHeader() {
    return (
      <Header
        title={"MY CARD"}
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
        {dummyData.myCards.map((item, index) => {
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
  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}> Add New Card </Text>

        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            />
          );
        })}
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
          disabled={selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == "NewCard" ? " Add" : "Place Your Order"}
          onPress={() => {
            if (selectedCard?.key == "NewCard") {
              navigation.navigate("AddCard", { selectedCard: selectedCard });
            } else {
              navigation.navigate("Checkout", {
                selectedCard: selectedCard,
              });
            }
          }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* header */}
      {renderHeader()}

      {/* cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My Card */}
        {renderMyCards()}

        {/* add new card */}
        {renderAddNewCard()}
      </ScrollView>

      {/* footer */}
      {renderFooter()}
    </View>
  );
}
