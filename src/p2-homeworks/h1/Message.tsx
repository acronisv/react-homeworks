import React from 'react'
import styles from './Message.module.css'

type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: propsType) {
    return (
        <div className={styles.message}>
            <img className={styles.message_img} src={props.avatar} alt="avatar"></img>
            <div className={styles.message_content}>
                <div className={styles.message_block}>
                    <span className={styles.message_name}>{props.name}</span>
                    <p className={styles.message_text}>{props.message}</p>
                </div>
                <span className={styles.message_time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
