function openModal(element) {
  var imgSrc = element.getElementsByTagName("img")[0].src;
  document.getElementById("modalImage").src = imgSrc;
  document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}