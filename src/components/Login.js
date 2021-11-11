import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

// class Login extends React.Component {
//   render() {
//     return (
//       <div>
//         <head>
//           <title>Insert title here</title>
//         </head>
//         <h1> login page</h1>
//         <body>
//           <form action="dashboard" method="post">
//             <pre>
//               email: <input type="text" name="email" />
//               password: <input type="text" name="password" />
//               <input type="submit" value="login"></input>
//             </pre>
//           </form>
//         </body>
//       </div>
//     );
//   }
// }
function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit() {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:8097/api/login", data)
      .then((res) => {
        console.log(res);
        if (res.data === true) {
          document.write("User logged in Successfully!!");
        } else {
          document.write("invalid user");
        }
      })
      .catch((err) => {
        console.log(err);
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
      <button onClick={handleSubmit}>Login</button>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}
export default Login;
