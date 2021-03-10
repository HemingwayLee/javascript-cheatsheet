# change the font size in console output of chrome
* `command +` and `command -` and `command 0` 

# Useful tasks
## download IG image urls in JSON
```javascript
function getAllImages() {
  myObjects = [];
  var elements = document.getElementsByClassName("FFVAD");
  for (var i = 0, len = elements.length; i < len; i++) {
    myObj = {};
    myObj.imageUrl = elements[i].src;
    myObjects.push(myObj);
  }

  console.save(myObjects);
}

console.save = function (data, filename) {
  if (!data) {
      console.error('Console.save: No data');
      return;
  }

  if (!filename) filename = 'images.json'

  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }

  var blob = new Blob([data], {
    type: 'text/json'
  });

  var a = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');

  var e = document.createEvent('MouseEvents');
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

  a.dispatchEvent(e);
}

getAllImages();
```

## Download IG images 
```javascript
(function(global) {
  // const next = () => document.querySelector('.search-pagination__button-text').click();
  const uuid = () => Math.random().toString(36).substring(7);
  const toBlob = (src) => new Promise((res) => {
    const img = document.createElement('img');
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    img.onload = ({target}) => {
      c.width = target.naturalWidth;
      c.height = target.naturalHeight;
      ctx.drawImage(target, 0, 0);
      c.toBlob((b) => res(b), "image/jpeg", 0.75);
    };
    img.crossOrigin = "";
    img.src = src;
  });
  const save = (blob, name = 'image.png') => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = name;
    a.click();
  };
  global.download = () => document.querySelectorAll('.FFVAD').forEach(async ({src}) => save(await toBlob(src), `${uuid()}.png`));
  // global.next = () => next();
})(window);

download();
```


## Tester 
```javascript
(function(global) {
  // const next = () => document.querySelector('.search-pagination__button-text').click();
  const uuid = () => Math.random().toString(36).substring(7);
  const toBlob = (src) => new Promise((res) => {
    console.log(src);
  });
  const save = (blob, name = 'image.png') => {
    console.log("save");
  };
  global.download = () => document.querySelectorAll('.FFVAD').forEach(async ({src}) => save(await toBlob(src), `${uuid()}.png`));
  // global.next = () => next();
})(window);

download();
```

