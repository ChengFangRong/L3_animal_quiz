
import { StyleSheet,TextInput, Text, View, Image, Button } from 'react-native';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import {Alert} from 'react-native';

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    )
}

const MyApp = () => {

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');

    const submit = () => {
        let totalCorrect = 0
        if (first === 'owl') {
            totalCorrect += 1
        }
        if (second === 'elephant') {
            totalCorrect += 1
        }
        if (third === 'giraffe') {
            totalCorrect += 1
        }


        if (totalCorrect === 3) {
            Alert.alert("Well done! 3/3 correct")
        }
        if (totalCorrect === 2) {
            Alert.alert("Nice try, 2/3 correct")
        }
        if (totalCorrect === 1) {
            Alert.alert("Try again, 1/3 correct")
        } else {
            Alert.alert("0/3 correct :C")
        }
    }


    return (

        <View style={{alignItems: 'center'}}>
            <Text></Text>
            <Text></Text>
            <Text style={{fontSize: 35, fontWeight: "bold", alignContent: 'center'}}>
                <Icon name="paw" size={30} color="#B23B23" />
                ANIMAL QUIZ
                <Icon name="paw" size={30} color="#B23B23" />
            </Text>

            <ScrollView>
                <Text></Text>

                <Text></Text>
                <Text>Question 1:</Text>
                <Image source={require('./img/owl.jpg')} style={{width:400, height:500}}></Image>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setFirst(value)}
                    items={[
                        {label: 'owl', value: 'owl'},
                        {label: 'penguin', value: 'penguin'},
                        {label: 'hummingbird', value: 'hummingbird'},
                    ]}
                />


                <Text></Text>
                <Text>Question 2:</Text>
                <Image source={require('./img/elephant.jpg')} style={{width:400, height:500}}></Image>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setSecond(value)}
                    items={[
                        {label: 'zebra', value: 'zebra'},
                        {label: 'elephant', value: 'elephant'},
                        {label: 'leopard', value: 'leopard'},
                    ]}
                />


                <Text></Text>
                <Text>Question 3:</Text>
                <Image source={require('./img/giraffe.jpg')} style={{width:400, height:500}}></Image>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setThird(value)}
                    items={[
                        {label: 'tiger', value: 'tiger'},
                        {label: 'rabbit', value: 'rabbit'},
                        {label: 'giraffe', value: 'giraffe'},
                    ]}
                />

                <Button title="Submit" onPress={submit}/>
            </ScrollView>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </View>
    )
}















export default MyApp;
