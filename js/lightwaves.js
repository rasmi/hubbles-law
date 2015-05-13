lightwaves = new Group();

var amplitude = 20;

function wave(points, speed, color) {
    var wave = new Path();
    wave.strokeColor = color;
    wave.strokeWidth = 2;
    wave.speed = speed;

    _.forEach(_.range(points+1), function(n) {
        wave.add(new Point(n/points, 0)*view.size);
    });

    return wave;
}

function onFrame(event) {
    // Animate each segment of each wave.
    _.forEach(lightwaves.children, function(w, w_i) {
        _.forEach(w.segments, function(s, s_i) {
            var sin = Math.sin(event.time*w.speed + s_i);
            s.point.y = (sin+ 4*w_i+1)*amplitude + 20;
        })
        w.smooth();
    })
}

lightwaves.addChild(wave(50, 24, 'blue'));
lightwaves.addChild(wave(40, 16, 'green'));
lightwaves.addChild(wave(30, 10, 'yellow'));
lightwaves.addChild(wave(20, 5, 'orange'));
lightwaves.addChild(wave(10, 2, 'red'));