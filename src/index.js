import React, { useState, useEffect } from "react";

export default function ObfuscatedMailto({ base64Email }) {
  const [myEmail, setMyEmail] = useState("loading ");

  const loadTime = 5000;
  const step = 1000;
  const steps = [];

  for (let i = step; i < loadTime; i += step) {
    steps.push(i);
  }

  useEffect(() => {
    const ids = steps.map(time => {
      setTimeout(() => setMyEmail(x => x + "."), time);
    });

    setTimeout(() => {
      ids.map(clearTimeout);
      setMyEmail(atob(base64Email));
    }, loadTime + 1000);
  }, []);

  return <a href={`mailto:${myEmail}`}>{myEmail}</a>;
}
