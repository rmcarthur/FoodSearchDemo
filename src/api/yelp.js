import axios from 'axios'

export default axios.create({
   baseURL:'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer TYteA15GHgpPMWOarm7P2YlNtb7iQuMOPRUTDPk4FBxQTk5zGy4RTFc6ZRpevXv1X_6vVqR5cPLS7-SKFBgdeS2w5wvqzaw574J3fLOH3J0N7Z3Ps6ORnlDnq20KXnYx'
   }
})