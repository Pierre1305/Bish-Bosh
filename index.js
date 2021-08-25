
function getBishBosh() {

    var loopValue = document.getElementById("nummer1").value;
    var nummerBish = document.getElementById("bishNummer1").value;
    var nummerBosh = document.getElementById("nummerBosh1").value;
    var text = '';


    var i;
    for (i = 1; i <= loopValue; i++) {


        if (i % nummerBish == 0 && i % nummerBosh == 0) {

            text += "Bisch-Bosch" + ", ";


        } else if (i % nummerBish == 0) {
            text += "Bisch" + ", ";



        } else if (i % nummerBosh == 0) {
            text += "Bosch" + ", ";



        } else {
            text += i + ", ";



        }


    }
    // document.getElementById("demo").appendChild(newDiv);
    document.getElementById("demo").innerHTML = text;


}
