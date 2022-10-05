import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
    const {onToggleTheme} = useContext(ThemeContext)

    return(
        <React.Fragment>
            <h1>{props.title}</h1>
            <Button onClick={onToggleTheme}>Mudar Tema</Button>
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
