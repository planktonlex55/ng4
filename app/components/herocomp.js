(function(app){
    app.HeroComp = ng.core.Component({
        selector : "hero",
        template : "<ul><li>{{ heroOfDay }}</li></ul>"
        //
    }).Class({
        constructor : [app.HeroService, function(hs){
            this.heroOfDay = hs.generateHero();
        }]

    });
})(window.app || (window.app = {}))