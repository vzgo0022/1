import React,{Fragment,useState} from 'react';
import LogIn from '../LogIn';
import SingUp from '../SingUp';

const ButtLogSing = () => {
    const [boolLogSing, setBoolLogSing] = useState<boolean>(true);
    return (
        <Fragment>
           <button className="SignUp" onClick={()=>setBoolLogSing(true)}>
            {"Sign Up"}
          </button>
          <button className="LogIn" onClick={()=>setBoolLogSing(false)}>
            {"Log In"}
          </button>
          {boolLogSing ? <LogIn />:<SingUp />}
        </Fragment>
    );
}

export default ButtLogSing;