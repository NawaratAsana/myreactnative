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


export default function Challenge1() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
          marginLeft:5,
          marginRight:10
        }}
      >
        <FontAwesome name="arrow-left" size={20} color="#FF6347" />
        <Text style={{ fontSize: 20 }}>Reviews</Text>
        <Text style={{ fontSize: 20, color: "#FF6347" }}>Replay</Text>
      </View>
    </View>
  );
}
