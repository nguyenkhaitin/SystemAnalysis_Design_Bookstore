var container = document.querySelector(".container");
var pwShowHide = document.querySelectorAll(".showHidePw");
var pwFields = document.querySelectorAll(".password");
var signUp = document.querySelector(".signup-link");
var login = document.querySelector(".login-link");

// Code để hiển thị thông tin nhập vào console.log
document.querySelector(".form.login").addEventListener("submit", function (event) {
  event.preventDefault();

  // Hiển thị bảng thông báo
  showAlert("Đăng nhập thành công");
  function showAlert(message) {
    alert(message);
  }

  var formData = new FormData(event.target);

  console.log("Form Data:");
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Code để hiển thị thông tin khi click vào nút Đăng ký
document.querySelector(".form.signup").addEventListener("submit", function(event) {
  event.preventDefault();

  // Hiển thị bảng thông báo
  showAlert("Đăng ký thành công");
  function showAlert(message) {
    alert(message);
  }

  var formData = new FormData(event.target);

  console.log("Form Data:");
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Code để hiển thị thông tin khi click vào nút Đăng nhập
document.querySelector(".form.login input[type='submit']").addEventListener("click", function () {
  console.log("Đăng nhập Form Data:");
  displayFormData();
});

// Code để hiển thị thông tin khi click vào nút Đăng ký
document.querySelector(".form.signup input[type='submit']").addEventListener("click", function () {
  console.log("Đăng ký Form Data:");
  displayFormData();
});

// Hàm để lấy thông tin từ các trường input và hiển thị trong console.log
function displayFormData() {
  pwFields.forEach((pwField) => {
    var fieldName = pwField.getAttribute("placeholder");
    var fieldValue = pwField.value;
    console.log(`${fieldName}: ${fieldValue}`);
  });
}
