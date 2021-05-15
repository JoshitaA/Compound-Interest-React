import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  //simple interest
  const [principal2, setPrincipal2] = useState();
  const [years2, setYears2] = useState();
  const [interest2, setInterest2] = useState();
  const [result2, setResult2] = useState();
//si
  const calculate2=()=>{
    //A=P(1+(RN))
    const result2 = principal2*(1+ interest2*years2);
    setResult2(result2.toFixed(2));
  }
//ci
  const calculate=()=>{
    //A=P(1+(R/N)^(NT))
    const result = principal* Math.pow(1+ interest,years);
    setResult(result.toFixed(2));
  }

  return(
    <div
    style={{padding:"0",
    margin:"0",
    backgroundColor: "#f4f9f9",
  }}
    >
    <div
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"40vh",
      
    }}
    >
      <form>
        <div style={{display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"#1a508b",}}>
        <h2>Compound Interest</h2>
        </div>
 
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

    <div
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"40vh",
      
    }}
    >
      <form>
      <div style={{display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"#1a508b",}}>
        <h2>Simple Interest</h2>
        </div>
 
        <TextField label="Principal" 
        variant="outlined"
        type="number"
        onChange ={(e) => setPrincipal2(e.target.value)}  //whatever we tpe inside the textfield it sets into variable
       />

        <TextField label="Number of years" 
        variant="outlined"
        type="number"
        onChange ={(e) => setYears2(e.target.value)} 
        />

        <TextField label="Annual interest rate" 
        variant="outlined" 
        type="number"
        onChange ={(e) => setInterest2(e.target.value/100)}/>
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick={()=> {
          calculate2()
        }}>Calculate
        </Button>
        <br/><br/> 
        <div style={{fontSize:'20px'}}>Simple Interest: {result2}</div>
     </form>

    </div>

    <div><br/><br/><br/><br/><br/><br/></div>

    </div>
  )
}

render(<CompoundInterest />, document.querySelector("#root"));

