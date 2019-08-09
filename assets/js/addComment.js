import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentBtn = document.getElementsByClassName("video__comments-deleteBtn");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}

const addComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("span");
  span.innerHTML = comment;
  btn.innerHTML = "X";
  li.appendChild(span);
  li.appendChild(btn);
  commentList.prepend(li);
  increaseNumber();
  btn.addEventListener("click", handleDelete);
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const sendDeleteComment = async (comment, commentSpan) => {
  const videoId = window.location.href.split("/videos")[1];
  const response = await axios({
    url: `/api/${videoId}/comment/delete`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    commentSpan.parentElement.remove();
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const handleDelete = event => {
  const commentSpan = event.target.previousElementSibling;
  const comment = commentSpan.innerHTML;
  sendDeleteComment(comment, commentSpan);
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  Array.from(deleteCommentBtn).forEach(entry => {
    entry.addEventListener("click", handleDelete);
  });
}

if (addCommentForm) {
  init();
}