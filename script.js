document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".container").style.opacity = 0;

    setTimeout(() => {
        window.location.href = "subscription.html";
    }, 500);
});
