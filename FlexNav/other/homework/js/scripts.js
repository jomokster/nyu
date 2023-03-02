var navigation = document.querySelectorAll("nav a");
      document.addEventListener("click", showActive);

      function showActive(event) {
        event.preventDefault();
        if (event.target.matches("nav a")) {
          for (let navigationItem of navigation) {
            navigationItem.classList.remove("active");
          }
          event.target.classList.add("active");
        }
      }