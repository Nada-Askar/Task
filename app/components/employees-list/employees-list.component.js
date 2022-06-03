angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      searchValue: '<',
    },
  });
angular
  .module('appModule').filter('highlightSearchWord', function ($sce) {
    return function (text, searchWord) {
      if (!searchWord) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(
        text.replace(
          new RegExp(searchWord, 'gi'),
          '<span class="highlight">' + searchWord + '</span>'
        )
      );
    };
  });
function EmployeesListComponent() { }
