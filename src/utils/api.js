import axios from 'axios';

const newslyApi = axios.create({
    baseURL: 'https://newsly-nc.herokuapp.com/api/'
})

export const getArticles = () => {
    return newslyApi
        .get('/articles')
        .then(({data: {articles}}) => {
            return articles;
        })
}

export const getArticle = (article_id) => {
    return newslyApi
        .get(`/articles/${article_id}`)
        .then(({data: {article}}) => {
            return article;
    })
}
