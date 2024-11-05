// Sauvegarder la position de scroll avant le rafraîchissement
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Restaurer la position de scroll après le rafraîchissement
window.addEventListener("load", () => {
  const scrollPosition = localStorage.getItem("scrollPosition");
  setTimeout(() => {
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, 500);
  console.log("scrollpos : ", scrollPosition);
});
