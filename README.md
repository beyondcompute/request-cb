## Usage

**Just a message**
```js
request.get({
  url: someURL
}, cb('getting cluster status'));
```
* will print `ERROR sending request - getting cluster status: : { [Error: getaddrinfo ENOTFOUND ...` in case of inability to make request
* `ERROR response from server - getting cluster status: 401 <html><head>...Please authorize` in case of http status code >= 400
* `Done getting cluster status` in case of success

**Success callback**
```js
request.get({
  url: someURL
}, cb('getting cluster status', gotClusterStatus));
```

**Success callback with some context**
```js
var clusterRole = 'search';

request.get({
  url: someURL
}, cb('getting cluster status', gotClusterStatus, clusterRole, 'foo')); // any number of additional arguments are supported
```
