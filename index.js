
// if(document.getElementById('conversionMode').value == "lowercase") {
//     document.getElementById("labelFirstLetter").style.display = "block";
    
// } else {
//     document.getElementById("labelFirstLetter").style.display = "none";
// }



    function convertText() {
      let input = document.getElementById("inputText").value;
      let mode = document.getElementById("conversionMode").value;
      let output;
      if (mode === "lowercase") {
        if (keepFirstLetterCapitalized.checked == true) {
        output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

        }
        else {
            output = input.toLowerCase();
        }
      } else if (mode === "capitalized") {
        output = input.toUpperCase();

      }
      document.getElementById("output").innerHTML = output;
    }
