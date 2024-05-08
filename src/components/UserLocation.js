import * as Location from 'expo-location';

export const userLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission denied');
  }
  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
  let address = await Location.reverseGeocodeAsync(location.coords);
  return { location, address, permissionStatus: status }; // Include permissionStatus in the returned object
};