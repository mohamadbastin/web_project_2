groupChat = {
  socket: null,

  mesgs: [
    {
      user: "reza",
      text: "asfjhdjkfasaasfasfkadskfhadshfjkasl",
      inchat: false,
    },
    { user: "ali", text: "hello", inchat: false },
    { user: "reza", text: "asffaf", inchat: false },
    { user: "mmd", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
    { user: "reza", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
  ],

  chat_box: "",
  username: "",
  user_id: 0,

  init: function (id, sock) {
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
  },

  send: function () {
    // console.log("asdasdf in send asf");

    var msg = document.getElementById("msg");
    if (msg.value.length > 0) {
      var newmsg = { user: this.user_id, text: msg.value };
      //this.mesgs.push(newmsg); // get a newmsg and push it
      groupChat.socket.emit("chat", newmsg);
      // console.log(groupChat.socket);
      // groupChat.pushMssg(newmsg);
    }
  },

  pushMssg: function (name, msssg) {
    console.log("this is the new msg: ", name, msssg);
    var newMssg = { user: name, text: msssg };
    this.mesgs.push(newMssg);
    var msg = document.getElementById("msg");
    msg.value = "";
    this.chat_box.value = "";
    var node = document.createElement("p");
    var textnode = document.createTextNode(`${newMssg.user}: ${newMssg.text}`);
    node.appendChild(textnode);
    this.chat_box.appendChild(node);
  },
};
