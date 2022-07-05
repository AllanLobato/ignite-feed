import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

// author: { avatar_url:"", name: "", role:""}
//publisedhAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/allanlobato.png",
      name: 'Allan Lobato',
      role: 'CTO @ Rockeatseat'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date("2022-05-11 08:13:30") ,
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/elvisjulius.png",
      name: 'Elvis Julius',
      role: 'CTO @ Cora'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date("2022-06-27 08:13:30") ,
  },
];

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            author= {post.author}
            content= {post.content}
            publishedAt= {post.publishedAt}
          />
        )
      })}
      </main>
      </div>
    </div>
  );
}

export default App;
