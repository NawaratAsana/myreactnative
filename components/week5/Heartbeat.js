import React, { useState } from "react";
import { TouchableOpacity, View ,Text} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() { 
    const [total, setTotal] = useState("0");  
    console.log("Count:", total); 
    const onPressButton = () => {  
        let output = Number(total)+1;
        setTotal(output);
      };
    return (
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-around' , marginVertical:20}}>
                <TouchableOpacity onPress={onPressButton}>
                 <FontAwesome name="heart" size={50} color="orange" />
                </TouchableOpacity>
                <Text style={{fontSize:45}}>{total}</Text>
            </View>
        </View>
    );
}
