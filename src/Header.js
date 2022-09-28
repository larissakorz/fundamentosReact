import React from "react";
import PropTypes from 'prop-types';

export default function Header(props) {
    return(
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.children}
        </React.Fragment>
    )
}

Header.prototype = {
    title: PropTypes.string,
    subtitle: PropTypes.node,
};

Header.defaultProps = {
    title: `JStack's Blog`
}
