
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.which === 85 || e.which === 67 || e.which === 83)) {
        e.preventDefault();
    }
});
