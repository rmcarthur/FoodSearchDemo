import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
    const [singleResult, setSingleResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const id = navigation.getParam('id')

    console.log(singleResult)

    const getResult = async id => {
        try {
            console.log("Called yelp API for single Result")
            console.log(`/businesses/${id}`)
            const response = await yelp.get(`/${id}`)
            setSingleResult(response.data)
        } catch (err) {
            console.log(err);
            setErrorMessage('Invalid Request')
        }
    };

    useEffect(() => {
       getResult(id) 
    }, []);

    if (!singleResult) {
        return null;
    }

    return (
        <View>
            <Text>{singleResult.name}</Text>
            <FlatList
            data={singleResult.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.photoStyle} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    photoStyle: {
        height: 250,
        width: 250
    }

});

export default ResultsShowScreen