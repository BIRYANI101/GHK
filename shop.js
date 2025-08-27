    // Example JS: Optional fade effect on load
    window.addEventListener("load", () => {
      document.querySelector(".banner-content").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".banner-content").style.transition = "1s";
        document.querySelector(".banner-content").style.opacity = "1";
      }, 200);
    });