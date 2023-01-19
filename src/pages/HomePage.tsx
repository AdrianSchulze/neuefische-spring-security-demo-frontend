import LogoutButton from "../components/LogoutButton";
import {useEffect } from "react";
import getMe from "../hooks/getMe";

export default function HomePage () {
  useEffect(() => {
    (async () => {
      const user = await getMe();
      console.log("Logged in user:", user);
      if (user.role === "BASIC") {
        console.log("You are logged in as a basic user!");
      }
    })();
  }, []);

  return (
    <div className="HomePage">
      <h1>Home</h1>
      <p>This is the home page.</p>
      <LogoutButton/>
    </div>
  );
}