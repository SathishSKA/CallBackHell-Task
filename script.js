window.onload = function () {
  var txt = document.getElementById("text");
  var msg = document.getElementById("message");
  msg.style.visibility = "hidden";
  txt.innerHTML = 10;
  setTimeout(() => {
    txt.innerHTML = 9;
    setTimeout(() => {
      txt.innerHTML = 8;
      setTimeout(() => {
        txt.innerHTML = 7;
        setTimeout(() => {
          txt.innerHTML = 6;
          setTimeout(() => {
            txt.innerHTML = 5;
            setTimeout(() => {
              txt.innerHTML = 4;
              setTimeout(() => {
                txt.innerHTML = 3;
                setTimeout(() => {
                  txt.innerHTML = 2;
                  setTimeout(() => {
                    txt.innerHTML = 1;
                    setTimeout(() => {
                      msg.style.visibility = "visible";
                      txt.style.visibility = "hidden";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
