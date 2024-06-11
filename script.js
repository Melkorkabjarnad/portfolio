document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".arrow3");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetUrl = this.href;

            document.querySelector(".web img").classList.add("slide-out");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);

        });
    });
});