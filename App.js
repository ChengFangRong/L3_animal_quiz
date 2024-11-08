
import { StyleSheet,TextInput, Text, View, Image, Button } from 'react-native';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import {Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',

    },
});

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

    // const submit = () => {
    //     let totalCorrect = 0
    //     if (first === 'owl') {
    //         totalCorrect += 1
    //     }
    //     if (second === 'elephant') {
    //         totalCorrect += 1
    //     }
    //     if (third === 'giraffe') {
    //         totalCorrect += 1
    //     }
    //
    //
    //     if (totalCorrect === 3) {
    //         Alert.alert("Well done! 3/3 correct")
    //     }
    //     if (totalCorrect === 2) {
    //         Alert.alert("Nice try, 2/3 correct")
    //     }
    //     if (totalCorrect === 1) {
    //         Alert.alert("Try again, 1/3 correct")
    //     } else {
    //         Alert.alert("0/3 correct :C")
    //     }
    // }


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

                <View style={styles.container}>
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
                </View>

                <View style={styles.container}>
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
                </View>

                <View style={styles.container}>
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
                </View>

                <Button onPress={() => {
                    const Correct1 = 'owl';
                    const Correct2 = 'elephant';
                    const Correct3 = 'giraffe';
                    let num = 0;
                    let score = 0;
                    let message = '';

                    if (first === Correct1) {
                        score += 1;
                        num += 1;
                    }

                    if (second === Correct2) {
                        score += 1;
                        num += 1;
                    }

                    if (third === Correct3) {
                        score += 1;
                        num += 1;
                    }

                    if (score === 3) {
                        message = 'Well done! 3/3 correct :D';
                    } else if (score === 2) {
                        message = `Nice try, 2/3 correct`;
                    } else if (score === 1) {
                        message = `Try again, 1/3 correct`;
                    } else {
                        message = `0/3 correct :C`;
                    }

                    Alert.alert(message);
                }} title="Submit"/>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </ScrollView>

        </View>
    )
}















export default MyApp;
