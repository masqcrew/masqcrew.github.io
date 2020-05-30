var citizen_ages = [];
var new_citizen_ages = [];
var population = 0;
//Initialize age slots
for (i = 0; i < 100; i++) citizen_ages[i] = 0;



function NewCitizens(){

//Ages of 20 new people moving in (age 50 and under, excluding newborns)
  for (i = 0; i < 20; i++)
  {
    new_citizen_ages.push(Math.floor(Math.random() * 50) + 1)
  }
  //Sort in numerical order
  new_citizen_ages.sort(function(a, b) {
    return a - b;
  });

  //Add new citizens to current citizen count
  for (i = 0; i < new_citizen_ages.length; i++)
  {
  	var temp = new_citizen_ages[i];
      var temp2 = citizen_ages[temp];
      citizen_ages[temp] = temp2 + 1;
  }
  population = citizen_ages.reduce(function(a, b){
      return a + b;
  }, 0);

  document.getElementById("demo1").innerHTML = "New Citizens (ages): " + new_citizen_ages;
  document.getElementById("demo").innerHTML = "Citizen Count: " + citizen_ages;
  document.getElementById("sum").innerHTML = "Population: " + population;

  document.querySelector('#begin_button').textContent  = 'New Year';

  citizen_ages.pop();
  citizen_ages.unshift(0);
  new_citizen_ages = [];

}
