import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Ex10() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#4A90E2" }}></View>
      <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View>
  );
}
