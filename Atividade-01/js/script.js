function validaNome() {
    let nome = document.querySelector('#input-nome')
    let labelName = document.querySelector('#valida-nome')

    if (nome.value.length <= 2) {
        labelName.innerHTML = 'Nome inválido';
        labelName.style.color = 'red';
    } else {
        labelName.innerHTML = 'Nome Válido';
        labelName.style.color = 'green';
    }
}

function validaEmail() {
    let email = document.querySelector('#input-email');
    let labelEmail = document.querySelector('#valida-email');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        labelEmail.innerHTML = "Email inválido"
        labelEmail.style.color = 'red'
    } else {
        labelEmail.innerHTML = "Email válido"
        labelEmail.style.color = 'green'
    }
}

let senha = document.querySelector('#input-senha')
let labelSenha = document.querySelector('#valida-senha')

function validaSenha() {
    if (senha.value.length <= 5) {
        labelSenha.innerHTML = 'Senha muito fraca'
        labelSenha.style.color = 'red'
    } else {
        labelSenha.innerHTML = 'Senha forte'
        labelSenha.style.color = 'green'
    }
}

let confirmaSenha = document.querySelector('#senha-confirma')
let labelConfirmaSenha = document.querySelector('#label-confirma-senha')

function verificaSenhas() {

    if (confirmaSenha.value != senha.value) {
        labelConfirmaSenha.innerHTML = 'Senhas não conferem'
        labelConfirmaSenha.style.color = 'red'
    } else if (confirmaSenha.value == '') {
        labelConfirmaSenha.innerHTML = 'Senha'
        labelConfirmaSenha.style.color = 'blueviolet'
    } else {
        labelConfirmaSenha.innerHTML = 'Senhas conferem'
        labelConfirmaSenha.style.color = 'green'
    }
}

let mostarfirst = document.querySelector('#eyes')
mostarfirst.addEventListener('click', () => {
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }
});

let mostrarsecond = document.querySelector('#eyes-2')
mostrarsecond.addEventListener('click', () => {
    if (confirmaSenha.getAttribute('type') == 'password') {
        confirmaSenha.setAttribute('type', 'text');
    } else {
        confirmaSenha.setAttribute('type', 'password');
    }
});