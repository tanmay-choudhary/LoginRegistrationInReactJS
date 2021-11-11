import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <head>
          <title>Insert title here</title>
        </head>
        <h1> I am Home</h1>
        <body>
          <form action="register" method="GET">
            <pre>
              <input type="submit" value="register user" />
            </pre>
          </form>

          <form action="login" method="GET">
            <pre>
              <input type="submit" value="login" />
            </pre>
          </form>
        </body>
      </div>
    );
  }
}

export default Home;
