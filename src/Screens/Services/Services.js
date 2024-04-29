import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../constants/color";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
import RadioButtonRN from "radio-buttons-react-native";

export default function Services({ route }) {
  const { services } = route.params;

  return (
    <ScrollView style={{ marginTop: moderateScale(10) }}>
      {services.map((service, i) => (
        <View key={i} >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: color.background,
              fontSize: scale(18),
              color: "white",
            }}
          >
            {service.type}
          </Text>
          <View
            style={{
             
                
              marginTop:moderateVerticalScale(10),marginBottom:moderateVerticalScale(10)
           
            }}

          >
          
              {service.options.map((option, i) => (
                <View key={i} style={{ flexDirection:'row',justifyContent:'space-between',
                        alignItems:'center',margin:8
                }}>
                  

                  <View style={{width:'50%'}} > 
                  <Text>{option.name}</Text>
                  </View>
                  <View style={{width:'40%'}}>
                  <Text>{option.price}</Text>
                  </View>
                  <View style={{width:'10%'}}>
              <RadioButtonRN
                data={[option]}
                selectedBtn={(e) => console.log(e)}
                box={false}
                circleSize={moderateScale(20)}
              />
            </View>
                </View>
              ))}
          
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
