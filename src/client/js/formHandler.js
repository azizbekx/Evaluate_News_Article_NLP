

function handleSubmit(event) {
  event.preventDefault();

  var submitButton = document.getElementById("submit-btn");
  const polarity = document.getElementById("polarity");
  const polConfidence = document.getElementById("polarity-confidence");
  const subjectivity = document.getElementById("subjectivity");
  const subConfidence = document.getElementById("subjectivity-confidence");
  const text = document.getElementById("text");
  const alertURL = document.getElementById("alertURL")


  var inputURL = document.querySelectorAll("input[name=input-URL");
  
  // check what text was put into the form field

  console.log("::: Form Submitted :::");

  if (Client.checkForURL(JSON.parse(JSON.stringify(inputURL[0].value)))) {
    console.log("Wokring your reques...");
    submitButton.setAttribute("disabled", true);
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
        //to console your browser
        console.log(res);
        alertURL.classList.remove("display");
        // ------UPDATE UI--------
        submitButton.removeAttribute("disabled");
        polarity.innerHTML = res.polarity;
        polConfidence.innerHTML = res.polarity_confidence;
        subjectivity.innerHTML = res.subjectivity;
        subConfidence.innerHTML = res.subjectivity_confidence
        text.innerHTML = res.text
        setTimeout(function(){ 
          alertURL.classList.add("display")
        }, 5000);
      });
  } else {
    alert("---INVALID URL--- please try again")
   
  }
}
export { handleSubmit };
