import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Fontisto } from '@expo/vector-icons'; 

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const API_KEY = ''; // openweathermap.org API key

const icons = {
  Clouds : 'cloudy',  // https://icons.expo.fyi/Fontisto/cloudy
  Clear : 'day-sunny',
  Atomosphere : 'coludy-gusts',
  Snow : 'snow',
  Rain : 'rains',
  Drizzle : 'rain',
  Thunderstorm : 'lightning',
};

export default function App() {
  const [city, setCity] = useState("Loading... ");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
      }
      console.log(granted);
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = new Location.reverseGeocodeAsync({ latitude, longitude }, {useGoogleMaps: false});
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
    }, []);


  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
        pagingEnabled 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerstyle={styles.weather}>
          {days.length === 0 ? (  // 
            <View style={styles.day}>
            <ActivityIndicator color='white' style={{marginTop: 10}} size='large' />
          </View>
          ): (
            days.map((day, index) => 
            <View key={index} style={styles.day}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                }}>
                <Text style={styles.temp}>
                  {parseFloat(days.temp.day).toFixed(1)}
                  </Text>
                  <Fontisto 
                    name={icons[day.weather[0].main]} 
                    size={68} 
                    color='white'/>
                </View>

              <Text style={styles.description}>{day.weather[0]}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
            )
          )}
          {/* ... */}
        <View style={styles.day}>
          <View style={styles.section}>
            <Text style={styles.temp}>5</Text>
              <Fontisto 
                        name={icons['Snow']} 
                        size={68} 
                        color='white'/>
            </View>
            <Text style={styles.description}>Snow</Text>
            <Text style={styles.tinyText}>Snowing</Text>
        </View>
        {/* ... */}
        <View style={styles.day}>
          <View style={styles.section}>
                  <Text style={styles.temp}>22</Text>
                    <Fontisto 
                      name={icons['Thunderstorm']} 
                      size={68} 
                      color='white'/>
                  </View>
                  <Text style={styles.description}>Storm</Text>
                  <Text style={styles.tinyText}>HeavyRain</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 58,
    fontWeight: '500',
    color: 'white',
  },
  weather: {
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontWeight: '600',
    fontSize: 100,
    color: 'white',
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
