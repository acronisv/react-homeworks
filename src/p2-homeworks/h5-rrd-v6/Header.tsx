import React from 'react'
import {NavLink} from "react-router-dom";
import s from './HW5.module.css'

function Header() {
    return (
        <div>
            <nav className={s.headerNav}>
                <NavLink className={s.headerNavElement} to={'/'}>Pre junior</NavLink>
                <NavLink className={s.headerNavElement} to={'/junior'}>Junior</NavLink>
                <NavLink className={s.headerNavElement} to={'/junior+'}>Junior+</NavLink>
            </nav>
        </div>
    )
}

export default Header
