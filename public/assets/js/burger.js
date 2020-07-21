$(function() {	
    $(".change-devour").on("click", function(event) {	
      var id = $(this).data("id");	
      var newDevour = $(this).data("newDevour");	
        newDevour = (newDevour == 0) ? 1:0	

   console.log(newDevour + "New Devour")	
      // Send the PUT request.	
      $.ajax("/api/burger/" + id, {	
        type: "PUT",	
        data: {	
            devourBurger: newDevour	
        }	
      }).then(	
        function() {	
          console.log("changed devour to", newDevour);	
          // Reload the page to get the updated list	
         // location.reload();	
        }	
      );	
    });	

    $(".create-form").on("submit", function(event) {	
      // Make sure to preventDefault on a submit event.	
      event.preventDefault();	
  console.log("please work")	

      var newBurger = {	
        burgerName: $("#burg").val().trim(),	
        devourBurger: $("[name=devour]:checked").val().trim()	
      };	
   console.log(newBurger);	

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
        var thisId = $(this).data("id");	

        // Send the PUT request.	
        $.ajax("/api/burger/" + thisId, {	
          type: "delete",	

        }).then(	
          function() {	
            console.log("DELETE", newDevour);	
            // Reload the page to get the updated list	
            location.reload();	
          }	
        );	
      });	
  });