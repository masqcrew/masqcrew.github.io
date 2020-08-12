var Citizens = {
 ages: [],
 new_ages: [],
 age_cap: 101,
 new_number: 20,
 population: 0
};

//Initialize age slots
for (i = 0; i < Citizens.age_cap; i++) Citizens.ages[i] = 0;



function NewCitizens(){
  //button_off();
  //enable Tables button


//Ages of 20 new people moving in (age 50 and under, excluding newborns)
  for (i = 0; i < Citizens.new_number; i++)
  {
    Citizens.new_ages.push(Math.floor(Math.random() * 25) + 1)
  }
  //Sort in numerical order
  Citizens.new_ages.sort(function(a, b) {
    return a - b;
  });

  //Add new citizens to current citizen count
  for (i = 0; i < Citizens.new_ages.length; i++)
  {
  	var temp = Citizens.new_ages[i];
      var temp2 = Citizens.ages[temp];
      Citizens.ages[temp] = temp2 + 1;
  }
  Citizens.population = Citizens.ages.reduce(function(a, b){
      return a + b;
  }, 0);

  document.getElementById("pop").innerHTML = Citizens.population;



  Citizens.ages.pop();
  Citizens.ages.unshift(0);
  Citizens.new_ages = [];

}

function agesTable(){
  button_off();
  var text = "<table><tr><th>Age</th><th>Count</th></tr>";
  var text2 = "";
  var text3 = "</table>";

  for(var i = 0; i < Citizens.ages.length; i++)
	{
		text2 = text2 += ('<tr><td>' + i + '</td><td>' + Citizens.ages[i] + '</td></tr>');
	}
  text = text + text2 + text3;
  document.getElementById("text").innerHTML = text;
  document.getElementById("text").style.display = "flex";
}

function functionConfirm(msg, myYes, myNo) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function() {
            confirmBox.hide();
                });
            confirmBox.find(".yes").click(myYes);
            confirmBox.find(".no").click(myNo);
            confirmBox.show();
}
