# How
* Run the server
```
python3 -m "http.server" 8888
```

# Note
* access `http://127.0.0.1:8888` on browser
  * clicking a tag, it will switch pages

* access `http://127.0.0.1:8888/about` on browser
  * it does not work, because the request sent to backend...
  * We need a backend always returning index.html and handle 404 on frontend
    * see `django-cheatsheet/frontend/frontendRouting`

