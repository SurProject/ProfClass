// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
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

(function () {
  [...document.getElementsByClassName("phone-mask")].forEach((el) => {
    IMask(el, {
      mask: "+{38} (000) 000-00-00",
    });
  });

  [...document.getElementsByClassName("mail-mask")].forEach((el) => {
    IMask(el, {
      mask: /^\S*@?\S*$/,
    });
  });
})();
(function () {
  const body = document.querySelector(".body");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function (e) {
    body.classList.toggle("lock");
  });
})();
