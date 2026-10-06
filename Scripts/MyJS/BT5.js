var interval = null;
function startProgress() {
    const progressBar = document.getElementById("my-progress");

    if (interval) {
        clearInterval(interval);
    }

    let width = 0;

    interval = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            interval = null;
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }
}
