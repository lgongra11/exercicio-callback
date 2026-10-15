const btn = document.getElementById('btn');
const statusText = document.getElementById('status');


function confirmarAcao() {
    statusText.textContent = 'Ação confirmada!';
}


btn.addEventListener('click', confirmarAcao);