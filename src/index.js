import React, { useState, useEffect } from "react";

export default function ObfuscatedMailto({
  base64Email,
  loadTime = 5000,
  step = 1000,
  loadingMessage = "Loading ",
}) {
  const [myEmail, setMyEmail] = useState(loadingMessage);

  useEffect(() => {
    const steps = [];

    for (let i = step; i < loadTime; i += step) {
      steps.push(i);
    }

    const ids = steps.map(time => {
      setTimeout(() => setMyEmail(x => x + "."), time);
    });

    setTimeout(() => {
      ids.map(clearTimeout);
      setMyEmail(atob(base64Email));
    }, loadTime + step);
  }, []);

  return React.createElement(
    "a",
    {
      href: `mailto:${myEmail}`,
    },
    myEmail
  );
}
