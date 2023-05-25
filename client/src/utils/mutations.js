import {gql} from "@apollo/client";
import { gql } from 'apollo-boost';

export const mutations = {
  LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        id
        email
        token
      }
    }
  `,

  ADD_USER: gql`
    mutation AddUser($name: String!, $email: String!, $password: String!) {
      addUser(name: $name, email: $email, password: $password) {
        id
        name
        email
      }
    }
  `,

  ADD_BOOK: gql`
    mutation AddBook($title: String!, $author: String!, $genre: String!) {
      addBook(title: $title, author: $author, genre: $genre) {
        id
        title
        author
        genre
      }
    }
  `,

  UPDATE_BOOK: gql`
    mutation UpdateBook($id: ID!, $title: String, $author: String, $genre: String) {
      updateBook(id: $id, title: $title, author: $author, genre: $genre) {
        id
        title
        author
        genre
      }
    }
  `,

  DELETE_BOOK: gql`
    mutation DeleteBook($id: ID!) {
      deleteBook(id: $id) {
        id
      }
    }
  `
};
