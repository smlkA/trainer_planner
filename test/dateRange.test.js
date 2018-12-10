const dateRange = require('../dateRange');

const starDate = '2018-10-01';
const endDate = '2018-12-31';

const anotherStarDate = '2018-10-10';
const anotherEndDate = '2018-12-10';

const starDate2018 = '2018-12-01';
const endDate2019 = '2019-01-31';

const months = {
    "October": [{"date": "2018-10-01", "weekday": 1}, {"date": "2018-10-02", "weekday": 2}, {"date": "2018-10-03", "weekday": 3},
                {"date": "2018-10-04", "weekday": 4}, {"date": "2018-10-05", "weekday": 5}, {"date": "2018-10-06", "weekday": 6},
                {"date": "2018-10-07", "weekday": 0}, {"date": "2018-10-08", "weekday": 1}, {"date": "2018-10-09", "weekday": 2},
                {"date": "2018-10-10", "weekday": 3}, {"date": "2018-10-11", "weekday": 4}, {"date": "2018-10-12", "weekday": 5},
                {"date": "2018-10-13", "weekday": 6}, {"date": "2018-10-14", "weekday": 0}, {"date": "2018-10-15", "weekday": 1},
                {"date": "2018-10-16", "weekday": 2}, {"date": "2018-10-17", "weekday": 3}, {"date": "2018-10-18", "weekday": 4},
                {"date": "2018-10-19", "weekday": 5}, {"date": "2018-10-20", "weekday": 6}, {"date": "2018-10-21", "weekday": 0},
                {"date": "2018-10-22", "weekday": 1}, {"date": "2018-10-23", "weekday": 2}, {"date": "2018-10-24", "weekday": 3},
                {"date": "2018-10-25", "weekday": 4}, {"date": "2018-10-26", "weekday": 5}, {"date": "2018-10-27", "weekday": 6},
                {"date": "2018-10-28", "weekday": 0}, {"date": "2018-10-29", "weekday": 1}, {"date": "2018-10-30", "weekday": 2},
                {"date": "2018-10-31", "weekday": 3}
                ],
    "November": [{"date": "2018-11-01", "weekday": 4}, {"date": "2018-11-02", "weekday": 5}, {"date": "2018-11-03", "weekday": 6},
                 {"date": "2018-11-04", "weekday": 0}, {"date": "2018-11-05", "weekday": 1}, {"date": "2018-11-06", "weekday": 2},
                 {"date": "2018-11-07", "weekday": 3}, {"date": "2018-11-08", "weekday": 4}, {"date": "2018-11-09", "weekday": 5},
                 {"date": "2018-11-10", "weekday": 6}, {"date": "2018-11-11", "weekday": 0}, {"date": "2018-11-12", "weekday": 1},
                 {"date": "2018-11-13", "weekday": 2}, {"date": "2018-11-14", "weekday": 3}, {"date": "2018-11-15", "weekday": 4},
                 {"date": "2018-11-16", "weekday": 5}, {"date": "2018-11-17", "weekday": 6}, {"date": "2018-11-18", "weekday": 0},
                 {"date": "2018-11-19", "weekday": 1}, {"date": "2018-11-20", "weekday": 2}, {"date": "2018-11-21", "weekday": 3},
                 {"date": "2018-11-22", "weekday": 4}, {"date": "2018-11-23", "weekday": 5}, {"date": "2018-11-24", "weekday": 6},
                 {"date": "2018-11-25", "weekday": 0}, {"date": "2018-11-26", "weekday": 1}, {"date": "2018-11-27", "weekday": 2},
                 {"date": "2018-11-28", "weekday": 3}, {"date": "2018-11-29", "weekday": 4}, {"date": "2018-11-30", "weekday": 5}
                ],
    "December": [{"date": "2018-12-01", "weekday": 6}, {"date": "2018-12-02", "weekday": 0}, {"date": "2018-12-03", "weekday": 1},
                 {"date": "2018-12-04", "weekday": 2}, {"date": "2018-12-05", "weekday": 3}, {"date": "2018-12-06", "weekday": 4},
                 {"date": "2018-12-07", "weekday": 5}, {"date": "2018-12-08", "weekday": 6}, {"date": "2018-12-09", "weekday": 0},
                 {"date": "2018-12-10", "weekday": 1}, {"date": "2018-12-11", "weekday": 2}, {"date": "2018-12-12", "weekday": 3},
                 {"date": "2018-12-13", "weekday": 4}, {"date": "2018-12-14", "weekday": 5}, {"date": "2018-12-15", "weekday": 6},
                 {"date": "2018-12-16", "weekday": 0}, {"date": "2018-12-17", "weekday": 1}, {"date": "2018-12-18", "weekday": 2},
                 {"date": "2018-12-19", "weekday": 3}, {"date": "2018-12-20", "weekday": 4}, {"date": "2018-12-21", "weekday": 5},
                 {"date": "2018-12-22", "weekday": 6}, {"date": "2018-12-23", "weekday": 0}, {"date": "2018-12-24", "weekday": 1},
                 {"date": "2018-12-25", "weekday": 2}, {"date": "2018-12-26", "weekday": 3}, {"date": "2018-12-27", "weekday": 4},
                 {"date": "2018-12-28", "weekday": 5}, {"date": "2018-12-29", "weekday": 6}, {"date": "2018-12-30", "weekday": 0},
                 {"date": "2018-12-31", "weekday": 1}],
    "January": [{"date": "2019-01-01", "weekday": 2}, {"date": "2019-01-02", "weekday": 3}, {"date": "2019-01-03", "weekday": 4},
                 {"date": "2019-01-04", "weekday": 5}, {"date": "2019-01-05", "weekday": 6}, {"date": "2019-01-06", "weekday": 0},
                 {"date": "2019-01-07", "weekday": 1}, {"date": "2019-01-08", "weekday": 2}, {"date": "2019-01-09", "weekday": 3},
                 {"date": "2019-01-10", "weekday": 4}, {"date": "2019-01-11", "weekday": 5}, {"date": "2019-01-12", "weekday": 6},
                 {"date": "2019-01-13", "weekday": 0}, {"date": "2019-01-14", "weekday": 1}, {"date": "2019-01-15", "weekday": 2},
                 {"date": "2019-01-16", "weekday": 3}, {"date": "2019-01-17", "weekday": 4}, {"date": "2019-01-18", "weekday": 5},
                 {"date": "2019-01-19", "weekday": 6}, {"date": "2019-01-20", "weekday": 0}, {"date": "2019-01-21", "weekday": 1},
                 {"date": "2019-01-22", "weekday": 2}, {"date": "2019-01-23", "weekday": 3}, {"date": "2019-01-24", "weekday": 4},
                 {"date": "2019-01-25", "weekday": 5}, {"date": "2019-01-26", "weekday": 6}, {"date": "2019-01-27", "weekday": 0},
                 {"date": "2019-01-28", "weekday": 1}, {"date": "2019-01-29", "weekday": 2}, {"date": "2019-01-30", "weekday": 3},
                 {"date": "2019-01-31", "weekday": 4}]
}

test('return object with months', () => {
    expect(dateRange(starDate, endDate)).toHaveProperty("October");
    expect(dateRange(starDate, endDate)).toHaveProperty("November");
    expect(dateRange(starDate, endDate)).toHaveProperty("December");
});

test('return object with months have days', () => {
    expect(dateRange(starDate, endDate)["October"]).toEqual(months["October"]);
    expect(dateRange(starDate, endDate)["November"]).toEqual(months["November"]);
    expect(dateRange(starDate, endDate)["December"]).toEqual(months["December"]);
});

test('taking dates are not the beginning and the end of the month and return object with months have days', () => {
    expect(dateRange(anotherStarDate, anotherEndDate)["October"]).toEqual(months["October"]);
    expect(dateRange(anotherStarDate, anotherEndDate)["November"]).toEqual(months["November"]);
    expect(dateRange(anotherStarDate, anotherEndDate)["December"]).toEqual(months["December"]);
});

test('taking dates with different years and return object with months have days', () => {
    expect(dateRange(starDate2018, endDate2019)["December"]).toEqual(months["December"]);
    expect(dateRange(starDate2018, endDate2019)["January"]).toEqual(months["January"]);
});