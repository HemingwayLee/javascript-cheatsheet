# How does browser works
* Start to parse the HTML
* Fetch external resources
  * Parse the CSS and build the CSSOM
    * The CSSOM and DOM creation happens asynchronously 
  * Execute the JavaScript (depends on `async` and `defer`)
* Merge DOM and CSSOM to construct the render tree

![browser_flow](https://miro.medium.com/max/936/1*srfAe9f1ryMc3qoMOASmhg.png)

# Browser behaviors
## script tag
```
<script src="myscript.js"></script>
<script async src="myscript.js"></script>
<script defer src="myscript.js"></script>
```

![flow](https://i.stack.imgur.com/wfL82.png)

* `async`
  * Make parallel requests to fetch the files
  * Continue parsing the document as if it was never interrupted
  * Execute the individual scripts the moment the files are downloaded

* `defer`
  * Make parallel requests to fetch the individual files
  * Continue parsing the document as if it was never interrupted
  * Finish parsing the document even if the script files have downloaded
  * Execute each script in the order they were encountered in the document

* `without`
  * stop parsing the document
  * run your script immediately before rendering the elements that's below your script tag
  * Continue parsing the document after loading and running the script


