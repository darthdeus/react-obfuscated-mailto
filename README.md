# React Obfuscated Mailto [![CircleCI](https://circleci.com/gh/darthdeus/react-obfuscated-mailto.svg?style=shield)](https://circleci.com/gh/darthdeus/react-obfuscated-mailto)

A simple component to embed a mailto link while keeping the email hidden from crawlers. The component accepts a base64 encoded email string and will show a loading indicator for a couple of seconds before replacing it with the real decoded email. This way even a crawler with JavaScript enabled can't crawl the email address unless it waits for a given amount of time.

Usage: (first import `import ObfuscatedMailto from "react-obfuscated-mailto";`)

```javascript
<ObfuscatedMailto base64Email="Zm9vQGV4YW1wbGUuY29t" />
// Renders 'foo@example.com' after 5 seconds.
```

The loading time can be customized using the `loadingTime` prop, such as the following:

```javascript
<ObfuscatedMailto loadingTime={20} base64Email="Zm9vQGV4YW1wbGUuY29t" />
```
