const container = document.querySelector(".container");
const courses = [
  {
    name: "Course 1",
    image: "images/c1.jpg"
  },
   {
    name: "Course 2",
    image: "images/c1.jpg"
  }

];
const showCourse = () => {
  let output = "";
  courses.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCourse);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
