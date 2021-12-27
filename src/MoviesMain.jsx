import React,{useEffect, useState} from "react"
import {Card,Button} from "react-bootstrap"
import axios from "axios"
import { useDispatch } from "react-redux"

export const MoviesMain =()=>{
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const getApi= async()=>{
        const result= await axios.get("http://localhost:4040/movies")
        console.log(result.data.data)
        setData(result.data.data)
    }
    useEffect(()=>{
        getApi()
    },[])
    return(
        <div>
            <h1>Moviesmain</h1>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {data.map((item)=>{
                return(
                    <React.Fragment>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="350px" width="250px" src={item.image} />
  <Card.Body>
    <Card.Title>{item.Name}</Card.Title>
    <Card.Text>
     {item.Rating}
    </Card.Text>
    <Card.Text>
     {item.Release}
    </Card.Text>
    <Button variant="primary" onClick={()=>dispatch({type:"WATCHLIST",data:[item]})}>Watch List</Button>
  </Card.Body>
</Card>
                    </React.Fragment>
                )
            })}
        </div>
        </div>
    )
}