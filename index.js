function show_value(x) {
    document.getElementById("slider_value").innerHTML = x;
}

function myFunction2() {

    var x = document.getElementById("frm1");
    var loopValue = document.getElementById("nummer1").value;
    var nummerBish = document.getElementById("bishNummer1").value;
    var nummerBosh = document.getElementById("nummerBosh1").value;
    var text = '';

    var i;
    for (i = 1; i <= loopValue; i++) {

        if (i % nummerBish == 0 && i % nummerBosh == 0) {

            text += "Bisch-Bosch" + ", ";


            //  document.write("Bisch-Bosch" + ", ");
        } else if (i % nummerBish == 0) {
            text += "Bisch" + ", ";


        } else if (i % nummerBosh == 0) {
            text += "Bosch" + ", ";

            //  document.write("Bosch" + ", ");
        } else {
            text += i + ", ";

            //document.write(i + ", ");
        }

    }
    document.getElementById("demo").innerHTML = text;


}
