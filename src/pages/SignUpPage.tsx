import React, {useCallback, useState} from "react";

export default function SignUpPage () {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setCredentials({...credentials, [name]: value});
    },
    [credentials, setCredentials]
  );

  return (
    <div className="SignUpPage">
      <h1>Sign Up</h1>

      <form onSubmit={e => {
        e.preventDefault();
        alert("TODO Sign Up with data: " + JSON.stringify(credentials, null, 2));
      }}>
        <div>
          <input
            placeholder={"username"}
            value={credentials.username}
            name={"username"}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            placeholder={"password"}
            type={"password"}
            name={"password"}
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}