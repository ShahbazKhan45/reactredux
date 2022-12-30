import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addinguser} from '../state/reducer/thunkReducer'
const Userdata = () => {
    const data = useSelector((state)=>state.userdata)
    //
const dispatch = useDispatch();
    //
    let readingdata = ()=>{
        dispatch(addinguser())
    }
    return (
        <>
        {data.status}
        <hr/>
        <button onClick={readingdata}>readData</button>
        {data.dataArray.map((e)=>{
    return <div>
        {e.name}
    </div>
})}
        </>
    );
}

export default Userdata;
