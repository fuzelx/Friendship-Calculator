function calculate() {
    var yourName = document.getElementById("yourName").value;
    var friendName = document.getElementById("friendName").value;
    var friendBirthdate = new Date(document.getElementById("friendBirthdate").value);
    var currentDate = new Date();
    var yearsDiff = Math.abs(currentDate.getFullYear() - friendBirthdate.getFullYear());
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    var friendshipYears = yearsDiff + randomNumber;
    document.getElementById("result").innerHTML = "Your friendship with " + friendName + " will last " + friendshipYears + " years.";
  }

  