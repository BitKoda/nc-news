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

// export const deleteArticle = (article_id) => {
//     return newslyApi.delete(`/articles/${article_id}`).then(() => {
//         return [];
//     })
// }

// export const addArticle = (form) => {
//     return newslyApi
//     .post("/articles", form)
//     .then((res) => {
//         return res.data.article.article_id;
//     })
// }

// export const getTopics = () => {
//     return newslyApi.get("/topics").then((res) => {
//         return res.data.topics;
//     })
// }

// export const addTopic = (form) => {
//     return newslyApi
//     .post("/topics", form)
// }