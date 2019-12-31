import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'


const ResultsDetail = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imageStyle} 
                source={{ uri: item.image_url }} />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Reviews: {item.review_count}</Text>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        container: {
            margin:15,

        },
        imageStyle: {
            width: 250,
            height: 120,
            borderRadius: 10,
            marginBottom: 5,
        },
        nameStyle: {
            fontWeight: 'bold',
            fontSize: 17,
        },
        subnameStyle: {
            opacity: .5,


        },  


    });

export default ResultsDetail