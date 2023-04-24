const moveImages = (imagesContainer, direction) => {
  const numberOfImages = imagesContainer.childElementCount;
  const sumWidthOfImages = imagesContainer.offsetWidth;
  const oneMovement = sumWidthOfImages / numberOfImages;
  const maxLeft = 0;
  const minRight =
    (-1 * sumWidthOfImages * (numberOfImages - 1)) / numberOfImages;

  let currentWidth = parseInt(imagesContainer.style.left) || 0;

  if (direction == "left") {
    currentWidth < maxLeft
      ? (currentWidth += oneMovement)
      : (currentWidth = minRight);
  } else if (direction == "right") {
    currentWidth > minRight
      ? (currentWidth -= oneMovement)
      : (currentWidth = maxLeft);
  }
  imagesContainer.setAttribute("style", `left: ${currentWidth}px`);
};

const images = document.querySelector(".wide-div-images");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  moveImages(images, "left");
});

rightArrow.addEventListener("click", () => {
  moveImages(images, "right");
});

const navigationDots = document.querySelectorAll(".dot");
navigationDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const currentDot = document.querySelector("#current-dot");
    const width = images.offsetWidth;
    const numOfImages = images.childElementCount;
    const dotPosition = Array.prototype.slice.call(navigationDots).indexOf(dot);
    const newPosition = (-1 * dotPosition * width) / numOfImages;
    images.setAttribute("style", `left: ${newPosition}px`);
    currentDot && currentDot.removeAttribute("id");
    dot.setAttribute("id", "current-dot");
  });
});
