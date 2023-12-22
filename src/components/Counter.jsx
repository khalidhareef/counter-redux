import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";



function Counter() {
    const [range, setRange] = useState('')
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value)
    console.log("===Range==",range);
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center w-100 flex-column">
                <h1 style={{ fontSize: "80px" }}>{count}</h1>
                <div className="mt-5">
                    <button className="btn btn-danger" onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
                    <button className="btn btn-success ms-3" onClick={() => dispatch(increment(Number(range)))}>Increment</button>
                    <button className="btn btn-primary ms-3" style={{ width: "100px" }} onClick={() => dispatch(reset(Number(range)))}>Reset</button>
                </div>
            </div>
            <div className="mt-3 w-100">
                <input type="text" placeholder="Enter the range" className="form-control border border-primary" onChange={(e) => setRange(e.target.value)} />
            </div>
        </div>
    )
}

export default Counter