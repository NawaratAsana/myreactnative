import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";
export default function Section6() {
  return (
    <View
      style={{
        flex: 1
       
      }}
    >
      <View style={{ padding: 20, marginTop: -30 }}>
        <Text style={{ fontSize: 20 }}>Location</Text>
        <Text>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
          incididunt ut labore et…
        </Text>

        <View style={{ flexDirection: "row" ,marginTop:10, borderWidth: 1,
        borderBottomColor: "#A9A9A9",
        borderColor: "white",
        paddingBottom: 5}}>
          <Image
            style={{ flex: 1, resizeMode: "cover", aspectRatio: 5/2 }}
            source={require("../../assets/week3/map.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
