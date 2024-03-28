import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "../redux/slices/counterSlice";
import { Button } from "react-bootstrap";

const Counter = () => {
  const state = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2">
      <Button variant="success" onClick={() => dispatch(increase())}>
        Increase
      </Button>
      <p className="fw-bold fs-1 px-4">{state.count}</p>
      <Button variant="warning" onClick={() => dispatch(decrease())}>
        Decrease
      </Button>
      <Button variant="danger" onClick={() => dispatch(reset(0))}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
