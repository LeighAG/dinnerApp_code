import React,  { useState, useContext, useEffect} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import Axios from 'axios';
import UserContext from "../../context/UserContext";

export default function StartBox(props){
  const { userData } = useContext(UserContext);
  const id = userData.user.id
const[error, setError] = useState("");
  const [selectedDay1, setSelectedDay1] = useState("");
  const [selectedDay2, setSelectedDay2] = useState("");
  const[noDatesSelected, setNoDatesSelected] = useState(false);

console.log(selectedDay1, selectedDay2)
const{day, month, year} = selectedDay1

let maxDay = {
  day: day+6,
  month: month,
  year: year,

};



const checkDates= async()=>{
  try{
  let dates = `${selectedDay1.month}-${selectedDay1.day}-${selectedDay1.year}-${selectedDay2.month}-${selectedDay2.day}-${selectedDay2.year}`
let checks = {dates, id}
 const search = await Axios.post("/dinners/dateCheck", checks);
props.createIt(selectedDay1, selectedDay2)
} catch (err) {console.log(err.response.data.msg)
  err.response.data.msg && setError(err.response.data.msg);
}
 
}
console.log(error)
function addWeek(){
  if(selectedDay1 && selectedDay2){
    setNoDatesSelected(false);
    checkDates();
  
  }
  else{
  setNoDatesSelected(true);
}
};

  return (
    <>
    <div className="createDatesContainer">
    <div className="createTitle">
    <h1 >Ready to make dinner a plan?</h1>
    <h2>Choose up to a full week.</h2>
    
    </div>
    
    <div className="borderCalendar">
  
  <div className="create">
 
      <h1>Choose date range</h1>
      {noDatesSelected? <h3 className="dateMissing">Please enter your dates</h3>:null}
  {error ? <h4 className="dateChoiceError">{error}</h4>:null}
      <DatePicker 
           value={selectedDay1}
      onChange={setSelectedDay1}
      inputPlaceholder="Select the start day"
      calendarClassName="responsive-calendar"
      
      />
      <DatePicker 
           value={selectedDay2}
           minimumDate = {selectedDay1}
           maximumDate = {maxDay}
           
      onChange={setSelectedDay2}
      inputPlaceholder="Select the end day"
      calendarClassName="responsive-calendar"
      />
  <div className="addDate">
<button  onClick={addWeek}>Click to Create New Plan</button>

</div>

</div>
</div>
</div>
</>
)
};

