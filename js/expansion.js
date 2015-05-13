var universeradius = view.size.height/5;
var universe = new Path.Circle(view.center, universeradius);
universe.strokeColor = 'black'
universe.strokeScaling = false;

function universePoint() {
    // Insert point randomly into universe.
    var universepoint = new Path.Circle(universe.bounds.topLeft + {'x':universeradius/2,'y':universeradius*0.7} +(Point.random()*universe.bounds)*0.4, 3);
    universepoint.fillColor = 'black';
    universepoint.strokeScaling = false;
    return universepoint;
}

_.forEach(_.range(6), function(){universePoint()});

function onMouseDrag(event) {
    // Drag in increasing (up or right) directions to expand.
    var deltax = event.delta.x/view.size.width;
    var deltay = -1*event.delta.y/view.size.height;
    
    // Drag away from center to expand.
    /*
    if (event.point.x < view.center.x) deltax *= -1;
    if (event.point.y > view.center.y) deltay *= -1;
    */
    
    // Scale entire layer (universe + points).
    var scaling = 2*(deltax + deltay);
    project.activeLayer.scale(1.0 + scaling);

}