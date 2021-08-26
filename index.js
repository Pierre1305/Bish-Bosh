
function emptyString() {
    var newString = '';
    document.getElementById("demo").innerHTML = newString;
}

function getBishBosh() {

    var nummerValue = document.getElementById("nummer1").value;
    var nummerBish = document.getElementById("bishNummer1").value;
    var nummerBosh = document.getElementById("nummerBosh1").value;
    var text = '';


    var i;
    for (i = 1; i <= nummerValue; i++) {


        if (i % nummerBish == 0 && i % nummerBosh == 0) {

            text = "Bisch-Bosch";





        } else if (i % nummerBish == 0) {
            text = "Bisch";




        } else if (i % nummerBosh == 0) {
            text = "Bosch";




        } else {
            text = i;

        }

        var newDiv = document.createElement('div');
        newDiv.innerHTML = text;

        document.getElementById("demo").appendChild(newDiv);


    }



}
