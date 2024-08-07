import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import React, { useState,useEffect } from "react";
import color from "../../constants/color";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import RadioButtonRN from "radio-buttons-react-native";

export default function Services({ route }) {
  const { services } = route.params;

  const [selected, setSelected] = useState({});
  const [totalPrice, setTotalPrice] = useState();


  const toggleOption = (serviceType, optionName, optionPrice) => {
    const isSelected =
      selected[serviceType] &&
      selected[serviceType].name === optionName &&
      selected[serviceType].price === optionPrice;

    if (isSelected) {
      setSelected((prevState) => ({
        ...prevState,
        [serviceType]: null,
      }));
    } else {
      setSelected((prevState) => ({
        ...prevState,
        [serviceType]: { name: optionName, price: optionPrice },
      }));
    }
  };

  const isSelected = (serviceType, optionName, optionPrice) => {
    return (
      selected[serviceType] &&
      selected[serviceType].name === optionName &&
      selected[serviceType].price === optionPrice
    );
  };

  // Calculate total price
  // useEffect(() => {
  //   const calculateTotalPrice = () => {
  //     let totalPrice = 0;
  //     for (const serviceType in selected) {
  //       if (selected.hasOwnProperty(serviceType) && selected[serviceType]) {
  //         totalPrice += selected[serviceType].price;
  //       }
  //     }
  //     setTotalPrice(totalPrice);
  //   };
  
   
  // }, [])
  

  return (
    <ScrollView style={{ marginTop: moderateScale(10) }}>
      {services.map((service, i) => (
        <View key={i}>
          <Text
            style={{
              textAlign: "center",
              backgroundColor: color.background,
              fontSize: scale(18),
              color: "white",
              padding: moderateVerticalScale(2),
            }}
          >
            {service.type}
          </Text>
          <View
            style={{
              marginTop: moderateVerticalScale(10),
              marginBottom: moderateVerticalScale(10),
            }}
          >
            {service.options.map((option, j) => (
              <View
                key={j}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: moderateScale(8),
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text>{option.name}</Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Text>{option.price}</Text>
                </View>
                <View style={{ width: "10%" }}>
                  <TouchableOpacity
                    onPress={() =>
                      toggleOption(service.type, option.name, option.price)
                    }
                  >
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderColor: color.background,
                        borderWidth: 2,
                        borderRadius: 20,
                      }}
                    >
                      {isSelected(service.type, option.name, option.price) ? (
                        <View
                          style={{
                            backgroundColor: color.background,
                            width: 22,
                            height: 22,
                            borderRadius: 20,
                            margin: 2,
                          }}
                        ></View>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
     
    </ScrollView>
  );
}
