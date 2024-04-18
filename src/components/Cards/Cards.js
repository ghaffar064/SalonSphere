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
import color from "../../constants/color";

export default function Cards() {
  // const [filled, setfilled] = useState(false)
  const [data,setData] = useState([
    {
      name: "The big tease salon",
      description: "this is salon 1",
      image: imagePath.salonpic,
      fillheart:false,
     
      
    },
    {
      name: "The salon master",
      description: "this is salon 1",
      image: imagePath.salonpic2,
      fillheart:false,
      
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.salonpic,
      fillheart:false,
     
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.salonpic,
      fillheart:false,
     
    },
    {
      name: "salon1",
      description: "this is salon 1",
      image: imagePath.profile,
      fillheart:false,
         },
  ]);
  const toggleHeart = (index) => {
    const newData = [...data];
    newData[index].fillheart = !newData[index].fillheart;
    if(newData[index].fillheart)
    alert( "added to favourite")
    setData(newData);
  };

  return (
    <View style={{ flex: 1,  }}>
      <FlatList
        data={data}
        renderItem={({ item,index }) => (
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                margin: verticalScale(6),
                borderWidth: moderateScale(1),
                borderRadius: moderateScale(10),
                backgroundColor:'white',
                borderColor:'white'
              }}
            >
              <View style={{flex:.3}}>
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
                  flex:.6,
                 
                }}
              >
                <View style={{ padding: moderateScale(20) }}>
                  <Text
                    style={{
                      fontSize: scale(17),

                      fontWeight: '400',
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <StarIcon color="grey" fill={color.forground} size={15} />
                    <StarIcon color="grey" fill={color.forground} size={15} />
                    <StarIcon color="grey" fill={color.forground} size={15} />
                    <StarIcon color="grey" size={15} />
                    <StarIcon color="grey" size={15} />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MapPinIcon size={18} color="grey" />
                    <Text
                      style={{
                        fontSize: scale(12),
                        color:color.forground
                      }}
                    >
                      Nearby expo center
                    </Text>
                    
                  </View>
                  
                </View>
                  

                             </View>
                          
                    <TouchableOpacity onPress={() => toggleHeart(index)} style={{flex:.1,paddingVertical:moderateVerticalScale(5)}}>
                {
                  item.fillheart?<HeartIcon size={20} color="grey" fill={color.forground} />
                  :<HeartIcon size={20} color="grey"  />

                }
                
                                </TouchableOpacity>
                    
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
