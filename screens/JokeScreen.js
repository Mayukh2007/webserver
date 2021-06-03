import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
render() {
return (
<View>
<TouchableOpacity>
<Text style={styles.head}>Jokes</Text>
<Text style={styles.head2}>
View Jokes At The Site "https://redtri.com/best-jokes-for-kids/slide/1"
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

