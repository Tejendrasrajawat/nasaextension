document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "nMrwmrWvOlH0FXA7QuT1Exl8sfpeZptcAGQAGeK8";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const titleElement = document.getElementById("title");
      const dateElement = document.getElementById("date");

      const imageElement = document.getElementById("image");

      titleElement.textContent = data.title;
      dateElement.textContent = `Date: ${data.date}`;

      imageElement.src = data.url;
      imageElement.style.width = "300px";
      imageElement.style.height = "200px";
      imageElement.style.borderRadius = "5px";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const marsBtn = document.getElementById("marsRover");
  marsBtn.addEventListener("click", function () {
    window.location.href = "marsRover.html";
  });
});
