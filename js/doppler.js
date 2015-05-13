circlePath = new Path.Circle(new Point(0, view.bounds.center.y), 1);
circlePath.strokeColor = 'black';
circlePath.strokeScaling = false;

circle = new Symbol(circlePath);

var circles = new Group();
tool.fixedDistance = 20;

function onMouseDrag(event) {
    var newCircle = circle.place(event.middlePoint, 5);
    circles.addChild(newCircle);
}

function onFrame(event) {
    _.forEach(circles.children, expand);
}

function expand(circle) {
    // Scale linearly by 10px instead of by size multiplier.
    var radius = circle.bounds.width/2.0
    circle.scale((radius+10)/radius);
    if (circle.bounds.width > view.width) circle.remove();
}