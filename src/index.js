function audioPlay() {
    window.onload = function () {
        var vinhetaAudio = document.getElementById('vinhetaAudio');
        vinhetaAudio.volume = 0.8;
        vinhetaAudio.play();
    }
}

function redirecionarParaPrincipal() {
    setTimeout(function () {
        window.location.href = '../service.html';
    }, 20000);
}