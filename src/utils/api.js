import axios from 'axios';

const ncdcApi = axios.create({
    baseURL: 'https://newsly-nc.herokuapp.com/api/'
})

export const getArticles = (topic) => {
    return ncdcApi
        .get('/articles', {
        params: {
            topic
        }})
        .then(({data: {articles}}) => {
            return articles;
        })
}

export const getArticle = (article_id) => {
    return ncdcApi
        .get(`/articles/${article_id}`)
        .then(({data: {article}}) => {
            return article;
    })
}

export const getTopics = () => {
    return ncdcApi
    .get('/topics')
    .then(({data: { topics }}) => {
        return topics;
    })
}

export const postComment = ({article_id, author, body}) => {
    return ncdcApi
    .post(`/articles/${article_id}/comments`, {
        article_id: article_id,
        author: author,
        body: body 
      })
      .then(function (response) {
        return response;
      })
}

export const getArticleComments = (article_id) => {
    return ncdcApi
    .get(`/articles/${article_id}/comments`)
    .then(({data: { comments }}) => {
        return comments;
    })
}

export const deleteComment = (comment_id) => {
    return ncdcApi
    .delete(`/comments/${comment_id}`)
    .then((res) => {
        return res;
    })
}