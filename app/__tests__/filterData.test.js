describe('filterData', () => {
  let mockData = [
    { date_ms: 1641772800000, performance: 0.2 },
    { date_ms: 1641859200000, performance: 0.33 },
    { date_ms: 1641945600000, performance: 0.83 },
    { date_ms: 1642032000000, performance: 0.31 },
    { date_ms: 1642118400000, performance: 0.65 },
    { date_ms: 1642204800000, performance: 0.88 },
    { date_ms: 1642291200000, performance: 0.9 },
  ];
  it('it return empty array if startDate or endDate  type is not valid', () => {
    let firstDate = 'dummy';
    let secondDate = 'data';
    let filteredData = filterData(firstDate, secondDate, mockData);

    expect(filteredData).toEqual([]);
  });

  it('it return array if mock data has date between startdate and endDate', () => {
    let firstDate = '01/10/2022';
    let secondDate = '01/12/2090';
    let fileteredMockData = mockData.filter(
      (item) => new Date(item.date_ms) >= new Date(firstDate) &&
                new Date(item.date_ms) <= new Date(secondDate)
    );
    let filteredData = filterData(firstDate, secondDate, mockData);

    expect(filteredData.length).toBeGreaterThanOrEqual(1);
    expect(filteredData).toEqual(fileteredMockData);
  });
  it('it return EMPTY array if start&end date out of range ', () => {
    let firstDate = '01/10/2020';
    let secondDate = '01/12/2021';
    let filteredData = filterData(firstDate, secondDate, mockData);

    expect(filteredData.length).toEqual(0);
    expect(filteredData).toEqual([]);
  });
});

function filterData(startDate, endDate, Data) {
  return Data.filter(
    (item) => new Date(item.date_ms) >= new Date(startDate) && new Date(item.date_ms) <=
          new Date(endDate)
  );
}
