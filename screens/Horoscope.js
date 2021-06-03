import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
render() {
return (
<View>
<TouchableOpacity>
<Text style={styles.head}>Horoscope Of Today</Text>
<Text style={styles.head2}>
View Horoscopes At The Site "https://www.hindustantimes.com/astrology/horoscope/horoscope-today-astrological-prediction-for-may-21-101621561564462.html"
</Text>
</TouchableOpacity>
</View>
);  
}
}

const styles = StyleSheet.create({  
head: {
textAlign: 'center',
fontSize: 30,
backgroundColor: 'black',
color:'white',
fontWeight:'bold'
},
head2:{
fontSize: 20,
fontWeight:'bold'
}
});
