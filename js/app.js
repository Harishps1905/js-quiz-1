check = () => {
    var qus1 = document.quiz.question1.value;
    var qus2 = document.quiz.question2.value;
    var qus3 = document.quiz.question3.value;
    var correct = 0;

    if (qus1 == "Delhi") {
        correct++;
    }
    if (qus2 == "Mahathma Gandhi") {
        correct++;
    }
    if (qus3 == "1947") {
        correct++;
    }

    var messages = ["Good job DOOD", "Thats ok man", "You really need to work on it  DOOD"];
    var pictures = ["../images/winner.jpg", "../images/notbad.jpg", "../images/lose.jpg"];
    var range = 0;

    if (correct < 1) {
        range = 2;        
    }
    if ((correct > 0) && (correct < 3)) {
        range = 1
    }
    if (correct > 2) {
        range = 0;
    }

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("pic").src = pictures[range];
    document.getElementById("num-crt").innerHTML = "you got " + correct + " correct";
    document.getElementById("after-finish").style.visibility = "visible";
}
