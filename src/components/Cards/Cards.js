import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
import { StarIcon, MapPinIcon,HeartIcon } from "react-native-heroicons/outline";

export default function Cards() {
  const data = [
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                margin: verticalScale(10),
                borderWidth: moderateScale(1),
              }}
            >
              <View style={{ borderWidth: 2 }}>
                <Image
                  source={item.image}
                  style={{
                    width: moderateScale(120),
                    height: moderateVerticalScale(120),
                  }}
                />
              </View>

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View style={{ padding: moderateScale(20) }}>
                  <Text
                    style={{
                      fontSize: scale(17),

                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <StarIcon color="grey" fill="#A020F0" size={20} />
                    <StarIcon color="grey" fill="#A020F0" size={20} />
                    <StarIcon color="grey" fill="#A020F0" size={20} />
                    <StarIcon color="grey" size={20} />
                    <StarIcon color="grey" size={20} />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MapPinIcon size={20} color="grey" />
                    <Text
                      style={{
                        fontSize: scale(13),
                      }}
                    >
                      Nearby expo center
                    </Text>
                  </View>
                </View>

                <View style={{marginTop:moderateVerticalScale(10)}}>
                <HeartIcon size={20} color="grey" fill="red" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
