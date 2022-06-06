angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl);
  };

  /**
 * Function that loads more employees when load more button is clicked
 * the page number is 1 before function is called
 * when function is called, the page number is incremented by 1 and the new url is used to get data
 */

  let pageNum = 1;
  const loadMoreEmployees = () => {
    pageNum++;
    const loadMoreUrl = 'https://fe-task.getsandbox.com/employees?page=' + pageNum;
    return $http.get(loadMoreUrl);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
