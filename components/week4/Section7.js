import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";
export default function Section7() {
  return (
    <View
      style={{
        margin: 20,
        marginTop:-10,
        borderWidth: 1,
        borderBottomColor: "#A9A9A9",
        borderColor: "white",
        paddingBottom: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>Room Type</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{}}>
          <Image
            style={{
              width: 110,
              height: 120,
              resizeMode: "stretch",
              borderRadius: 80,
              marginTop:5
            }}
            source={require("../../assets/week3/room-8.jpg")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>
            Standard Twin Room
          </Text>
          <Text style={{ fontSize: 20, color: "#EF664B", marginLeft: 10 ,marginTop:50}}>
            $399.99
          </Text>
          <Text style={{ color: "#20B2AA",marginLeft: 10, }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
}
