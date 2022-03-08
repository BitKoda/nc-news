import axios from 'axios';

const newslyApi = axios.create({
    baseURL: 'https://newsly-nc.herokuapp.com/api/'
})

export const getArticles = () => {
    return newslyApi.get('/articles')
        .then((res) => {
            console.log(res.data.articles, "<<<<<<< from api")
            return res.data.articles;
            
        })
}