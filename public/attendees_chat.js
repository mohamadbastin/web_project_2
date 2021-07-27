var arrayVariablerole = [];
var arrayVariable = [];
var arrayLength = 0;
var sockett;

$(document).ready(function () {
  
  (arrayVariable = []), (arrayLength = arrayVariable.length);
  arrayVariablerole = [];
  for (i = 0; i < arrayLength; i++) {
    var div = document.createElement("div");
    div.id = i;
    div.innerHTML = arrayVariable[i] + "        (" + arrayVariablerole[i] + ")";
    document.getElementById("Attendees").appendChild(div);
    $("#" + i).prepend('<i class="fa fa-user" style="margin : 5px;"></i>');
    $("#" + i).css({
      "background-color": "rgb(216, 211, 211)",
      "border-color": "#111",
      "border-radius": "20px",
      margin: "5px",
      height: "30px",
      padding: "6px 3px ",
    });
    $("#" + i).prepend(
      '<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>'
    );
  }

  var user_role = "host";
  if (user_role == "host") {
    $(".presenter").show();
    $(".activate_mic").show();
    $(".leftslidebar").show();
    $(".button-user").show();
    $(".chng-host").show();
    $(".chng-pres").show();
    $(".chng-mic").show();
  }
  if (user_role == "presenter") {
    $(".presenter").show();
    $(".activate_mic").show();
    $(".leftslidebar").show();
    $(".button-user").show();
    $(".chng-mic").show();
  }
  opentab(event, 'Group chat');  // groupChat.init();
  // document.getElementById("export-attendees").addEventListener("click", CreateReport());
});

function lets_voicev(){

}

function opentab(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
// function join(){
//   arrayVariable = ['ali hasani','mina nayernia','zahra sedaqat','mamad bastin','yekta kamane'];
//   arrayVariablerole = ['host','presenter','presenter','presenter','presenter'];
// }

function addUser() {
  // this.arrayVariable = arrayVariable;
  // this.arrayVariablerole = arrayVariablerole;
  // var username = document.getElementById("enter_username");
  // console.log(username.value);
  // this.user_name = username;
  // this.role = "ordinary";
  // attendees.add_new_user(username, "ordinary");
  //this.arrayVariable.push(username.value);
  //this.arrayVariablerole.push('ordinary');
}

function add_new_user(user_name, role) {
  // console.log("im here");
  arrayVariable.push(user_name);
  arrayVariablerole.push(role);
  arrayLength = arrayVariable.length;
  pushAttendee(user_name, role);
}

/* newly added function below */
function pushAttendee(username, role) {
  var div = document.createElement("div");
  var i = arrayLength - 1;
  div.id = i;
  // console.log(div.id);
  div.innerHTML = username + "        (" + role + ")";
  document.getElementById("Attendees").appendChild(div);
  // $("#" +i).prepend('<i class="fa fa-userp" style="margin : 5px;"></i>');
  // $("#" + i ).css({"background-color": "#DBD7CB", "border": "none" , "border-radius" : "0px" , "margin" : "5px"  , "height" : "20px" , "padding" : "10px 20px", "vertical-align" : "middle" }); ;
  // $("#" + i).prepend('<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>');
  $("#" + i).prepend('<i class="fa fa-user" style="margin : 5px;"></i>');
  $("#" + i).css({
    "background-color": "rgb(216, 211, 211)",
    "border-color": "#111",
    "border-radius": "20px",
    margin: "5px",
    height: "30px",
    padding: "6px 3px ",
  });
  $("#" + i).prepend(
    '<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>'
  );
}


function CreateReport(ReportName = ''){
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  ReportName = ReportName?ReportName+'.xls':''+'Attendeeslist.xls';//modify excle sheet name here 
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  if(navigator.msSaveOrOpenBlob){
      var blob = new Blob(['\ufeff'], {
          type: dataType
      });
      navigator.msSaveOrOpenBlob( blob, ReportName);
  }else{
      downloadLink.href = 'data:' + dataType + ', ' ;
      downloadLink.href += `<table><tbody>
      <tr><th>Name</th><th>Role</th></tr>`;
      for (i=0; i<arrayVariable.length; i++){
        downloadLink.href += '<tr><td>' + arrayVariable[i] + '</td>';
        downloadLink.href += '<td>' + arrayVariablerole[i] + '</td></tr>';
      }
      downloadLink.href += `</tbody><table>`;
      downloadLink.download = ReportName;
      downloadLink.click();
  }
}


function allow_mic() {
  alert("disable or enable mic");
}

function des_en_mic() {
  var x = $("#activate_mic").val();
  alert(x);

  if (x == "#009900") {
    $("#activate_mic").css({ background: "#e60000", "border-radius": "30px" }); //red
    $("#activate_mic").val("#e60000");
  } else {
    $("#activate_mic").css({ background: "#009900", "border-radius": "30px" }); //green
    $("#activate_mic").val("#009900");
  }
}

////////////////////////////////////////////////////////////////start from here

// attendees = {
//   //WhiteboardUi.init($("#canvas"));
//   arrayVariable : ['ali hasani','mina nayernia','zahra sedaqat','mamad bastin','yekta kamane'],
//   arrayLength : 0,
//   arrayVariablerole : ['host','presenter','presenter','presenter','presenter'],
//   user_role : "host",
//   user_name : "ali",

//   init : function(){
//     this.arrayLength = this.arrayVariable.length;
//     console.log("testing");
//     for (i = 0; i < this.arrayLength; i++) {

//       var div = document.createElement('div');
//       div.id = i;
//       div.innerHTML = this.arrayVariable[i] + "        (" + this.arrayVariablerole[i] + ")";
//       console.log(document.getElementById('rightslidebar'));
//       document.getElementById('Attendees').appendChild(div);
//       // $("#" +i).prepend('<i class="fa fa-userp" style="margin : 5px;"></i>');
//       $("#" + i ).css({"background-color": "#DBD7CB", "border": "none" , "border-radius" : "0px" , "margin" : "5px"  , "height" : "20px" , "padding" : "10px 20px", "vertical-align" : "middle" }); ;
//       $("#" + i).prepend('<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>');
//     }

//     if (this.user_role == "host"){
//       $(".presenter").show();
//       $(".activate_mic").show();
//       $(".leftslidebar").show();
//       $(".button-user").show();
//       $(".chng-host").show();
//       $(".chng-pres").show();
//       $(".chng-mic").show();
//     }

//     if(this.user_role == "presenter"){
//       $(".presenter").show();
//       $(".activate_mic").show();
//       $(".leftslidebar").show();
//       $(".button-user").show();
//       $(".chng-mic").show();
//     }

//   },

//   join : function(){
//     arrayVariable = ['ali hasani','mina nayernia','zahra sedaqat','mamad bastin','yekta kamane'];
//     arrayVariablerole = ['host','presenter','presenter','presenter','presenter'];
//   },

//   addUser : function(){
//     this.arrayVariable = arrayVariable;
//     this.arrayVariablerole = arrayVariablerole;
//     var username = document.getElementById("enter_username");
//     this.user_name = username;
//     this.role = "ordinary";
//     attendees.add_new_user(username, "ordinary");
//     //this.arrayVariable.push(username.value);
//     //this.arrayVariablerole.push('ordinary');
//   },

//   add_new_user : function(user_name, role){
//     this.arrayVariable.push(user_name.value);
//     this.arrayVariablerole.push(role);
//   },

//         /* newly added function below */

//   pushAttendee : function(username, role){
//     var div = document.createElement('div');
//     div.id = i;
//     div.innerHTML = username + "        (" + role + ")";
//     document.getElementById('chatmat').appendChild(div);
//     // $("#" +i).prepend('<i class="fa fa-userp" style="margin : 5px;"></i>');
//     $("#" + i ).css({"background-color": "#DBD7CB", "border": "none" , "border-radius" : "0px" , "margin" : "5px"  , "height" : "20px" , "padding" : "10px 20px", "vertical-align" : "middle" }); ;
//     $("#" + i).prepend('<div class="dropdown" style="float : right; "> <button class="button-user"> <i class="fa fa-ellipsis-v" style="float : right;"></i> </button> <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" ><button class="dropdown-userbt chng-host">change to host</button><button class="dropdown-userbt chng-pres" >change to presenter</button> <button class="dropdown-userbt chng-mic" id="chng-mic" onclick="allow_mic(this)" value="#000" >Disable/Enalble mic</button> </div></div>');

//   },

//   allow_mic : function(){
//     alert("disable or enable mic");
//   },

//   des_en_mic : function(){

//     var x = $("#activate_mic").val();
//     alert(x);

//     if ( x == "#009900"){
//       $("#activate_mic").css({'background': '#e60000' , 'border-radius' : '30px' ,}) ; //red
//       $("#activate_mic").val("#e60000");
//     }
//     else{
//       $("#activate_mic").css({'background': '#009900', 'border-radius' : '30px' ,}) ; //green
//       $("#activate_mic").val("#009900");
//     }

//   }

// }

// attendees.init();
