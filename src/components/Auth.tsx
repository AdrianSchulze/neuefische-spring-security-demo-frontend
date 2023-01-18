import React, {useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import axios from "axios";

export default function Auth (
  {
    children,
    shouldRedirect = true,
  }: {
    children: React.ReactNode
    shouldRedirect?: boolean,
  }
) {
  const location = useLocation();

  const [user, setUser] = useState<{username: string}|null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get("/api/app-users/me");
        setUser(user.data);
      } catch (e) {
        console.error("You are not logged in!", e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  return !isReady ? null : (
    <>
      {!user ? (
        (shouldRedirect && <Navigate
          to={`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`}
        />)
      ) : children}
    </>
  )
}
