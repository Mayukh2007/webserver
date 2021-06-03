import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import Horoscope from './screens/Horoscope';
import Weather from './screens/Weather';
import News from './screens/News';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
render() {
return (
<View>
<Container />
</View>
);
}
}

let navigator = createSwitchNavigator({
HomeScreen: HomeScreen,
JokeScreen: JokeScreen,
Horoscope: Horoscope,
Weather: Weather,
News: News,
});

const Container = createAppContainer(navigator);
