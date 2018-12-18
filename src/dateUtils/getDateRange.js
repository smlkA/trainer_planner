let getNumberWeek = (value) => {
  let date = new Date(value);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}

let getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

let getDateRange = (start, end) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    let months = {};
    let monthEnd = endDate.getMonth();

    if (monthEnd < startDate.getMonth()) {
      monthEnd += 12;
    }

    for (let i = startDate.getMonth(); i <= monthEnd; i++){
      let date = new Date(start);
      date.setMonth(i);
      let nameMonth = date.toLocaleString('en-US', {
        month: 'long'
      });

      months[nameMonth] = [];

      for (let j = 1; j <= getLastDayOfMonth(date.getFullYear(), date.getMonth()); j++){
        let obj = {};

        date.setDate(j);

        obj['date'] = date.toISOString().slice(0, 10);
        obj['weekday'] = (date.getDay() === 0) ? 6 : date.getDay() - 1;
        obj['weekend'] = date.getDay() === 0 || date.getDay() === 6;
        obj['inactive'] = (date >= startDate && date <= endDate) ? false : true;
        obj['weekEven'] = getNumberWeek(date) % 2 === 0; 
        months[nameMonth].push(obj);
      }
    }
    return months;
}

module.exports = getDateRange;