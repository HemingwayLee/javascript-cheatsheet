# When
## When we want to stop default behavior
* do not submit, use jquery to send request
```
  function doSubmit(e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/dosignin/",
      data: $(this).serialize(),
      success: function (data) {
        $("#signinModal").modal("hide");

        window.location.href = "http://127.0.0.1:8000/";
      },
      error: function (xhr, textStatus, errorThrown) {
        $('#message').text(`${textStatus}: [${xhr.status}] ${errorThrown}`);
      },
    });
  }
```


