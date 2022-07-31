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

    return (
        <div className={style.affair_container}>
            <span>{props.affair.name} </span>
            <span>[{props.affair.priority}] </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
