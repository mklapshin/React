import styles from "./message.module.css"

export function Message({ author, message }) {
  return (
    <div>
      <h3>{message}</h3>
      <p>{author}</p>
      <p>12.03</p>
    </div>
  )
}
