document.querySelectorAll("section.chapter").forEach((chapter) => {
  const chapterID = chapter.getAttribute("id");
  const newA = document.createElement("a");
  newA.href = "#" + chapterID;

  const chapterName = chapter.getAttribute("data-chap-name");
  const newSpanText = document.createElement("span");
  newSpanText.classList.add("nav-text");
  newSpanText.textContent = chapterName;

  const newSpanCircle = document.createElement("span");
  newSpanCircle.classList.add("circle");

  document.querySelector("nav").appendChild(newA).appendChild(newSpanText);
  document.querySelector("nav").appendChild(newA).appendChild(newSpanCircle);
});
