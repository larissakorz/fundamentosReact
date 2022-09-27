import React from "react"


// Props -> Propriedades 
export default function Post(props) {
    console.log(props);
    return (
    <React.Fragment>
        <article>
            <strong>Título da notícia</strong><br />
            <small>Subtítulo da notícia</small>
        </article>
        <br />
    </React.Fragment>
    )
}