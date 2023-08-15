import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios"


const UploadData = () => {

    const navigate = useNavigate();

    const [pushup, setPushup] = useState("");
    const [stomach, setStomach] = useState("");
    const [squat, setSquat] = useState("");
    const [arm, setArm] = useState("");
    const [uplift, setUplift] = useState("");
    const [upheel, setUpheel] = useState("");
    const [kick_on_chair, setKick_on_chair] = useState("");
    const [spreading_thigh, setSpreading_thigh] = useState("");
    const [date, setDate] = useState(new Date());
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        var _data = {
            pushup: pushup, 
            stomach: stomach,
            squat: squat,
            arm: arm,
            uplift: uplift,
            upheel: upheel,
            kick_on_chair: kick_on_chair,
            spreading_thigh: spreading_thigh,
            date: date
           } 
          console.log(_data)
       
        const URI = "vermillion-seahorse-8d3699.netlify.app/.netlify/functions/addTrain";

        axios({
            method: "POST",
            url: URI,
            data: _data,
            headers: {"Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"},
        }).then((response) => {
            if(response?.status === 200)
            navigate('/main')
            console.log(response)
        }).catch(error => console.log(Error))
    };

return (

<div className="container">
    <form onSubmit = {submitHandler}>
        <table className="table table-bordered table-striped table-hover table-condensed  text-center"
            id="InputTable" name="InputTable">
            <tbody>
                <tr>
                    <td>Date<input type="date"  value = {date} onChange = { (e) => {setDate(e.target.value)}} /></td>
                    <td>푸시엎<input type="number"  value = {pushup} onChange = { (e) => {setPushup(e.target.value)}} /></td>
                    <td>배운동<input type="number"  value = {stomach} onChange ={(e) => {setStomach(e.target.value)}} /></td>
                    <td>벽스퀏<input type="number"  value = {squat} onChange = {(e) => {setSquat(e.target.value)}} /></td>
                    <td>팔운동<input type="number"  value = {arm} onChange = {(e) => {setArm(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td>상체들기<input type="number"  value = {uplift} onChange = {(e) => {setUplift(e.target.value)}} /></td>
                    <td>뒷꿈치들기<input type="number"  value = {upheel} onChange = {(e) => {setUpheel(e.target.value)}} /></td>
                    <td>의자발차기<input type="number"  value = {kick_on_chair} onChange = {(e) =>{setKick_on_chair(e.target.value)}} /></td>
                    <td>무릎벌리기<input type="number"  value = {spreading_thigh} onChange = {(e) =>{setSpreading_thigh(e.target.value)}} /></td>         
                </tr>    
            </tbody>
        </table>
        <button type="submit" className="btn btn-danger">Submit</button>   
    </form>
   
</div>

)
};

export default UploadData;
