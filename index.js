$(() => {
  $("#f").submit(function() {
    $("#f :input").map(function() {
      console.log("H: ", $(this).closest("img"));
      if (
        !$(this)
          .val()
          .trim().length
      ) {
        $(this)
          .closest("img")
          .show();
        $(this)
          .closest("span")
          .show();
      }
    });
  });
});
