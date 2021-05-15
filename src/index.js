import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import purple from '@material-ui/core/colors/purple';

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  const calculate=()=>{
    //A=P(1+(R/N)^(NT))
    const result = principal* Math.pow(1+ interest,years);
    setResult(result.toFixed(2));
  }

  return(
    <>
    <div
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"40vh",
    }}
    >
      <form>
 
        <TextField label="Principal" 
        variant="outlined"
        type="number"
        onChange ={(e) => setPrincipal(e.target.value)}  //whatever we tpe inside the textfield it sets into variable
       />

        <TextField label="Number of years" 
        variant="outlined"
        type="number"
        onChange ={(e) => setYears(e.target.value)} 
        />

        <TextField label="Annual interest rate" 
        variant="outlined" 
        type="number"
        onChange ={(e) => setInterest(e.target.value/100)}/>
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick={()=> {
          calculate()
        }}>Calculate
        </Button>
        <br/><br/> 
        <div style={{fontSize:'20px'}}>Compound Interest: {result}</div>
     </form>

    </div>
    </>
  )
}

render(<CompoundInterest />, document.querySelector("#root"));

