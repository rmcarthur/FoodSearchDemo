import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResults = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( result => {
            return result.price === price;
        });
    };

    // console.log(results);

    return (
        <View style={{ flex: 1 }}> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
            <ResultsList 
                title='Cost Effective'
                results={filterResults('$')}
            />
            <ResultsList 
                title='Bit Pricier'
                results={filterResults('$$')}
            />
            <ResultsList 
                title='Big Spender'
                results={filterResults('$$$')}
            />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});
export default SearchScreen;