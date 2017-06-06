(function(app){
   app.HeroService = ng.core.Class({
        constructor : function(){
            this.heroes = app.heroes;
        },
        generateHero : function(){
            var randomHero = Math.floor(Math.random()*app.heroes.length);
            return app.heroes[randomHero].title;
        }

    });
})(window.app || (window.app = {}))