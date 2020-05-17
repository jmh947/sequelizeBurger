// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourBurger = {
        devour: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourBurger
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    //Delete the POST request
    $(".delete-burger").on("click", function(event) {
        var thisId = $(this).data("this.id");
    
        // Send the PUT request.
        $.ajax("/api/burger/" + thisId, {
          type: "delete",
          data: newDevourBurger
        }).then(
          function() {
            console.log("DELETE", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });