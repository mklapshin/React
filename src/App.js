import { Grid, makeStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import { useState, memo } from "react"
import { MessageList, ChatList } from "./components"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Chat1 from "./components/chat1/index";
import Chat2 from "./components/chat2/index";
import Chat3 from "./components/chat3/index";
import Messages from "./components/messages/index";


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
    { user: "ad", id: uuidv4() },
    { user: "c", id: uuidv4() },
    { user: "bdd", id: uuidv4() },
  ])

  const sortA = () => {
    setList((state) => [...state].sort((a, b) => a.user.length - b.user.length))
  }

  const sortB = () => {
    setList((state) => [...state].sort((a, b) => b.user.length - a.user.length))
  }

  return (
    <BrowserRouter>
   
    {  }
<ul>
<NavLink to ="/">Main {" "}</NavLink>
  <NavLink to ="/chat1">Chat 1 {" "}</NavLink>
  <NavLink to ="/chat2">Chat 2 {" "}</NavLink>
  <NavLink to ="/chat3">Chat 3 {" "}</NavLink>
  <NavLink to="/messages">Profile</NavLink>
</ul>

    <Switch>
    <Route exact path="/" render={() => <>

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
    
    
    
    
    }/>
    <Route path="/chat1" render={() => <Chat1 />}/>
    <Route path="/chat2" render={() => <Chat2 />}/>
    <Route path="/chat3" render={() => <Chat3 />}/>
    <Route path="/messages" render={() => <Messages />}/>
    <Route path="*" render={() => <div>Not Found</div>}/>
    </Switch>
    </BrowserRouter>
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
