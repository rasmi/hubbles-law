var animate = false;
markerPath = new Path(new Point(0,0));
markerPath.strokeColor = 'gray';
markerPath.add(new Point(0, 120));
marker = new Symbol(markerPath);

draw();

function draw() {
    // Draw spectrums and text labels.
    spectrumSymbol = new Symbol(new Raster('visible_spectrum'));

    normal = spectrumSymbol.place(new Point(view.bounds.center.x, view.bounds.topLeft.y + 20));
    normal.position += new Point(0, normal.bounds.height/2);
    blueshifted = spectrumSymbol.place(new Point(normal.bounds.center.x, normal.bounds.bottom + normal.bounds.height));
    redshifted = spectrumSymbol.place(new Point(blueshifted.bounds.center.x, blueshifted.bounds.bottom + blueshifted.bounds.height));
    new PointText({point: {x: normal.bounds.center.x, y: normal.bounds.center.y + 8} , justification: 'center', fontSize: 20, fillColor: 'white', content:'emitted light'});
    new PointText({point: {x: blueshifted.bounds.left + 60, y: blueshifted.bounds.center.y + 8} , justification: 'center', fontSize: 20, opacity: 0.7, fillColor: 'white', content:'blueshifted'});
    new PointText({point: {x: redshifted.bounds.right - 55, y: redshifted.bounds.center.y + 8} , justification: 'center', fontSize: 20, opacity: 0.7, fillColor: 'white', content:'redshifted'});

    shift = normal.bounds.width/8;

    // Draw markers.
    normalMarker = marker.place(normal.bounds.center);
    blueMarker = marker.place(new Point(normal.bounds.center.x - shift, blueshifted.bounds.center.y));
    redMarker = marker.place(new Point(redshifted.bounds.center.x + shift, redshifted.bounds.center.y));
    animate = true;
}

function onMouseMove(event) {
    // Redshift/blueshift markers from normal by shift.
    if (animate){
    var xpos = event.point.x
    normalMarker.position.x = xpos;
    blueMarker.position.x = xpos - shift;
    redMarker.position.x = xpos + shift;

    // Make markers invisible out of bounds.
    normalMarker.opacity = normalMarker.position.x > normal.bounds.right || normalMarker.position.x < normal.bounds.left ? 0 : 1;
    blueMarker.opacity = blueMarker.position.x > blueshifted.bounds.right || blueMarker.position.x < blueshifted.bounds.left ? 0 : 1;
    redMarker.opacity = redMarker.position.x > redshifted.bounds.right || redMarker.position.x < redshifted.bounds.left ? 0 : 1;
    }
}
