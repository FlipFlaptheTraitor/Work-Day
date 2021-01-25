$(document).ready(function() {
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));// parses localstorage string
  // used to create initial array if nothing is stored
  if (storedPlans !== null) {
    plannerArr = storedPlans;
  } else {
    plannerArr = new Array(9);
  }
  const test = false; //tests var that is used to match expresions to a specific string checking for patterns
  const currentTime = moment().format('MMMM Do YYYY');//sets format for dates
  let day = moment().format('H'); // establishes 24 hour format
  let $dateHeading = $('#headerDate'); //sets date in header
  $dateHeading.text(currentTime);
  let $plannerDiv = $('#plannerContent');// set variable and refers to the html main section of the planner
   $plannerDiv.empty();
  // for loop establishes a 9 hour workday and peramiters for planner
  for (let workday = 9; workday <= 17; workday++) {
    let index = workday - 9;
   let $rowDiv = $('<div>');// creates rows for divide 
   $rowDiv.addClass('row');
   $rowDiv.addClass('plannerRow');
   $rowDiv.attr('workday-index',workday);
    let $col5TimeDiv = $('<div>');//creates collumn section whcih containes input box and planner times
    $col5TimeDiv.addClass('col-md-5');
 const $timeBoxSpn = $('<span>'); // creates timebox
    $timeBoxSpn.attr('class','timeBox');
     $rowDiv.append($col5TimeDiv);
    $col5TimeDiv.append($timeBoxSpn);
    let displayHour = 0; 
    let timeOfDay = "";
    if (workday > 12) { //if statement that displays AM or PM 
      displayHour = workday-12 ;
      timeOfDay = "pm";
    } else {
      displayHour = workday;
      timeOfDay = "am";
    }
$timeBoxSpn.text(`${displayHour} ${timeOfDay}`);// fills timebox with time and AM or PM 
   // planner input 
    let $plannerSpn = $('<input>');
    $plannerSpn.attr('type','text');
    $plannerSpn.attr('id',`input-${index}`);
    $plannerSpn.attr('workday-index',index);
    $plannerSpn.attr('class'); 
    $plannerSpn.val( plannerArr[index] );// implements array into the planner
    let $col6IptDiv = $('<div>');// width of input
    $col6IptDiv.addClass('col-md-6');
    $rowDiv.append($col6IptDiv);
    $col6IptDiv.append($plannerSpn);
    let $col2SaveDiv = $('<div>');// save div
    $col2SaveDiv.addClass('col-md-2');
    //save btn
    let $saveBtn = $('<i>');
    $saveBtn.attr('class',"far fa-save ");
    $saveBtn.attr('id',`saveid-${index}`);
    $saveBtn.attr('save-id',index);
    $rowDiv.append($col2SaveDiv);// establishes position in rows
    $col2SaveDiv.append($saveBtn);
    
    // set row color based on time
    updateRowColor($rowDiv, workday);
    
    // add row to planner container
    $plannerDiv.append($rowDiv);
  };

  // function to update row color
  function updateRowColor ($hourRow,workday) { 

    if ( workday < day) {

      if (test) 
      $hourRow.css("background-color","brown")
    } else if ( workday > day) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","green")
    } else {
      if (test) { console.log("equal"); }
      $hourRow.css("background-color","red")
    }
  };
 s
  });