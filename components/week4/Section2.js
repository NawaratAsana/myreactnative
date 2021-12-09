import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View style={{ flexDirection:'column',alignItems:'center',marginTop :-30 ,marginLeft:20,marginRight:20, padding: 10, borderColor:"#FFF5EE" ,borderWidth : 1 ,borderRadius:20 ,backgroundColor:"#FFF5EE"}}>
      
     <Text style={{fontSize:30}}>Hilton San Francisco</Text>
     <View style={{ flexDirection: "row" ,alignItems:'center'}}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
     <Text style={{textAlign:'center'}}>Facilities provided may range from a modest quality mattress in a samll room to large suites</Text>
     
    </View>
  );
}
