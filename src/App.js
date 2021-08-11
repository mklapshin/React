import "./styles.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/counter";
import { toggleNameVisible } from "./store/profile";

function AppWitHooks() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count hook = {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

function Header() {
  const { firstName } = useSelector((state) => state.profile.user);
  const nameVisible = useSelector((state) => state.profile.nameVisible);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Profile</h1>
      <button onClick={() => dispatch(toggleNameVisible())}>toggle name</button>
      {nameVisible && <h2>name - {firstName}</h2>}
    </div>
  );
}

function App({ count, incrementProps, decrementProps }) {
  return (
    <div className="App">
      <Header />
      <hr />
      <h1>Count = {count}</h1>
      <button onClick={incrementProps}>increment</button>
      <button onClick={decrementProps}>decrement</button>

      <hr />
      <AppWitHooks />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementProps: () => dispatch(increment()),
    decrementProps: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
