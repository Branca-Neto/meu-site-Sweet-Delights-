  
document.getElementById("toggle-more").addEventListener("click", function(event) {
    event.preventDefault();
    var moreContent = document.getElementById("more-content");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "Menos";
    } else {
        moreContent.style.display = "none";
        this.textContent = "Mais";
    }
});
