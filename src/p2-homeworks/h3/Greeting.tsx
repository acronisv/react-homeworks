import s from './Greeting.module.css'
import React, {ChangeEvent} from "react";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (event: React.KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.ok // need to fix with (?:)

    return (
        <div className={s.greeting_wrapper}>
            <div className={s.greeting_controls}>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}
                />
                <span>{error}</span>
                <button className={s.greeting_button}
                        onClick={addUser}
                        disabled={!name}>
                        Add user
                </button>
            </div>
            <span>Total users {totalUsers}</span>
        </div>
    )
}

export default Greeting
