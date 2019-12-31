import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}> 
        <Ionicons style={styles.iconStyle} name="ios-search" />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit(term)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 20,
        marginTop:15,
        borderRadius:10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 0,
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 8,
    }


});

export default SearchBar;