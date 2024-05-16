import { View, Text,FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useState,useEffect } from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import {
  StarIcon,
  MapPinIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import color from "../constants/color";

import navigationStrings from "../constants/navigationStrings";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import MapView, { Marker,Callout } from 'react-native-maps';
import Cards from './Cards/Cards'
import { userLocation } from './UserLocation';



export default function Map({nailsalon,hairsalon,permissionStatus,setPermissionStatus,
  setAddress,setLocation,address,location}) {

    const navigation = useNavigation();
    const [data, setData] = useState([])
    
 
    
    useEffect(() => {
      const getLocation = async () => {
        try {
          if (permissionStatus === 'granted') {
            if (location && address) {
              setLocation(location);
              setAddress(`${address[0].name}, ${address[0].city}`);
            } else {
              setErrorMsg('Location data is missing.');
            }
          } else {
            const { location: loc, address: addr, permissionStatus1 } = await userLocation();
            setPermissionStatus(permissionStatus1);
            if (permissionStatus === 'granted') {
              setLocation(loc);
              setAddress(`${addr[0].name}, ${addr[0].city}`);
            } else {
              setErrorMsg('Permission denied');
            }
          }
        } catch (error) {
          setErrorMsg('An error occurred while fetching location');
        }
      };
      getLocation();
    }, [permissionStatus]);
  useEffect(() => {
        const mergedData = [...nailsalon, ...hairsalon];
     setData(mergedData)
    }, [])
   
console.log("from map",address)
  return (
    <View>
          <MapView 
          style={{height:800,width:900}}
        initialRegion={{
          latitude: 31.518816325825334,
          longitude: 74.36178405128638,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
  }}>
    
    
  </MapView>
  <View style={{ position: 'absolute',zIndex: 1,bottom:moderateVerticalScale(210) }}>
       <FlatList
       horizontal={true}
       showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item,index})=>(
                    <View>
                       <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate(navigationStrings.SHOP, { item});
                          }}
                       >
                       <View
              style={{
                flexDirection: "row",
                margin: verticalScale(7),
                borderWidth: moderateScale(1),
                borderRadius: moderateScale(10),
                backgroundColor: "white",
                borderColor: "white",
              }}
            >
              <View style={{ flex: 0.3 }}>
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
                  flexDirection: "row",
                  flex: 0.6,
                }}
              >
                <View style={{ padding: moderateScale(20) }}>
                  <Text
                    style={{
                      fontSize: scale(17),

                      fontWeight: "400",
                      color,
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <StarIcon color="grey" fill={color.foreground} size={15} />
                    <StarIcon color="grey" fill={color.foreground} size={15} />
                    <StarIcon color="grey" fill={color.foreground} size={15} />
                    <StarIcon color="grey" size={15} />
                    <StarIcon color="grey" size={15} />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MapPinIcon size={18} color="grey" />
                    <Text
                      style={{
                        fontSize: scale(12),
                        color: color.textColor,
                      }}
                    >
                      {item.address}
                    </Text>
                  </View>
                </View>
              </View>

             
            </View>
                       </TouchableOpacity>
                    </View>
            )}
       />
       
       </View>
    </View>
  )
}