import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { ArrowLeftIcon, StarIcon, MapPinIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon } from "react-native-heroicons/outline";
import color from "../../constants/color";
import TopTab from "../../Navigation/TopTab";
import Services from "../Services/Services";
import BookNowButton from "../../components/BookNowButton/BookNowButton";


export default function Shop() {
  const navigation = useNavigation();
  const { params: { item } } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
   
    <SafeAreaView style={{ flex: 1 }}>
     
     
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: verticalScale(20),
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "105%",
              height: moderateScale(200),
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              position: "absolute",
              left: moderateScale(8),
              top: moderateVerticalScale(16),
              backgroundColor: "white",
              borderRadius: 100,
            }}
          >
            <ArrowLeftIcon size={30} color={color.background} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "white", margin: moderateScale(5) }}>
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: "500",
              color: color.textColor,
            }}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View
              style={{ flexDirection: "row", marginRight: moderateScale(15) }}
            >
              <StarIcon size={22} color="grey" fill={color.background} />
              <StarIcon size={22} color="grey" fill={color.background} />
              <StarIcon size={22} color="grey" fill={color.background} />
              <StarIcon size={22} color="grey" />
              <StarIcon size={22} color="grey" />
            </View>
            <View style={{ flexDirection: "row", right: 10 }}>
              <TouchableOpacity
                style={{ right: moderateScale(20), borderRadius: 100 }}
              >
                <PhoneIcon size={22} color={color.background} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ borderRadius: 100, right: moderateScale(10) }}
              >
                <ChatBubbleLeftEllipsisIcon size={22} color={color.background} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", margin: moderateScale(5) }}>
            <MapPinIcon size={20} color="grey" />
            <Text>{item.address}</Text>
          </View>
        </View>
       
        <TopTab 
           
        services={item.services}
        />
        <BookNowButton/>
      </View>
    
    </SafeAreaView>
    </>
  );
}
