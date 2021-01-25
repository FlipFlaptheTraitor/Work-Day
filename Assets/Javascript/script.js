// main function used
$(document).ready(function() {
 
  //var section
   const currenttime = moment().format('MMMM Do YYYY');//sets format for dates
   const testFlag = false; //tests var that is used to match expresions to a specific string checking for patterns
   const save = "./assets/images/save.png";
   let currentTimeHourAM = moment().format('H');
     let currentTimeHourPM = moment().format('h');
     let savedPlanerInfo = JSON.parse(localStorage.getItem("savedPlanerInfo"));//local storage 
   let $dateHeading = $('#HeaderDate'); //sets date in header
   $dateHeading.text(currentTime);
  // let $timeHeading = $('#currentTime');//sets time in header
  // $timeHeading.text(currentTime);
  let $plannerDiv = $('#plannerContent');// set variable and refers to the html main section of the planner
  $plannerDiv.empty();
 
  //planner format
  let $rowDiv = $('<div>'); // establishes the div section in row format
  $rowDiv.addClass('row');
  $rowDiv.addClass('plannerRow');
  $rowDiv.attr('hour-index',hour);
 
     let $d = $('<input>'); // planner input
     $dailyPlanSpn.attr('id',`input-${index}`);
     $dailyPlanSpn.attr('hour-index',index);
     $dailyPlanSpn.attr('type','text');
     $dailyPlanSpn.attr('class','dailyPlan');
 
     let $col1SaveDiv = $('<div>');// planer save
     $col1SaveDiv.addClass('col-md-1');
     let $saveBtn = $('<i>');
     $saveBtn.attr('id',`saveid-${index}`);
     $saveBtn.attr('save-id',index);
     $saveBtn.attr('class',"far fa-save save");
    $rowDiv.append($col1SaveDiv);
     $col1SaveDiv.append($saveBtn);
 
 
 
 // stores info as long as info in inputed
 if (savedPlanerInfo !== null) {
   plannertArr = savedPlanerInfo;
 }
   // build calendar by row for fix set of hours
   for (let hour = 9; hour <= 17; hour++) {
     // index for array use offset from hour
     let index = hour - 9;
   }
   });

   

