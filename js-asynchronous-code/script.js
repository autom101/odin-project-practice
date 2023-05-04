const getImage = async (searchCriteria = "cats") => {
  const image = document.createElement("img");

  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=XIRuqRHikK9FfeRNlIx6SEtKTnuLVnae&s=" +
        searchCriteria,
      {
        mode: "cors",
      }
    );
    const giphyObject = await response.json();
    const newImageSource = giphyObject.data.images.original.url;
    image.src = newImageSource;
  } catch (error) {
    console.log(error);
  } finally {
    document.body.appendChild(image);
  }
};

const handleSearchForm = (searchForm) => {
  const searchData = new FormData(searchForm);
  const searchCriteria = searchData.get("search");
  const existingImage = document.querySelector("img");
  existingImage && document.body.removeChild(existingImage);
  getImage(searchCriteria);
};

const createSearchForm = () => {
  const searchForm = document.createElement("form");
  searchForm.setAttribute("action", "#");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("name", "search");
  searchInput.setAttribute("required", "true");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Search";

  searchForm.appendChild(searchInput);
  searchForm.appendChild(button);

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSearchForm(searchForm);
  });

  document.body.appendChild(searchForm);
};

onload = () => {
  createSearchForm();
};
