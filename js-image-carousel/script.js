const moveImages = (
  imagesContainer,
  sumWidthOfImages,
  numberOfImages,
  direction
) => {
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
const width = 1800;
const numOfImages = 3;

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  moveImages(images, width, numOfImages, "left");
});

rightArrow.addEventListener("click", () => {
  moveImages(images, width, numOfImages, "right");
});
