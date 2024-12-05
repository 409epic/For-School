function storeMon() {
    const mo1 = document.getElementById("brMon").value;
    const mo2 = document.getElementById("sn1Mon").value;
    const mo3 = document.getElementById("luMon").value;
    const mo4 = document.getElementById("sn2Mon").value;
    const mo5 = document.getElementById("diMon").value;
    planWindow.document.write("<br><u>Monday</u><br> Breakfast: " + mo1 + " Snack: " + mo2 + " Lunch: " + mo3 + " Snack: " + mo4 + " Dinner: " + mo5 + "<br>")
}

function storeTue() {
    const tu1 = document.getElementById("brTue").value;
    const tu2 = document.getElementById("sn1Tue").value;
    const tu3 = document.getElementById("luTue").value;
    const tu4 = document.getElementById("sn2Tue").value;
    const tu5 = document.getElementById("diTue").value;
    planWindow.document.write("<br><u>Tuesday</u><br> Breakfast: " + tu1 + " Snack: " + tu2 + " Lunch: " + tu3 + " Snack: " + tu4 + " Dinner: " + tu5 + "<br>")
}

function storeWed() {
    const we1 = document.getElementById("brWed").value;
    const we2 = document.getElementById("sn1Wed").value;
    const we3 = document.getElementById("luWed").value;
    const we4 = document.getElementById("sn2Wed").value;
    const we5 = document.getElementById("diWed").value;
    planWindow.document.write("<br><u>Wednesday</u><br> Breakfast: " + we1 + " Snack: " + we2 + " Lunch: " + we3 + " Snack: " + we4 + " Dinner: " + we5 + "<br>")
}

function storeThu() {
    const th1 = document.getElementById("brThu").value;
    const th2 = document.getElementById("sn1Thu").value;
    const th3 = document.getElementById("luThu").value;
    const th4 = document.getElementById("sn2Thu").value;
    const th5 = document.getElementById("diThu").value;
    planWindow.document.write("<br><u>Thursday</u><br> Breakfast: " + th1 + " Snack: " + th2 + " Lunch: " + th3 + " Snack: " + th4 + " Dinner: " + th5 + "<br>")
}

function storeFri() {
    const fr1 = document.getElementById("brFri").value;
    const fr2 = document.getElementById("sn1Fri").value;
    const fr3 = document.getElementById("luFri").value;
    const fr4 = document.getElementById("sn2Fri").value;
    const fr5 = document.getElementById("diFri").value;
    planWindow.document.write("<br><u>Friday</u><br> Breakfast: " + fr1 + " Snack: " + fr2 + " Lunch: " + fr3 + " Snack: " + fr4 + " Dinner: " + fr5 + "<br>")
}

function storeSat() {
    const sa1 = document.getElementById("brSat").value;
    const sa2 = document.getElementById("sn1Sat").value;
    const sa3 = document.getElementById("luSat").value;
    const sa4 = document.getElementById("sn2Sat").value;
    const sa5 = document.getElementById("diSat").value;
    planWindow.document.write("<br><u>Saturday</u><br> Breakfast: " + sa1 + " Snack: " + sa2 + " Lunch: " + sa3 + " Snack: " + sa4 + " Dinner: " + sa5 + "<br>")
}

function storeSun() {
    const su1 = document.getElementById("brSun").value;
    const su2 = document.getElementById("sn1Sun").value;
    const su3 = document.getElementById("luSun").value;
    const su4 = document.getElementById("sn2Sun").value;
    const su5 = document.getElementById("diSun").value;
    planWindow.document.write("<br><u>Sunday</u><br> Breakfast: " + su1 + " Snack: " + su2 + " Lunch: " + su3 + " Snack: " + su4 + " Dinner: " + su5 + "<br>")
}

function validateEmail() {
    const input = document.getElementById('email').value;
    const error = document.getElementById('error');
    const filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (filter.test(input)) {
      error.textContent = "";
    } else {
      error.textContent = "Please enter a valid email address.";
    }
  }

document.getElementById("submit").addEventListener('click',display)
function display()
{
    name1 = document.getElementById("name").value;
    email1 = document.getElementById("email").value;
    goal1 = document.getElementById("goal").value;

    name2 = ("<html>\n <body id = 'planner'> <b>Name:</b> " + name1);
    email2 =("<br> <b>Email:</b> " + email1);
    goal2 = ("<br> <b>Goal:</b> " + goal1 + "<br></body>\n");
    download = ("<p>    <a download='Final.txt' href='#'\n        id='link'>Download</a>    <script>        let abc = new Blob([document.getElementById('planner')\n                {type: 'text/plain'}\n        link.href = URL.createObjectURL(abc);)</script></p>\n");
    print = ("<p><script>\n function printPage() {\n    window.print();\n}\n</script>\n<input type='button' value='Print' onclick='printPage()' /></p>\n</html>");


    planWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    planWindow.document.write(name2);
    planWindow.document.write(email2);
    planWindow.document.write(goal2);
    storeMon()
    storeTue()
    storeWed()
    storeThu()
    storeFri()
    storeSat()
    storeSun()
    planWindow.document.write(download);
    planWindow.document.write(print);
    planWindow.document.write("Perfectly Portioned Fitness")
}
