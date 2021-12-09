import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Section1 from '../../components/week4/Section1';
import Section2 from '../../components/week4/Section2';




export default function Resort() {
    return (  
        <ScrollView>      
        <View style={{ flex: 1, flexDirection: 'column' ,marginTop:25}}>
        {/* <Section1/> */}
        <Section2/>
           
        </View>
        </ScrollView>
    );
}