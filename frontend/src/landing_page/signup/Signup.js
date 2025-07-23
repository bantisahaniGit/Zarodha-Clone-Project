import React from 'react';
function Signup() {
    return ( 
        <div className="row ">
      <div className="col-3"></div>
      <div className="col-4 border text-left mt-5 p-5 text-bg-light">
        <form >
          <label htmlFor="name">Name : </label>
          <input placeholder="enter your name" type="text" id="name"/>
          <br></br>
          <label htmlFor="num">Number : </label>
          <input placeholder="enter your password" className="mt-5" type="number" id="num"></input>
          <br></br>
          <label htmlFor="create">create password : </label>
          <input placeholder="create password" className="mt-5" type="number" id="create"></input>
          <br></br>
                    
            <button type=" d-flex submit mt-5" className="btn btn-primary"> submit </button>
        </form>
      </div>
      <div className="col-5"></div>
    </div>
     );
}

export default Signup;