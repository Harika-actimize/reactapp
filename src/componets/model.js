// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

// const LoginForm = ({ onSubmit }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   // const [todos, setTodos] = useState([]);
//   const [name, setName] = useState("");
//   const [star, setStar] = useState();
//   const [Comments, setComments] = useState("");
//     return (
//       <div className="row" style={{backgroundColor:"gray",marginTop: 10}}>
//       <div className="col-sm-3">
//       </div>
//       <div className="col-sm-6">
//         <h2>Feed back from</h2>
//         <div name="myform" method="post"style={{border: "2 solid gray",padding: 30,borderRadius: 10,marginBottom: 10, backgroundColor: "white"}}>
//           <div className="mb-3 mt-3">
//           <label htmlFor="namedInput">Name:</label>
//             <input type="text" className="form-control input" onChange={(e) => setName(e.target.value)} placeholder="Enter name" value={name}/>
//             <div>
//             <label htmlFor="namedInput">Please rate us:</label></div>
//             <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//           console.log("/////",index);
//           index += 1;
//           return (
  
//             <button
//               type="button"
//               key={index}
//               className={index <= (hover || rating) ? "on" : "off"}
//               onClick={() => {setRating(index);setStar(index)}}
//               onMouseEnter={() => setHover(index)}
//               onMouseLeave={() => setHover(rating)}
//             >
              
//               <span className="star">&#9733;</span>
//             </button>
  
  
//           );
//         })}
//       </div>
//              <label htmlFor="namedInput">Comments:</label>
//    <textarea className="form-control" rows="5"  value={Comments} onChange={(e) => setComments(e.target.value)} id="comment" name="text"></textarea>
//    <button type="submit" className="btn btn-primary" onClick={()=>{}} id="myForm" style={{float: "right",marginTop:2}}>Submit</button>
//           </div>
//         </div>
//     </div>
//     </div>
//     );
//   }

//   export default function Submit() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     const onLoginFormSubmit = (e) => {
//       e.preventDefault();
//       handleClose();
//     };
  

//   return (
//     <>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{ height: "100vh" }}
//       >
//         <Button variant="primary" onClick={handleShow}>
//           Launch Form modal
//         </Button>
//       </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <LoginForm onSubmit={onLoginFormSubmit} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close Modal
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
//   }
