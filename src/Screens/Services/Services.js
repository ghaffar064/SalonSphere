import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import color from "../../constants/color";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import RadioButtonRN from "radio-buttons-react-native";

export default function Services({ route }) {
  const { services } = route.params;
  const [selected, setSelected] = useState([]);
  console.log(selected);

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
                      setSelected([service.type, option.name, option.price])
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
                      {selected.toString() ===
                      [service.type, option.name, option.price].toString() ? (
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
