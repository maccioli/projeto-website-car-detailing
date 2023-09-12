function audioPlay() {
    window.onload = function () {
        var vinhetaAudio = document.getElementById('vinhetaAudio');
        vinhetaAudio.volume = 0.8;
        vinhetaAudio.play();
    }
}

function redirecionarParaPrincipal() {
    setTimeout(function () {
        window.location.href = '../principal.html';
    }, 15000); // Redirecionar para a página 2 após 3 segundos
}