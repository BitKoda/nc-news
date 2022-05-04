# Newsfly: The Northcoders News App

This is a news app inspired by reddit, created with React.js, and [hosted on Netlify](https://newsfly.netlify.app/).

This project forms one half of the Northcoders individual project - a news app, similar to reddit. The other half of this project is the backend API, the repository for which can be found [here on Github](https://github.com/BitKoda/newsfly-backend).

## Table of contents

- [General-Information <a name="general-information"></a>](#general-information-)
- [Technologies <a name="technologies"></a>](#technologies-)
- [Setup <a name="setup"></a>](#setup-)
  - [Cloning & Dependencies <a name="cloning-dependencies"></a>](#cloning--dependencies-)
  - [Available Scripts <a name="available-scripts"></a>](#available-scripts-)
- [Link To Hosted Application on Netlify <a name="hosted-app"></a>](#hosted-app-)

## General-Information <a name="general-information"></a>

The Newsfly frontend app was the second individual project undertaken as part of the [Northcoders Bootcamp](https://northcoders.com/) and is coupled with the first individual project - a node/express backend API. 

This app has been designed to allow a visitor to view news articles by going to either https://newsfly.netlify.app/ (or https://newsfly.netlify.app/articles). A filter is available to list articles by topic - for example 'cooking'. Sorting lists of articles can be done by date, the number of votes, and title.

Viewing an individual article allows the user to read, and subsequently vote and comment on that article, as well as view all other comments on that article.

## Technologies <a name="technologies"></a>

This app requires React version 17, and axios:

```
- Axios: 0.26
- React: 17.0.2
```

## Setup <a name="setup"></a>

Before running any of the commands in the sections below, first change into your preferred working directory, for example: 

```bash
cd Code/projects/
```

### Cloning & Dependencies <a name="cloning-dependencies"></a>

Clone this repository:

```bash
git clone git@github.com:BitKoda/newsfly-frontend.git
```

or 

```bash
git clone https://github.com/BitKoda/newsfly-frontend.git
```

Then install Axios, React (version >= 17), and other dependencies:

```bash
npm install
```

<br>

Dependencies required to develop this app:

```
- axios: 0.26,
- react: 17,
- react-dom: 17,
- react-icons: 4.3.1,
- react-router-dom: 6.2.2
```

### Available Scripts <a name="available-scripts"></a>

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode, and makes the site available at [http://localhost:3000](http://localhost:3000) in your browser. The page will reload when changes are made. Lint errors will be printed in the console.

#### `npm run build`

Builds the app for production to the `build` folder.

### Hosted App <a name="hosted-app"></a>
A hosted version of this app, can be found on Netlify at this url: https://newsfly.netlify.app
