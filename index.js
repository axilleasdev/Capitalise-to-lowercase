function convertText() {
    let input = document.getElementById("inputText").value;
    let mode = document.getElementById("conversionMode").value;
    let output;


    if (mode === "lowercase") {

        output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    } else if (mode === "capitalized") {
        output = removeStress(input).toUpperCase();

    } else if (mode === "titled") {
        output = convertToTitleCase(input);

    } else if (mode === "toSentenceCase") {
        output = toSentenceCase(input);

    }


    function toSentenceCase(input) {
        return input.toLowerCase().replace(/(^|\.\s+)\S/g, function(c) { return c.toUpperCase(); });
    }


    function removeStress(input) {
        return input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

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

function copyText() {
    let text = document.getElementById("output").innerHTML;
    navigator.clipboard.writeText(text);
}

document.getElementById("btn-copy").addEventListener("click", function() {
    copyText();
});


document.getElementById('inputText').addEventListener("input", function() {
    convertText();
});
