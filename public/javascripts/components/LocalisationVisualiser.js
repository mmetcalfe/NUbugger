(function (window) {
    
    "use strict";
    
    var LocalisationVisualiser = function () {
        
        THREE.Circle.apply(this, arguments);
        this.position.y = (LocalisationVisualiser.initialY += 0.1); // keep the slightly apart
        
    };
    
    LocalisationVisualiser.initialY = 0.01;
    
    LocalisationVisualiser.prototype = Object.create(THREE.Circle.prototype);
    
    LocalisationVisualiser.prototype.setHeight = function (height) {
        
        this.scale.x = height * 2;
            
    };
    
    LocalisationVisualiser.prototype.setWidth = function (width) {
        
        this.scale.z = width * 2;
        
    };
    
    LocalisationVisualiser.prototype.update = function () {
        
        
        
    };
    
    // static
    LocalisationVisualiser.visualise = function (object, parameters) {
        
        var newObject = new THREE.Object3D();
        var visualiser = new LocalisationVisualiser(parameters);
        
        newObject.visualiser = visualiser;
        newObject.add(visualiser);
        
        newObject.object = object.object || object;
        newObject.add(object);
        
        return newObject;
        
    }
    
    window.LocalisationVisualiser = LocalisationVisualiser;
    
}(window));
