var obj = function() {
    var _this = this;
    _this.hello = 'hello';

    _this.greet = function() {
        console.log(_this.hello);
    };

    // this.delayGreeting = function() {
    //     // Try not to bind all, use the _this
    //     setTimeout(this.greet.bind(this), 1000);
    // }

    _this.delayGreeting = function() {
        setTimeout(_this.greet, 100);
    };

};

//new is creating a new scope.
var greeter = new obj();

greeter.delayGreeting();