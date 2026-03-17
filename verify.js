function verifyCertificate() {
  const id = document.getElementById("certID").value;

  fetch("certificates.json")
    .then(response => response.json())
    .then(data => {
      const result = data.find(cert => cert.id === id);

      if(result){
        document.getElementById("output").innerHTML =
        "Valid Certificate<br>Name: " + result.name +
        "<br>Event: " + result.event +
        "<br>Date: " + result.date;
      } else {
        document.getElementById("output").innerHTML =
        "Invalid Certificate";
      }
    });
}