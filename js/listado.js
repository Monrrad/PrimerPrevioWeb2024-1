document.addEventListener('DOMContentLoaded', async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html'; 
        return;
    }

    const response = await fetch(`https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students/[codigo]/notas`);
    const grades = await response.json();

    const tableBody = document.getElementById('grades-table').getElementsByTagName('tbody')[0];
    grades.forEach(subject => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = subject.nombre;
        row.insertCell(1).textContent = subject.creditos;
        row.insertCell(2).textContent = subject.p1;
        row.insertCell(3).textContent = subject.p2;
        row.insertCell(4).textContent = subject.p3;
        row.insertCell(5).textContent = subject.ef;
        const finalGrade = calculateFinalGrade(subject.p1, subject.p2, subject.p3, subject.ef);
        row.insertCell(6).textContent = finalGrade.toFixed(2);
    });
});

function calculateFinalGrade(p1, p2, p3, ef) {
    return (p1 + p2 + p3) / 3 * 0.7 + ef * 0.3;
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html'; 

}
