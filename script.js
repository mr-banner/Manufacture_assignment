const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.querySelector(".timeline-item-content").style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    item.querySelector(".timeline-item-content").style.display = "none";
  });
});


