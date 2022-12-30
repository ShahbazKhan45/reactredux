import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
//
import {increment,decrement,changeAmount,reset,adduser} from '../state/reducer/counterReducer'

const Count = () => {
    const {count,userdata} = useSelector((state)=>state.counter)
    // const userdata = useSelector((state)=>state.counter.userdata)
    const dispatch = useDispatch();
    //
    const [val,setval] = useState(0)
    const [username,setusername] = useState("")
    const data2 = Number(val) || 5
    return (
        <>
        count: {count}
        <br/>
        userdata: {userdata.map((item)=><li>{item}</li>)}
        <hr />
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>deccrement</button>
        <button onClick={()=>{dispatch(changeAmount(data2))}}>addup</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>
        <hr />
        <button onClick={()=>{dispatch(adduser(username))}}>addUser</button>
        <hr />
        <input type="text" value={val}  onChange={(e)=>{setval(e.target.value)}}/>
        <br />
        <input type="user_name" value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
        </>
    );
}

export default Count;
