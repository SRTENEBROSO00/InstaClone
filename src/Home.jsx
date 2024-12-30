import Header from './components/header/Header'
import Post from './components/post/Post'
import Status from './components/status/Status'

import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Status />
      {/* render post */}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
