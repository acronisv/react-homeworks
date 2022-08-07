import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
        return
    }

    const priorityClass = (props.affair.priority==='high') ? style.priority_green : (props.affair.priority==='middle') ? style.priority_orange : style.priority_red

    return (
        <div className={style.affair_container}>
            <span>{props.affair.name} </span>
            <span className={priorityClass}>[{props.affair.priority}] </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
