const passwordInput = document.getElementById("pswdInput");
const toggleButton = document.getElementById("openPswd");
const pswMessage = document.querySelector(".modalContainer");

toggleButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = `<i class="ri-eye-line"></i>`;
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = ` <i class="ri-eye-off-line text-slate-400  "></i>`;
  }
});

passwordInput.onfocus = function () {
  pswMessage.classList.add("active");
};
passwordInput.onblur = function () {
  pswMessage.classList.remove("active");
};

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const special = document.getElementById("special");
const minimum = document.getElementById("minimum");
const oneNum = document.getElementById("oneNum");
const form = document.querySelector('.Container');

passwordInput.onkeyup = function () {
  const upper = /[A-Z]/g;
  if (passwordInput.value.match(upper)) {
    uppercase.innerHTML = ` <p  id="uppercase" class="pswRules text-green-600  ">
        <span class="mx-4 text-[1.2rem]"><i class="ri-thumb-up-line"></i></span>an uppercase letter</p>`;
  } else {
    uppercase.innerHTML = ` <p  id="uppercase" class="pswRules text-red-600 "><span class="mx-4 text-[1.2rem]"><i class="ri-close-line"></i></span>an uppercase letter</p>`;
  }

  const lower = /[a-z]/g;
  if (passwordInput.value.match(lower)) {
    lowercase.innerHTML = ` <p  id="lowercase" class="pswRules text-green-600  ">
        <span class="mx-4 text-[1.2rem]"><i class="ri-thumb-up-line"></i></span>a lowercase letter</p>`;
  } else {
    lowercase.innerHTML = ` <p  id="lowercase" class="pswRules text-red-600  "><span class="mx-4 text-[1.2rem]"><i class="ri-close-line"></i></span>a lowercase letter</p>`;
  }

  if (passwordInput.value.length >= 8) {
    minimum.innerHTML = ` <p  id="minimum" class="pswRules text-green-600 ">
        <span class="mx-4 text-[1.2rem]"><i class="ri-thumb-up-line"></i></span>minimum of 8 character</p>`;
  } else {
    minimum.innerHTML = ` <p  id="minimum" class="pswRules text-red-600  v"><span class="mx-4 text-[1.2rem]"><i class="ri-close-line">
        </i></span>minimum of 8 character</p>`;
  }

  const spec = /[!@#$%^&*(),.?":{}|<>]/;
  if (passwordInput.value.match(spec)) {
    special.innerHTML = ` <p  id="special" class="pswRules text-green-600  ">
        <span class="mx-4 text-[1.2rem]"><i class="ri-thumb-up-line"></i></span>special charcater</p>`;
  } else {
    special.innerHTML = ` <p  id="special" class="pswRules text-red-600  v"><span class="mx-4 text-[1.2rem]"><i class="ri-close-line"></i></span>special character</p>`;
  }

  const num = /[0-9]/g;
  if (passwordInput.value.match(num)) {
    oneNum.innerHTML = ` <p  id="oneNum" class="pswRules text-green-600 ">
        <span class="mx-4 text-[1.2rem]"><i class="ri-thumb-up-line"></i></span>at least 1 digit</p>`;
  } else {
    oneNum.innerHTML = ` <p  id="oneNum" class="pswRules text-red-600 "><span class="mx-4 text-[1.2rem]">
        <i class="ri-close-line"></i></span>at least 1 digit</p>`;
  }
};

const valPswd = document.querySelector(".validatePassword")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validatePassword()
});

function validatePassword() {


    const passwordInput = document.getElementById("pswdInput");
        const passwordStrength = document.getElementById("passwordStrength");
        const password = passwordInput.value;
        const weakRegex = /^(?=.*[a-z]).{6,}$/;
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/g;
        
        if (password.match(strongRegex)) {
            pswMessage.classList.remove("active");
            passwordStrength.textContent = "Strong";
            passwordStrength.className = "strong";
        } else if (password.match(weakRegex)) {
            passwordStrength.textContent = "Weak";
            passwordStrength.className = "weak";
        } else {
            passwordStrength.textContent = "Normal";
            passwordStrength.className = "normal";
        }  
        }

    
    
// //    