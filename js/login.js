async function handleLogin(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    const password = document.getElementById('password').value;
    const response = await fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({codigo: codigo, clave: password})
    });

    if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = '../html/listado.html'; 
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('student-code').value = '';
        document.getElementById('password').value = '';
    }
}