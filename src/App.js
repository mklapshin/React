import { Grid, makeStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import { useState, memo } from "react"
import { MessageList, ChatList } from "./components"
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      background: theme.light.color,
    },
  }
})

export const App = () => {
  const classes = useStyles()

  const [list, setList] = useState([
    { user: "Chat 1", id: uuidv4() },
    { user: "Chat 2", id: uuidv4() },
    { user: "Chat 3", id: uuidv4() },
  ])

  const sortA = () => {
    setList((state) => [...state].sort((a, b) => a.user.length - b.user.length))
  }

  const sortB = () => {
    setList((state) => [...state].sort((a, b) => b.user.length - a.user.length))
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={6}>
            <ChatList />
          </Grid>
          <Grid item={true} xs={6}>
            <MessageList />
          </Grid>
        </Grid>
      </div>

      <button onClick={sortA}>sort a</button>
      <button onClick={sortB}>sort b</button>

      {list.map((user) => (
        <User key={user.id} user={user} />
      ))}



    </>
  )
}

const User = memo(({ user }) => {
  console.log(":render")
  return <h2 style={{ display: "block" }}>{user.user}</h2>
})

App.propTypes = {
  count: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}
