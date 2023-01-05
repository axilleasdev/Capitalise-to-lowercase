

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

    } else {
      output = input.toLowerCase();
    }
  } else if (mode === "capitalized") {
    output = input.toUpperCase();

  } else if (mode === "titled") {
    output =  convertToTitleCase(input);
 
} else if (mode === "toSentenceCase") {
  output =  toSentenceCase(input);

}



function toSentenceCase(text) {
  return input.toLowerCase().replace(/(^|\.\s+)\S/g, function(c) { return c.toUpperCase(); });
}
let sentenceCaseText = toSentenceCase(input);




function convertToTitleCase(input) {
  let words = input.split(" ");
  let titleCase = "";
  for (let word of words) {
  titleCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
  }
  return titleCase.trim();
}

let titleCase = convertToTitleCase(input);

  document.getElementById("output").innerHTML = output;
}