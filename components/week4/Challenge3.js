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

export default function Challenge3() {
  return (
    <View
      style={{
        flexDirection: "column",
        margin: 10,
        padding: 10,
        borderColor: "#f5f5f5",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
      }}
    >
        <View style={{justifyContent:'space-between',flexDirection: "row"}}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          source={require("../../assets/week3/profile-3.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Grigority Kozhukhov</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star-o" size={20} color="gray" />
          </View>
        </View>
      </View>
      <View>
      <Text style={{ color:'gray' ,marginTop:15,marginRight:10}}>Jun 2018</Text>
      </View>
      </View>

      <Text style={{ marginLeft:10,fontSize:16,  }}>
        Nice Place
      </Text>
      <Text style={{ marginLeft:10,fontSize:15, color:'gray', paddingTop:10}}>
        Andaz Tokyo Torancmon Hills is one of the newest luxurt hotels Tokyo. Located in on of the uprising areas of Tokyo
      </Text>
      
    </View>
  );
}
