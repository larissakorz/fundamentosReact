import React, { useState } from "react";

import Post from './Post'
import Header from "./Header";

// Render --> Renderizar
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50 },
  ]);

    console.log({ posts })

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(), 
          title: `Title#0${prevState.length + 1}`, 
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: 50
        },
       ]);
    }, 2000)
    
  }


    return (
      <React.Fragment>

        <Header>
          <h2>
            Post da semana
            <button onClick={handleRefresh}>Atualizar</button>
            </h2>
        </Header>

        <hr />

        {posts.map(post => (
          <Post 
            key={post.id}
            likes={post.likes}
            post={{
              title: post.title,
              subtitle: post.subtitle,
            }}
          />
        ))}

      </React.Fragment>
    );
}

export default App;