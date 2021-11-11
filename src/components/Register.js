import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

// class Register extends React.Component {
//   handleSubmit(event) {
//     event.preventDefault();
//     const data = {
//       firstName: this.firstName,
//       lastName: this.lastName,
//       age: this.age,
//     };
//     console.log(data);
//     axios.post("http://localhost:8097/api/user", data).then((res) => {
//       document.write("User Created Successfully!!");
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Create Patient:</h2>
//         <form>
//           Email:
//           <input
//             type="text"
//             name="email"
//             onChange={(event) => {
//               this.Email = event.target.value;
//             }}
//             align="left"
//           />
//           Password:
//           <input
//             type="text"
//             name="password"
//             onChange={(event) => {
//               this.Password = event.target.value;
//             }}
//             align="left"
//           />
//           Full Name:
//           <input
//             type="text"
//             name="fullname"
//             onChange={(event) => {
//               this.firstName = event.target.value;
//             }}
//             align="left"
//           />
//           <button onClick={this.handleSubmit.bind(this)}>Register</button>
//         </form>
//         <Link to={"/"}>Go Home</Link>
//       </div>
//     );
//   }
// }

function Register() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [fullname, setFullname] = useState("");

  function handleSubmit() {
    const data = {
      email: email,
      password: password,
      fullname: fullname,
    };
    console.log(data);
    axios.post("http://localhost:8097/api/user", data).then((res) => {
      document.write("User Created Successfully!!");
    });
  }

  return (
    <div>
      <h2>Create Patient:</h2>
      Email:
      <input
        value={email}
        type="text"
        name="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        align="left"
      />
      Password:
      <input
        value={password}
        type="text"
        name="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        align="left"
      />
      Full Name:
      <input
        value={fullname}
        type="text"
        name="fullname"
        onChange={(event) => {
          setFullname(event.target.value);
        }}
        align="left"
      />
      <button onClick={handleSubmit}>Register</button>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}
export default Register;
