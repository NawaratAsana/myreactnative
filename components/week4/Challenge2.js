import React from "react";
import { View, StyleSheet, ProgressBarAndroid, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
const App = () => {
  return (
    <View style={{flex:1, flexDirection:'row',marginTop:30,justifyContent: "space-between",}}>
      <View style={{alignItems:'center'}}>
        <Text style={{color:'#FF6347',fontSize:70,marginLeft:30}}>4.7</Text>
        <Text style={{color:'gray',fontSize:18,marginLeft:30 ,marginTop:-6}}>out of 5</Text>
      </View>
    <View style={styles.container}>
      
        
        <View
          style={{
            flexDirection: "row",

          }}
        >
          <View style={{ flexDirection: "row", marginRight:5 }}>
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
          </View>
          <View>
            <View style={styles.example}>
            <Progress.Bar progress={0.1}  color="#FF6347"/>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <View style={{ flexDirection: "row" ,marginRight:5}}>
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
    
          </View>
          <View>
            <View style={styles.example}>
            <Progress.Bar progress={0.1}  color="#FF6347"/>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <View style={{ flexDirection: "row", marginRight:5}}>
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
           
          </View>
          <View>
            <View style={styles.example}>
            <Progress.Bar progress={0.4} color="#FF6347" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <View style={{ flexDirection: "row" , marginRight:5}}>
           
            <FontAwesome name="star" size={15} color="gray" />
            <FontAwesome name="star" size={15} color="gray" />
          </View>
          <View>
            <View style={styles.example}>
            <Progress.Bar progress={0.5}  color="#FF6347"/>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <View style={{ flexDirection: "row", marginRight:5 }}>
            <FontAwesome name="star" size={15} color="gray" />
          </View>
          <View>
            <View style={styles.example}>
            <Progress.Bar progress={0.2} color="#FF6347" />
            </View>
          </View>
          
        </View>
        <Text style={{color:'black',fontSize:18,marginLeft:30 }}>25 Ratings</Text>
        
      </View>
      
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginTop:5,
    marginRight:20,
  },
  example: {
    width: 150,
  },
});

export default App;
