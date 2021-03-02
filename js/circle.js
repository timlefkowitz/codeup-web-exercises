(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function() {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * this.radius * this.radius;
            return area;
            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            //     if(doRounding === true){
            //         Math.round(this.getArea())
            //     } else {
            //         return doRounding;
            //     }
            var result = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
        }
    };
    console.log("Testing get area " + circle.getArea(circle.radius))
    console.log("testingLoginfo " + circle.logInfo(circle.radius))

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
        circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();