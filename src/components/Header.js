import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export function Header ({ title, btnTitle, onShowTaskAddForm }) {

    return (
        <header class="flex header mb-20">
            <div class="p-20"><h1>Flex Box Heading</h1></div>
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