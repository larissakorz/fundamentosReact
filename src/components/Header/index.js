import React, {useContext} from "react";
import PropTypes from 'prop-types';

import Button from "../Button";
import Title from '../Title'

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const {onToggleTheme} = useContext(ThemeContext)

  return(
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  )
}

Header.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`
}
