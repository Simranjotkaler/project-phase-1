// Creating variables for HTML Elements
let myTasks = document.querySelector('ul');
let myAddButton = document.querySelector('button');
let data = document.querySelector('input');
let data1 = document.querySelector('input[type="date"]');
let data2 = document.querySelector('input[type="time"]');

// Added Event Handler on Add Button
myAddButton.onclick = listAppend;

function listAppend() {
    // A Checkbox For completion of tasks
    let tCheckBox = document.createElement('input');
    tCheckBox.type = 'checkbox';
    tCheckBox.classList = 'checkBoxClass';
    tCheckBox.onclick = CompleteTask;

    // Element to show Task Name
    let tName = document.createElement('h4');
    tName.textContent = data.value;


  //date function
  let datecontrol = document.createElement('h5');
  datecontrol.textContent = data1.value;

  //time element
  let time = document.createElement('h6');
  time.textContent = data2.value;

    // Remove Button for Completed Tasks
    let tDelete = document.createElement('Button');
    tDelete.textContent = 'Remove';
    tDelete.onclick = RemoveTask;

    // List element for unordered list
    let taskLi = document.createElement('li');
    taskLi.classList = 'incomplete';
    taskLi.appendChild(tCheckBox);
    taskLi.appendChild(tName);
    taskLi.appendChild(datecontrol);
    taskLi.appendChild(time);
    taskLi.appendChild(tDelete);


    // prepend to append on top
    myTasks.prepend(taskLi);
}

function CompleteTask(e) {
    // changing class of list elemnt to update it's decoration
    e.target.parentNode.classList = 'complete';
    // rearangement of task
    e.target.parentNode.parentNode.appendChild(e.target.parentNode);
}

function RemoveTask(e) {
    // removing task from parent node
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}


//function for the Weather
function seeweather( cityid ){
  var key = '2dbf8e0d2e4bca96dc240feb4826f1c7'; //i got this key by registering to the open weather map .org website .
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityid+ '&appid=' + key)
  .then(function(resp) { return resp.json()})
  .then(function(data){
    letsseetheweather(data);
  })
  .catch(function(){    //to catch the error

  });
}

window.onload = function(){
  seeweather( 5894171 );  //city id of barrie taken from bbc.com
}

function letsseetheweather( c ){
  var celcius = Math.round(parseFloat(c.main.temp)-273.15);     //converts the temp to celcius
  var fahrenheit = Math.round(((parseFloat(c.main.temp)-273.15)*1.8)+32);   //converts to fahrenheit

  document.getElementById('description').innerHTML = c.weather[0].description;    //getting the description
  document.getElementById('temp').innerHTML = celcius + '&deg;' ;    //getting the temperature
  document.getElementById('location').innerHTML = c.name;     //getting the location


  if( description.indexOf('rain') > 0 ) {
  document.className = 'rainy';    //display color for rain
} else if( description.indexOf('cloud') > 0 ) {
  document.className = 'cloudy';    //display color for cloudy
} else if( description.indexOf('sunny') > 0 ) {
  document.className = 'sunny';     //display color for sunny
  }
}


//drag and drop api

// function for the drop
function drop(ev){
  ev.preventDefault(ev);
}


//function for drag
function drag(ev){
  ev.dataTransfer.setData("Text", ev.target.id);
}


//function for drag and drop
function dragdrop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
