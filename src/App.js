import React from "react";

import Post from './Post'

// React.creatElement(’h1’, null, ‘Componente App’)

// Render --> Renderizar
function App() {
    return (
      <React.Fragment>
        <h1>JStack's Blog!</h1>
        <h2>Posts da semana</h2>

        <hr />

        <Post title='titulo da noticia 01'/>
        <Post />
        <Post />

      </React.Fragment>
    );
}

export default App;