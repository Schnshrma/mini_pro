import React, { useState } from "react";
import './index.css';



const App = () =>
{
    //const state = useState();
   // console.log(state);
   var date = new Date();
    var hi = date.getHours();
    var mi = date.getMinutes();
    var si = date.getSeconds();
    var ap ="AM";
     if(hi>12){
         ap="PM";
        hi=hi-12;
     }else{
         ap="AM";
     } 
    const [h,sh] = useState(hi);
    const [m,sm] = useState(mi);
    const [s,ss] = useState(si);
    //const [a,sa] = useState(ap);
   // var ap;
    const hey = () => {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        
        if(h>12){
            ap="PM";
           h=h-12;
        }else{
            ap="AM";
        }

        //console.log("Clicked "+ count++);
        sh(h);
        sm(m);
        ss(s);
        
     }
     setInterval(hey,1000);
    return(<>
    <div className="items">
    <h1 className="item">Hey..!!</h1>
    <h1 className="item"> {h} : {m} : {s}  {ap} </h1>
    {/* <button className="item" onClick={hey}>Get Time</button> */}
    </div>
    </>);
};

export default App;
