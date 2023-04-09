$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
  });
  $(".container-form .btn").click(function(){
    $(".container").addClass("active");
  });

  function logar() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
  
    if (password == 123) {
      alert("Usuário " + username + " logado!")
      window.location.href="./"
    } else {
      alert("Senha inválida")
    }
    }

    function register() {
      const email = document.getElementById("email").value
      const fullname = document.getElementById("fullname").value
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
      const passwordConfirmation = document.getElementById("cpassword").value
    
      if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!")
        window.location.href="./"
      } else {
        alert("As senhas não conferem")
      }
    }
  