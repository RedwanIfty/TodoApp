import React, { useState } from "react";
import App from "../App";
const TodoList=()=>{
    const [activity,setActivity]=useState("");
    const [listData,setListData]=useState([]);

    const addActivity=()=>{
        // setListData([...listData,activity])
        // console.log(listData)
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            setActivity('')
            return updatedList
        })
    }
    const removeActivity=(i)=>{
        console.log(i)
        const updatedListdata= listData.filter((elem,id)=>{
            return i!=id;

        })
        setListData(updatedListdata);
    }
    const removeAll=()=>{
        setListData([]);
    }
    return(
        <>
        <div className="container">
            <div className="header">TODO LIST</div>
            <input type="text" placeholder="Add activity" value={activity}
            onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p className="List-heading">Here is the List</p>
            {
                listData!=[] && listData.map((data,i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className="listData">{data}</div>
                            <div className="btn-position">
                                <button onClick={()=>removeActivity(i)}>Remove</button>
                            </div>
                        </p>
                        </>
                    )
                })
            }
            <div>
                
                    {
                     listData.length>=1 && <button onClick={removeAll}>Remove All</button>
                    }
                
            </div>
        </div>
        </>
    )
}
export default TodoList;