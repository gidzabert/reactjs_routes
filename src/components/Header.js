import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export function Header ({ title, btnTitle, onShowTaskAddForm }) {

    return (
        <header className="header">
            <h2>{ title }</h2>
            <Button 
                title={btnTitle ? 'Close' : 'Add'} 
                color={btnTitle ? 'red' : 'steelblue'} 
                onClick={onShowTaskAddForm} className="btn" />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo App',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;