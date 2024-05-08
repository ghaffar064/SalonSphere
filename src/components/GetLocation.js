import { moderateScale } from 'react-native-size-matters';
import color from '../constants/color';
import { MapPinIcon} from "react-native-heroicons/outline";
import { userLocation } from './UserLocation';
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,Image,} from 'react-native';

export default function GetLocation({permissionStatus}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getLocation = async () => {
      const { location, address,permissionStatus } = await userLocation();
      // permissionStatus1=permissionStatus;
      if (permissionStatus === 'granted') {
        try {
         
          setLocation(location);
          setAddress(`${address[0].name}, ${address[0].city}`);
        } catch (error) {
          setErrorMsg('Permission denied');
        }
      } else {
        setErrorMsg('Permission denied');
      }
    };
    getLocation();
  }, [permissionStatus]);
  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = address;
  }

  return (
    <View style={{ flexDirection: 'row', padding: moderateScale(10) }}>
      <MapPinIcon size={20} color="white" />
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
 
  paragraph: {
   
    textAlign: 'center',
    color:'white'
    
    
    
  },
});