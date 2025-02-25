document.getElementById('loginForm').addEventListener('submit', function(event) {
    const login = document.querySelector('input[type="text"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (!login || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});
