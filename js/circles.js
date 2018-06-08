/* Additional sound effects from https://www.zapsplat.com */

// Key binding
var keyData = {
    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    1: {
        sound: new Howl({
            src: ['sounds/cartoon-impact.mp3']
        }),
        color: '#ff4d4d'
    },
    2: {
        sound: new Howl({
            src: ['sounds/cartoon-drip.mp3']
        }),
        color: '#b30000'
    },
    3: {
        sound: new Howl({
            src: ['sounds/cartoon-pull.mp3']
        }),
        color: '#59b300'
    },
    4: {
        sound: new Howl({
            src: ['sounds/cartoon-elastic.mp3']
        }),
        color: '#8600b3'
    },
    5: {
        sound: new Howl({
            src: ['sounds/cartoon-impact.mp3']
        }),
        color: '#76931f'
    },
    6: {
        sound: new Howl({
            src: ['sounds/cartoon-vibraphone.mp3']
        }),
        color: '#35c31c'
    },
    7: {
        sound: new Howl({
            src: ['sounds/brake.mp3']
        }),
        color: '#feb002'
    },
    8: {
        sound: new Howl({
            src: ['sounds/wooden-log.mp3']
        }),
        color: '#ef4fa6'
    },
    9: {
        sound: new Howl({
            src: ['sounds/metal-cage.mp3']
        }),
        color: '#7afea6'
    },
    0: {
        sound: new Howl({
            src: ['sounds/airlock-door.mp3']
        }),
        color: '#d5c7fb'
    }
}

var circles = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height); // if window shrinks, circles still visible
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);
    }
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 2;
        circles[i].scale(0.92);
        if (circles[i].area < 1) {
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
            i--; // decrement i so that the loop doesn't skip a circle because of .splice()
        }
    }
}

// Change background effect on spacebar keypress
document.addEventListener('keydown', spaceBar);

function spaceBar(e) {
    var keyCode = e.keyCode;
    if (keyCode === 32) {
        document.querySelector('#myCanvas').style.backgroundColor = getRandomColor();
    }
}

// Generate random background color
function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}