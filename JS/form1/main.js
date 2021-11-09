var form = document.getElementById('main-form');
form.addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();

  var name = form.name.value;
  var pass = form.pass.value;
  var repass = form.repass.value;
  var state = form.state.value;

  var error = "";

  if ((name || pass || repass || state) == ""){
    error = "Заполните все поля";
  } else if (pass != repass) {
    error = "Разные пароли";
  } else if (pass.length < 8) {
    error = "Слишком короткий пароль";
  } else if (name.search(/\d/) != -1 || name.length < 1) {
    error = "Некоректное имя";
  }

  if (error != "") {
    document.getElementById('error').innerHTML = error;
  } else {
    alert("Форма отправлена");
    window.location = "https://google.com";
  }

}
