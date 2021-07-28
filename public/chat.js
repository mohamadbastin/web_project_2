var msgID = 1;
groupChat = {
  socket: null,

  mesgs: [],

  chat_box: "",
  username: "",
  user_id: 0,

  init: function (id, sock) {
    this.msgID = 1;
    this.chat_box = document.getElementById("chatbox");
    // console.log("asdasdf in init asf");
    // console.log("entry dock",id, sock);
    groupChat.socket = sock;
    // console.log("outery gc socket", groupChat.socket);
    // this.username = attendees.user_name;

    // this.username = name;
    this.user_id = id;

    // for (var i in this.mesgs) {
    //     var node = document.createElement("p");
    //     var textnode = document.createTextNode(`${this.mesgs[i].user}: ${this.mesgs[i].text}`);
    //     node.appendChild(textnode);
    //     this.chat_box.appendChild(node);
    // }


    ///
    
  },

  send: function () {
    // console.log("asdasdf in send asf");

    var msg = document.getElementById("msg");
    if (msg.value.length > 0) {
      var newmsg = { user: this.user_id, text: msg.value ,score: null, hardness : null,accepted: null,ID: ++msgID, };
      //this.mesgs.push(newmsg); // get a newmsg and push it
      groupChat.socket.emit("chat", newmsg);
      // console.log(groupChat.socket);
      // groupChat.pushMssg(newmsg);
    }
  },

  

  pushMssg: function (user , text) {
    var newMssg = { user: user, text: text ,score: null , hardness : null, accepted: null,ID: msgID, };
    this.mesgs.push(newMssg);
    var msg = document.getElementById("msg");
    msg.value = "";
    this.chat_box.value = "";
    console.log(msgID);
    const html = `<div id =${msgID} style = "padding-bottom : 2px">
                  <span id ="score-${msgID}" class = "scorevalue"></span>
                  <span id ="hardness-${msgID}" class = "scorevalue"></span>
                  <br>
                  <span>${newMssg.user} : ${newMssg.text}</span>
                  <div class="dropdown" style="float : right; ">
                  <button > <i class="fa fa-ellipsis-v" style="float : right;"></i> </button>
                  <div class="dropdown-content" class="dropdoen-left" style="right: 4px;left: auto;width:50px;background-color:white;" >
                  <button class="dropdown-userbt" onclick = "groupChat.acceptReject(${msgID} , 'accept' )" >accept</button>
                  <button class="dropdown-userbt" onclick = "groupChat.acceptReject(${msgID} , 'reject')" >reject</button>
                  <input id = "hardness" class="dropdown-userbt" type ="range" min = "0" max = "10" style = "font-size = 10px" onchange="showhard(${msgID} , this.value)" />hardness
                  <input id = "score"  class="dropdown-userbt" type ="range" min = "0" max = "100"   onchange="showVal(${msgID} , this.value)" style = "font-size = 10px" />Score 
                  </div>
                  </div>
                  </div>
                  <br>
                  `;

    this.chat_box.insertAdjacentHTML("beforeend", html);
    console.log(document.getElementById(msgID));

    // document
    //   .getElementById(`isTrue-${newMssg.ID}`)
    //   .addEventListener("change", this.checkTrue);
    // document
    //   .getElementById(`score-${newMssg.ID}`)
    //   .addEventListener("keyup", this.giveScore);
    var node = document.getElementById(msgID);
    document.getElementById("chatbox").scrollTop = node.offsetHeight + node.offsetTop;
  },

  acceptReject: function (msgid , type) {
    let newMssg = groupChat.mesgs.find((m) => m.ID == msgid);
    if (type == "accept"){
      newMssg.accepted = 1 ;
      document.getElementById(newMssg.ID).className = "accept" ;
    }else if(type == "reject"){
      newMssg.accepted = 0 ;
      document.getElementById(newMssg.ID).className = "reject" ;
    
    }
    // alert(type);
    console.log(newMssg);
    
  },

};


function removeAllChildNodes() {
  var parent = document.getElementById("chatbox");
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function showVal(msg , newVal){
  let newMssg = groupChat.mesgs.find((m) => m.ID == msg);
  newMssg.score = newVal ;

  document.getElementById("score-"+newMssg.ID).innerHTML= "Score: " +newVal;

}

function showhard(msg , newVal){
  let newMssg = groupChat.mesgs.find((m) => m.ID == msg);
  newMssg.hardness = newVal ;

  document.getElementById("hardness-"+newMssg.ID).innerHTML= "Hardness: " +newVal;

}
