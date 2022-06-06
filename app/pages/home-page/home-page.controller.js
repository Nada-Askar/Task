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

  homePageVm.pages = 0;
  homePageVm.current_page = 1;
  homePageVm.isLoading = false;

  homePageVm.loadMoreEmplyees = () => {
    homePageVm.isLoading = true;
    Employees.loadMoreEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.isLoading = false;
        homePageVm.pages = data.pages;
        homePageVm.current_page = data.current_page;
      });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
