
import { useState } from 'react';
import './App.css';
function App () {
    var [Dob,setDob] = useState('');
    var [currentdate,setcurrentdate] = useState('');
    var [AgeData,setAgeData] = useState('');

    const AgeCal = ()=>{
        var DobDate = new Date(Dob);
        var todayDate = new Date(currentdate);
        const MiliSec = todayDate - DobDate;
        const Sec = MiliSec / 1000;
        const Min = Sec / 60;
        const Hours = Min / 60;
        const Days = Hours / 24;
        const Week = Math.floor(Days / 7);
        const Month  = (todayDate.getMonth() - DobDate.getMonth()) + (12 * (todayDate.getFullYear() - DobDate.getFullYear()));
        const Years = Math.floor(Month /12);

        setAgeData({Years,Month,Week,Days,Hours,Min,Sec,MiliSec});
    }
 
  return (
    <div className='flex'>
      <div className='main' >
      
        <div className='Row'>
          <span>Enter DOB :</span>
          <input type='date' min='2000-01-01' max='2005-12-31' onChange={(e)=>{setDob(e.target.value)}} />
        </div>
        <div className='Row'>
          <span>Enter Today :</span>
          <input type='date' onChange={(e)=>{setcurrentdate(e.target.value)}} />
        </div>
        <button className='AgeBtn' onClick={()=>{AgeCal()}}>Click To Get Age</button>
      </div>
      <table className="main2" >
      
        <tbody>
            <tr>
                <td>Years :{AgeData.Years}</td>             
            </tr>
            <tr>
                <td>Month :{AgeData.Month}</td>                
            </tr>
            <tr>
                <td>Weeks :{AgeData.Week}</td>
            </tr>
            <tr>
                <td>Days :{AgeData.Days}</td>
            </tr>
            <tr>
                <td>Hours :{AgeData.Hours}</td>
            </tr>
            <tr>
                <td>Minutes :{AgeData.Min}</td>
            </tr>
            <tr>
                <td>Seconds :{AgeData.Sec}</td>
               
            </tr>
        </tbody>
        
      </table>
    </div>
  )
}
export default App
