import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
render() {
return (
<View>
<TouchableOpacity>
<Text style={styles.head}>Interesting News</Text>
<Text style={styles.head2}>
View News At The Site "https://timesofindia.indiatimes.com/"
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
