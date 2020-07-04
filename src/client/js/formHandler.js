// import { checkForURL } from "./URLChecker";

function handleSubmit(event) {
  event.preventDefault();

  var inputURL = document.querySelectorAll("input[name=input-URL");

  // check what text was put into the form field

  console.log("::: Form Submitted :::");

  if (Client.checkForURL(JSON.parse(JSON.stringify(inputURL[0].value)))) {
    console.log("Wokring your reques...");

    fetch("http://localhost:5000/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputURL[0].value }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById("results").innerHTML = res;
      });
  } else {
    console.log("link yaroqsiz");
  }
}
export { handleSubmit };
