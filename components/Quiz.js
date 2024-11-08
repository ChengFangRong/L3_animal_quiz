import React, {useState} from 'react';
import { StyleSheet,TextInput, Text, View, Image } from 'react-native';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const Quiz = ({picture, label1, label2, label3, ans}) => {

    const [type, setType] = useState('');



    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Text></Text>
            <Text>Question 1:</Text>
            <Image source={picture} style={{width:400, height:500}}></Image>
            <Text>What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setType(value)}
                items={[
                    {label: {label1}, value: {label1}},
                    {label: {label2}, value: {label2}},
                    {label: {label3}, value: {label3}},
                ]}
            />

        </View>
    );
};

export default Quiz;
