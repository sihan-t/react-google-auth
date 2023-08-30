import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

import "./styles.css";

const responseGoogle = response => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <GoogleLogin
        clientId="709900591742-vi8jgeg2vggclq119lc8kvhpd2aseldp.apps.googleusercontent.com "
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
