Filtering Matches App

**Prerequisite**

Using `nvm` is highly recommended when switching between node versions. When using `nvm`, make sure to **run the cmd with BlackRock Elevated Rights**. When doing `nvm use <version>`, make sure to **turn off antivirus scan of http requests** in your machine (System tray > McAfee > Quick Settings > Disable Endpoint Security Scanners)
- node.js v10.15.0 (npm v6.4.1)
- ionic v4.11.0

**Installation**

.npmrc (to point to external registry thru proxy)
```
http-proxy=http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
https-proxy=http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
```

Set git and windows proxies
```
set HTTP_PROXY=http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
set HTTPS_PROXY=http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
set PROXY=http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
git config --global http.proxy http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
git config --global https.proxy http://blkusername:blkpasswordurlencoded@sgp-webproxy.blackrock.com:8080
git config --global url.https://github.com/.insteadOf git://github.com/
```

NPM global packages
```
npm install -g ionic
```

NPM local packages
```
npm install
```

Start local server
```
ionic serve
```