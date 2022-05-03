import axios from "axios";

const ncdcApi = axios.create({
  baseURL: "https://newsfly-backend.herokuapp.com/api",
});

export const getArticles = (query) => {
  if (Object.keys(query).length === 0) {
    return ncdcApi.get("/articles").then(({ data: { articles } }) => {
      return articles;
    });
  } else {
    return ncdcApi
      .get("/articles", {
        params: {
          ...(query.topic !== "" ? { topic: query.topic } : {}),
          ...(query.sort_by !== "" ? { sort_by: query.sort_by } : {}),
          ...(query.order !== "" ? { order: query.order } : { order: "DESC" }),
        },
      })
      .then(({ data: { articles } }) => {
        return articles;
      });
  }
};

export const getUsers = () => {
  return ncdcApi.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const getArticle = (article_id) => {
  return ncdcApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchArticle = (article_id, vote) => {
  return ncdcApi
    .patch(`/articles/${article_id}`, {
      inc_votes: vote,
    })
    .then(function (response) {
      console.log(response.data);
    });
};

export const getTopics = () => {
  return ncdcApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const postComment = ({ article_id, author, body }) => {
  return ncdcApi
    .post(`/articles/${article_id}/comments`, {
      article_id: article_id,
      author: author,
      body: body,
    })
    .then(function (response) {
      return response;
    });
};

export const getArticleComments = (article_id) => {
  return ncdcApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const deleteComment = (comment_id) => {
  return ncdcApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
