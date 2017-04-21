(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;
		vm.daily = 1500;
		vm.weekly = "9K";
		vm.monthly = "35K";
		vm.yearly = "50K";


    
    }
})();
