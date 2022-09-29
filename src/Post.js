import React from "react";
import PropTypes from 'prop-types';


// Props -> Propriedades 
export default function Post(props) {
   
    return (
    <React.Fragment>
         <article>
            <strong>
                {props.post.read && <s>{props.post.title}</s>}
                {!props.post.read && props.post.title}
            </strong>
            <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
            <br />
            <small>{props.post.subtitle}</small>
            <br />
            Likes: {props.post.likes / 2}
        </article>
        <br />
    </React.Fragment>
    )
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
}