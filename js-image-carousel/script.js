const highlightCurrentDot = (imagesContainer, dotContainer) => {
  const width = imagesContainer.offsetWidth;
  const numOfImages = imagesContainer.childElementCount;
  const interval = width / numOfImages;
  const currentDot = document.querySelector("#current-dot");
  const currentPosition = parseInt(images.style.left) || 0;
  const dotPosition = Math.abs(currentPosition) / interval;
  currentDot && currentDot.removeAttribute("id");
  dotContainer[dotPosition].setAttribute("id", "current-dot");
};

const moveImages = (imagesContainer, dotContainer, direction) => {
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

  highlightCurrentDot(imagesContainer, dotContainer);
};

const images = document.querySelector(".wide-div-images");

const navigationDots = document.querySelectorAll(".dot");
navigationDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const width = images.offsetWidth;
    const numOfImages = images.childElementCount;
    const dotPosition = Array.prototype.slice.call(navigationDots).indexOf(dot);
    const newPosition = (-1 * dotPosition * width) / numOfImages;
    images.setAttribute("style", `left: ${newPosition}px`);
    highlightCurrentDot(images, navigationDots);
  });
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  moveImages(images, navigationDots, "left");
});

rightArrow.addEventListener("click", () => {
  moveImages(images, navigationDots, "right");
});

setInterval(() => {
  moveImages(images, navigationDots, "right");
  highlightCurrentDot(images, navigationDots);
}, 5000);
