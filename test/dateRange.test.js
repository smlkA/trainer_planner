const dateRange = require('../dateRange');
const starDate = '2018-10-01';
const endDate = '2018-12-31';

const months = {
    "October": [{"date": "01-10-2018", "weekday": 1}, {"date": "02-10-2018", "weekday": 2}, {"date": "03-10-2018", "weekday": 3},
                {"date": "04-10-2018", "weekday": 4}, {"date": "05-10-2018", "weekday": 5}, {"date": "06-10-2018", "weekday": 6},
                {"date": "07-10-2018", "weekday": 0}, {"date": "08-10-2018", "weekday": 1}, {"date": "09-10-2018", "weekday": 2},
                {"date": "10-10-2018", "weekday": 3}, {"date": "11-10-2018", "weekday": 4}, {"date": "12-10-2018", "weekday": 5},
                {"date": "13-10-2018", "weekday": 6}, {"date": "14-10-2018", "weekday": 0}, {"date": "15-10-2018", "weekday": 1},
                {"date": "16-10-2018", "weekday": 2}, {"date": "17-10-2018", "weekday": 3}, {"date": "18-10-2018", "weekday": 4},
                {"date": "19-10-2018", "weekday": 5}, {"date": "20-10-2018", "weekday": 6}, {"date": "21-10-2018", "weekday": 0},
                {"date": "22-10-2018", "weekday": 1}, {"date": "23-10-2018", "weekday": 2}, {"date": "24-10-2018", "weekday": 3},
                {"date": "25-10-2018", "weekday": 4}, {"date": "26-10-2018", "weekday": 5}, {"date": "27-10-2018", "weekday": 6},
                {"date": "28-10-2018", "weekday": 0}, {"date": "29-10-2018", "weekday": 1}, {"date": "30-10-2018", "weekday": 2},
                {"date": "31-10-2018", "weekday": 3}
                ],
    "November": [{"date": "01-11-2018", "weekday": 4}, {"date": "02-11-2018", "weekday": 5}, {"date": "03-11-2018", "weekday": 6},
                 {"date": "04-11-2018", "weekday": 0}, {"date": "05-11-2018", "weekday": 1}, {"date": "06-11-2018", "weekday": 2},
                 {"date": "07-11-2018", "weekday": 3}, {"date": "08-11-2018", "weekday": 4}, {"date": "09-11-2018", "weekday": 5},
                 {"date": "10-11-2018", "weekday": 6}, {"date": "11-11-2018", "weekday": 0}, {"date": "12-11-2018", "weekday": 1},
                 {"date": "13-11-2018", "weekday": 2}, {"date": "14-11-2018", "weekday": 3}, {"date": "15-11-2018", "weekday": 4},
                 {"date": "16-11-2018", "weekday": 5}, {"date": "17-11-2018", "weekday": 6}, {"date": "18-11-2018", "weekday": 0},
                 {"date": "19-11-2018", "weekday": 1}, {"date": "20-11-2018", "weekday": 2}, {"date": "21-11-2018", "weekday": 3},
                 {"date": "22-11-2018", "weekday": 4}, {"date": "23-11-2018", "weekday": 5}, {"date": "24-11-2018", "weekday": 6},
                 {"date": "25-11-2018", "weekday": 0}, {"date": "26-11-2018", "weekday": 1}, {"date": "27-11-2018", "weekday": 2},
                 {"date": "28-11-2018", "weekday": 3}, {"date": "29-11-2018", "weekday": 4}, {"date": "30-11-2018", "weekday": 5}
                ],
    "December": [{"date": "01-12-2018", "weekday": 6}, {"date": "02-12-2018", "weekday": 0}, {"date": "03-12-2018", "weekday": 1},
                 {"date": "04-12-2018", "weekday": 2}, {"date": "05-12-2018", "weekday": 3}, {"date": "06-12-2018", "weekday": 4},
                 {"date": "07-12-2018", "weekday": 5}, {"date": "08-12-2018", "weekday": 6}, {"date": "09-12-2018", "weekday": 0},
                 {"date": "10-12-2018", "weekday": 1}, {"date": "11-12-2018", "weekday": 2}, {"date": "12-12-2018", "weekday": 3},
                 {"date": "13-12-2018", "weekday": 4}, {"date": "14-12-2018", "weekday": 5}, {"date": "15-12-2018", "weekday": 6},
                 {"date": "16-12-2018", "weekday": 0}, {"date": "17-12-2018", "weekday": 1}, {"date": "18-12-2018", "weekday": 2},
                 {"date": "19-12-2018", "weekday": 3}, {"date": "20-12-2018", "weekday": 4}, {"date": "21-12-2018", "weekday": 5},
                 {"date": "22-12-2018", "weekday": 6}, {"date": "23-12-2018", "weekday": 0}, {"date": "24-12-2018", "weekday": 1},
                 {"date": "25-12-2018", "weekday": 2}, {"date": "26-12-2018", "weekday": 3}, {"date": "27-12-2018", "weekday": 4},
                 {"date": "28-12-2018", "weekday": 5}, {"date": "29-12-2018", "weekday": 6}, {"date": "30-12-2018", "weekday": 0},
                 {"date": "31-12-2018", "weekday": 1}]
}

test('return object with months', () => {
    expect(dateRange(starDate, endDate)["months"]).toHaveProperty("October");
    expect(dateRange(starDate, endDate)["months"]).toHaveProperty("November");
    expect(dateRange(starDate, endDate)["months"]).toHaveProperty("December");
});

test('return object with months have days', () => {
    expect(dateRange(starDate, endDate)["months"]["October"]).toEqual(months["October"]);
    expect(dateRange(starDate, endDate)["months"]["November"]).toEqual(months["November"]);
    expect(dateRange(starDate, endDate)["months"]["December"]).toEqual(months["December"]);
});