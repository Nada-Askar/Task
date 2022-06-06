angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchVal = '';
  homePageVm.updateSearchVal = (val) => {
    homePageVm.searchVal = val;
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
