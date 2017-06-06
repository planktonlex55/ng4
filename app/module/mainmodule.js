(function(app){
    app.MainModule = ng.core.NgModule({
        imports : [ng.platformBrowser.BrowserModule],
        declarations : [app.MainComp,app.HeroComp],
        bootstrap : [app.MainComp],
        providers : [app.HeroService]
    }).Class({
        constructor : function(){
            // empty
        }
    });


    window.onload = function(){
        ng.core.enableProdMode();
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.MainModule);
    }

})(window.app || (window.app = {}))
