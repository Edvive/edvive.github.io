/*

Play Football with A Bottle

____ ________ ---- ________
Verb Activity      Subject

*/

const SPREADSHEET_ID = "1VVevCDW91LZd2Yv_zMYHEOMQypheG6WQM5VQUf5jAcY";

var lightState = 0;

window.onload = function() {
    // let ajax = new XMLHttpRequest();

    $.ajax({
        url: `https://gsx2json.com/api?id=${SPREADSHEET_ID}&columns=false`
    }).done(function(data) {
        data = data.rows[0];

        for(button of document.getElementById("redirects").children) {
            button.setAttribute("href", data[button.dataset.ref]);
        }
    }).always(() => {
        for(button of document.getElementById("redirects").children) {
            button.classList.remove("disabled-link");
        }
    })

    // ajax.onload = function() {
    //     if(ajax.status == ajax.DONE && ajax.readyState == ajax.)
    // }
}

document.getElementById("lights").addEventListener('change', (ev) => {
    // document.body.classList.add("bright-body");
    // ev.target.checked ? document.html.classList.add("bright-body") : document.html.classList.remove("bright-body");
    ev.target.checked ? document.body.classList.add("bright-body") : document.body.classList.remove("bright-body");
    
    // console.log(Array.from(document.getElementsByClassName("btn")))
    for (button of document.getElementsByClassName("btn")) {
        ev.target.checked ? button.classList.add("bright-btn") : button.classList.remove("bright-btn");
    }
})

Array.prototype.pickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}



















// window.onload = () => {
//     if (window.innerWidth < 992) {
//         // true for mobile device
//         document.getElementById("task").innerHTML = "📱 Shake 📱";
//     }
// }

// const shakeEvent = new Shake({ threshold: 15 });

// shakeEvent.start();

// window.addEventListener('shake', shaked, false);

// window.onkeypress = function (ev) {
//     if (ev.code == "Space") {
//         shaked();
//     }
// }

// function shaked() {
//     document.getElementById('task').innerHTML = generate();

//     $("#taskCard").effect("shake", { direction: "right", times: 3, distance: 10 });
//     // alert(generate());
// }

// function generate() {
//     let cat = Math.round(Math.random() * 4);

//     let verb = verbs[cat];
//     let subject = subjects[cat];
//     let extension = extensions[cat];

//     return verb.pickRandom().concat(' ', subject.pickRandom(), ' ', extension.pickRandom(), '.');
// }