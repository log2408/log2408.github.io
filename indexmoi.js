const container = document.getElementById('container');
 const registerBtn = document.getElementById('register');
 const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
 container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.querySelector(".sign-up form");
    const signInForm = document.querySelector(".sign-in form");
  
    signUpForm.addEventListener("submit", function(event) {
      event.preventDefault();
      checkInput(signUpForm);
    });
  
    signInForm.addEventListener("submit", function(event) {
      event.preventDefault();
      checkInput(signInForm);
    });
  
    function checkInput(form) {
      const inputs = form.querySelectorAll("input");
      let isEmpty = false;
  
      inputs.forEach(function(input) {
        if (input.value.trim() === "") {
          isEmpty = true;
        }
      });
  
      if (isEmpty) {
        alert("Thông tin còn thiếu hoặc chưa nhập");
      } else {
        form.submit();
      }
    }
  });
var emailInput = document.querySelectorAll('input[type="email"]');

function validateEmail(email) {
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

function validateForm(event) {
  event.preventDefault();
  
  emailInput.forEach(function(input) {
    var email = input.value;
    if (!validateEmail(email)) {
      alert("Email không hợp lệ! Vui lòng nhập đúng định dạng email.");
      return;
    }
    // Tiếp tục xử lý biểu mẫu nếu email hợp lệ
    // ...
  });
}

// Gán sự kiện submit biểu mẫu cho form-container
var formContainers = document.querySelectorAll('.form-container');
formContainers.forEach(function(container) {
  var form = container.querySelector('form');
  form.addEventListener('submit', validateForm);
});