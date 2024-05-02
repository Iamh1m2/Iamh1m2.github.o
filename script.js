document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector(".taskbar button");
    const windowExplorer = document.querySelector(".window");

    startButton.addEventListener("click", function() {
        if (windowExplorer.style.display === "none" || !windowExplorer.style.display) {
            windowExplorer.style.display = "block";
        } else {
            windowExplorer.style.display = "none";
        }
    });
});
