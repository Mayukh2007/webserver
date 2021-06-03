import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class WeatherScreen extends Component {

constructor() {
super();
this.state = {
weather: '',
};
}

getWeather = async () => {
var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
return fetch(url)
.then((response) => response.json())
.then((responseJson) => {
this.setState({
weather: responseJson,
});
});
};

componentDidMount = () => {
this.getWeather();
};

render() {
if (this.state.weather === '') {
return (
<View style={styles.container}>
<Text style={styles.container}>Loading...</Text>
</View>
);
}else {
return (
<View style={styles.container}>
<Text style={styles.bigtext}>Weather Forecast</Text>
<Text>Weather : {this.state.weather.weather[0].description}</Text>
<Text>Wind Speed : {this.state.weather.wind.speed}</Text>
<Text>Temprature : {this.state.weather.main.temp}</Text>
<Text>Min_Temprature : {this.state.weather.main.temp_min}</Text>
<Text>Max_Temprature : {this.state.weather.main.temp_max}</Text>
<Text>Pressure : {this.state.weather.main.pressure}</Text>
<Text>Humidity : {this.state.weather.main.humidity}</Text>
</View>
)
}
}
}
const styles = StyleSheet.create({
container: {
alignSelf: 'center',
marginTop: 0,
fontWeight:'bold',
fontSize: 20,
},
bigtext: {
alignSelf: 'center',
marginTop: 10,
fontFamily: 'Comic Sans MS',
fontSize: 30,
marginBottom: 30,
fontWeight: 'bold',
},
});