import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './App.css'

const Main = (props) =>{
  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  const deleteHandler = (e) => {
    let id = e
    console.log(id)
    let URI = "https://vermillion-seahorse-8d3699.netlify.app/.netlify/functions/deleteTrain"

    axios({
      method: "DELETE",
      url: URI,
      data: {id},
      headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"},})
      .then((response) => {
      if(response?.status === 200)
      navigate('/main')
      console.log("deleted")
    }).catch((error) => {console.log(error)})
  };
 
  useEffect(() => {
    axios.get("https://vermillion-seahorse-8d3699.netlify.app/.netlify/functions/getTrain").then((response) => {
        setPost(response.data);
      console.log(response.data)
    }).catch((error) => {console.log(Error)})
  }, []);
  
  return (
    <>
    <div >
      <h2 align="center"> Home Training Tracker</h2>
    <table className="table table-bordered table-responsive">
      <thead>
        <tr>
            <th align="center">Date</th>
            <th align="center">푸쉬업</th>
            <th align="center">배운동</th>
            <th align="center">벽스퀏</th>
            <th align="center">팔운동</th>
            <th align="center">상체들기</th>
            <th align="center">뒤꿈치들기</th>
            <th align="center">의자발차기</th>
            <th align="center">무릎벌리기</th>
            <th align="center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {post.map((post) => {
          return (
          <tr key={post._id}>                 
            <td align="center">{post.date}</td>
            <td align="center">{post.pushup}</td>
            <td align="center">{post.stomach}</td>
            <td align="center">{post.squat}</td>
            <td align="center">{post.arm}</td>
            <td align="center">{post.uplift}</td>
            <td align="center">{post.upheel}</td>
            <td align="center">{post.kick_on_chair}</td>
            <td align="center">{post._id}</td>
            <td align="center"><button id = {post._id} onClick={(e)=>{deleteHandler(post._id)}}>DEL</button></td>
        </tr>
          )
          } )
        }
        </tbody>
      </table>
    </div>
    </>
     );
    }
export default Main;