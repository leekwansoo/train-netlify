import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom'
import Main from './Main'
import UploadData from './UploadData.js'
import Login from './Login'
import NavHead from './NavHead'

function App() {
     
return (
  <>
    <div>  
      <NavHead />      
    </div>
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="main" element={<Main />} />
      <Route path="dataupload" element={<UploadData />} />  
      <Route path="*" element={<div>"404":없는페이지입니다 </div>} />
    </Routes>
    </div> 
 
  </>
  )  
}

export default App;
