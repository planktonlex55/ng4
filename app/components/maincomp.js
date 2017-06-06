(function(app){
    app.MainComp = ng.core.Component({
        selector : "hero-app",
        template : "<h1>{{ title }}</h1><hero></hero><hero></hero><hero></hero>"
    }).Class({
        constructor : function(){
            this.title = "Welcome to Synechron App"
        }
    });
})(window.app || (window.app = {}))