(function () {
    angular
        .module('app')
        .controller('WarningsController', [
            WarningsController
        ]);

    function WarningsController() {
        var vm = this;

        // TODO: move data to the service
        vm.warningsChartData = warningFunction;
		vm.traffic = 1500;
		vm.besthour = 1000;
		vm.CurrentDate = new Date();

        function warningFunction() {
        }
    
    }
})();
