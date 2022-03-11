import axios from 'axios';

const newslyApi = axios.create({
    baseURL: 'https://newsly-nc.herokuapp.com/api/'
})

export const getArticles = (topic) => {
    return newslyApi
        .get('/articles', {
        params: {
            topic
        }})
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

export const getTopics = () => {
    return newslyApi
    .get('/topics')
    .then(({data: { topics }}) => {
        return topics;
    })
}

export const postComment = (article_id, comment) => {
    return newslyApi
    .post(`/articles/${article_id}/comments`, {
        comment
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}