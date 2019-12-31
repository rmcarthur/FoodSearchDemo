import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
        try {
            console.log("Called yelp API")
            const response = await yelp.get('/search',
                {
                    params: {
                        limit: 50,
                        term: searchTerm,
                        location: 'san jose'
                    }
                } 
            );
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err);
            setErrorMessage('Invalid Request')

        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [searchApi, results, errorMessage]

};