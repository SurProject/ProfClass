// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

(() => {
  Array.prototype.slice
    .call(document.getElementsByClassName("phone-mask"))
    .forEach((el) => {
      IMask(el, {
        mask: "+{38} (000) 000-00-00",
      });
    });

  Array.prototype.slice
    .call(document.getElementsByClassName("mail-mask"))
    .forEach((el) => {
      IMask(el, {
        mask: /^\S*@?\S*$/,
      });
    });
})();

(() => {
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const bursec = document.querySelector(".burger-section");

  burger.addEventListener("click", function (e) {
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function (e) {
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
    bursec.classList.toggle("show");
  });
})();
