import style from "./styles.module.scss"

const Message = ({message, message2, message3}) => {
    return (
        <div className={style.block1}>
          <p className={style.p}>{message}</p>
          <p className={style.pp}>{message2}</p>
          <p>{message3}</p>
        </div>
    )
}

export default Message