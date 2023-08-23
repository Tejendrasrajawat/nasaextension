document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "nMrwmrWvOlH0FXA7QuT1Exl8sfpeZptcAGQAGeK8";
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const photos = data.photos;
      console.log(data.photos);

      // Displaying on the DOM
      const photoContainer = document.getElementById("photo-container");

      photos.forEach((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo";

        const imgElement = document.createElement("img");
        imgElement.src = photo.img_src;
        imgElement.style.width = "300px";
        imgElement.style.height = "200px";
        imgElement.style.borderRadius = "5px";

        const roverNameElement = document.createElement("p");
        roverNameElement.textContent = `Rover Name: ${photo.rover.name}`;

        const earth_date_element = document.createElement("p");
        earth_date_element.textContent = `Date: ${photo.earth_date}`;

        photoDiv.appendChild(roverNameElement);
        photoDiv.appendChild(earth_date_element);
        photoDiv.appendChild(imgElement);

        photoContainer.appendChild(photoDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
