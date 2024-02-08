import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/oswaldo-oliveira.png',
      name: 'Oswaldo Oliveira',
      role: 'FullStack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'oswaldo.developer/doctorcare' },
    ],
    publishedAt: new Date('2024-02-07 11:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'oswaldo.developer/doctorcare' },
    ],
    publishedAt: new Date('2024-02-04 16:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
