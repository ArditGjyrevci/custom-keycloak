document.addEventListener("DOMContentLoaded", function () {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const totp = document.getElementById("totp");
    const userLabel = document.getElementById("userLabel");
    const passwordNew = document.getElementById("password-new");
    const passwordConfirm = document.getElementById("password-confirm");
    const otp = document.getElementById("otp");
  
    if (usernameField) {
      usernameField.placeholder = "Përdoruesi";
    }
  
    if (passwordField) {
      passwordField.placeholder = "Password";
    }

    if (totp) {
      totp.placeholder = "Kodi";
    }
  
    if (userLabel) {
      userLabel.placeholder = "Emri i pajisjes";
    }

     if (passwordNew) {
      passwordNew.placeholder = "Fjalëkalimi i ri";
    }
  
    if (passwordConfirm) {
      passwordConfirm.placeholder = "Konfirmo fjalëkalimin";
    }
    if (otp) {
      otp.placeholder = "Kodi verifikues";
    }
    

  });