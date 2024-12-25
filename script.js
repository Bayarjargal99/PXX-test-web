// Tab идэвхжүүлэх
const tabs = document.querySelectorAll('.tab');
const flashcard = document.querySelector('.flashcard');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Бүх табыг идэвхгүй болгоно
    tabs.forEach(t => t.classList.remove('active'));
    // Идэвхтэй табыг оруулна
    tab.classList.add('active');
    if (page2 === 0) {
      flashcard.innerHTML = '<h3>Flashcard 1</h3><p>UX Design</p>';
    } else if (page2 === 1) {
      flashcard.innerHTML = '<h3>Тест</h3><p>Тестийн агуулга энд байна</p>';
    } else {
      flashcard.innerHTML = '<h3>Хичээлийн агуулга</h3><p>Хичээлийн дэлгэрэнгүй</p>';
    }
  });
});
document.getElementById("submit-comment").addEventListener("click", function() {
  var commentText = document.getElementById("comment-text").value;
  if (commentText.trim() !== "") {
    // Сэтгэгдлийг харуулах
    var commentList = document.getElementById("comments-list");
    
    var newComment = document.createElement("div");
    newComment.classList.add("comment-item");
    newComment.textContent = commentText;
    
    commentList.appendChild(newComment);

    // Сэтгэгдлийг бичсэн талбарыг цэвэрлэх
    document.getElementById("comment-text").value = "";
  }
});