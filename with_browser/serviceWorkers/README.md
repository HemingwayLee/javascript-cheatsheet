# How
* Run the server
```
python3 -m "http.server" 8888
```

# Note
* access `http://127.0.0.1:8888` on browser
* We need to `refresh` the page to make it work
* We cannot access localStorage (and also sessionStorage) from a webworker process, they result will be `undefined`, this is for security reasons

# Access service workers manually
* Google chrome
```
chrome://serviceworker-internals/
```

* firefox
```
about:serviceworkers
```



