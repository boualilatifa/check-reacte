import React from 'react';
function Navbarr() {
  return (
  <div style={{ backgroundColor: "black",
  color: "black",
  height: "100px",
  width: "100%",
  display: "flex",
  }}>
  <ul style={{
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    marginTop: "10px",
    width: "100%",
    listStyle: "none",
    color: "black",

  }}> 
 
       <span id="s1"> <li><a href="">HOME</a> </li></span>
       <span id="s2"> <li><a href="">ABOUT</a></li></span>
      <span id="s3" > <li><a href ="">CONTACT</a></li></span>
     




  </ul>
</div> 
)
}
export default Navbarr;