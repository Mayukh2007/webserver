import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component{
goToJokeScreen = (buzzercolor)=>{
this.props.navigation.navigate('JokeScreen',{color:buzzercolor})
}
goToHoroscopeScreen = (buzzercolor)=>{
this.props.navigation.navigate('Horoscope',{color:buzzercolor})
}
goToWeatherScreen = (buzzercolor)=>{
this.props.navigation.navigate('Weather',{color:buzzercolor})
}
goToNewsScreen = (buzzercolor)=>{
this.props.navigation.navigate('News',{color:buzzercolor})
}
constructor() {
super();
this.state = {
like: 0,
dislike: 0,
};
}

likeCount = () => {
this.setState({ like: this.state.like + 1 });
};
dislikeCount = () => {
this.setState({ dislike: this.state.dislike + 1 });
};
changeScreen = (screen) => {
this.props.navigation.navigate(screen);
};
render(){
return(     
<View>
<AppHeader/>
<TouchableOpacity style = {[styles.button,{backgroundColor:'red'}]}
onPress={()=>
this.goToJokeScreen('red')
}>
<Text style = {styles.buttonText}>Read A Joke</Text>
</TouchableOpacity>
<TouchableOpacity style = {[styles.button,{backgroundColor:'green'}]}
onPress={()=>
this.goToHoroscopeScreen('green')
}>
<Text style = {styles.buttonText}>Horoscope</Text>
</TouchableOpacity>
<TouchableOpacity style = {[styles.button,{backgroundColor:'blue'}]}
onPress={()=>
this.goToWeatherScreen('blue')
}>
<Text style = {styles.buttonText}>Weather</Text>
</TouchableOpacity>
<TouchableOpacity style = {[styles.button,{backgroundColor:'yellow'}]}
onPress={()=>
this.goToNewsScreen('yellow')
}>
<Text style = {styles.buttonText}>Top News</Text>
</TouchableOpacity>
<Text style = {styles.rateText}> RATE US</Text>
<Text style={styles.like1}>{this.state.like}</Text>
<TouchableOpacity onPress={this.likeCount}>
<Image style = {styles.image1} source={require('../assets/thumbsup.png')}/>
</TouchableOpacity>
<Text style={styles.dislike2}>{this.state.dislike}</Text>
<TouchableOpacity onPress={this.dislikeCount}>
<Image style = {styles.image2} source={require('../assets/thumbsdown.png')}/>
</TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
button:{
justifyContent:'center',
alignSelf:'center',
borderWidth:2,
borderRadius:15,
marginTop:20,
width:200,
height:50,
backgroundColor:'blue'
},
buttonText:{
textAlign:'center',
color:'white'
},
rateText:{
alignSelf:"center",
marginTop:10,
fontWeight:'bold'
},
image1: {
width: 50,
height: 50,
marginTop: 20,
marginLeft: 100,
},
image2: {
width: 50,
height: 50,
marginTop:-80,
marginLeft: 200
},
like1: {
fontSize: 15,
marginLeft: 100,
marginBottom: -30,
fontWeight: 'bold'
},
dislike2: {
fontSize: 15,
marginLeft: 200,
marginBottom: 80,
marginTop: -60,
fontWeight: 'bold'
}
})