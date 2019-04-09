var i = 0;
var interval = 0;

function counter(interval) {
    i = i + 1;
    postMessage(i);
    setTimeout("counter(interval)", interval);
}

onmessage = function (e) {
    interval = Number(e.data);
    counter(interval);
};

/*
Another variant:

self.addEventListener("message", function(e) {
}, false);

*/