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

export default function Section3() {
  return (
    <View style={{ margin: 20 ,borderWidth : 1,
        borderBottomColor: "#A9A9A9",
        borderColor:'white',
        paddingBottom:10 }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            backgroundColor: "#EF664B",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "#EF664B" }}>Excellent</Text>
          <Text style={{ color: "black" }}>See 801 reviews</Text>
        </View>
      </View>
     
    </View>
  );
}
