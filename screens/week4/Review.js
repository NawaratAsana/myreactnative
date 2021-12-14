import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Challenge1 from '../../components/week4/Challenge1';
import Challenge2 from '../../components/week4/Challenge2';
import Challenge3 from '../../components/week4/Challenge3';
import Challenge4 from '../../components/week4/Challenge4';



export default function Review() {
    return (  
        <ScrollView>      
        <View style={{ flex: 1, flexDirection: 'column' ,marginTop:25}}>
  
           <Challenge1/>
           <Challenge2/>
           <Challenge3/>
           <Challenge4/>
        </View>
        </ScrollView>
    );
}