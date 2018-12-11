function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function dateRange(start, end){
    let startDate = new Date(start);
    let endDate = new Date(end);
    let months = {};
    let monthEnd = endDate.getMonth();

    if(monthEnd < startDate.getMonth()){
        monthEnd += 12;
    }

    for(let i = startDate.getMonth(); i <= monthEnd; i++){
        let date = new Date(start);
        date.setMonth(i);
        let nameMonth = date.toLocaleString('en-US', {month: 'long'});

        months[nameMonth] = [];

        for(let j = 1; j <= getLastDayOfMonth(date.getFullYear(), date.getMonth()); j++){
            let obj = {};

            date.setDate(j);

            obj['date'] = date.toISOString().slice(0, 10);
            obj['weekday'] = date.getDay();
            obj['weekend'] = (date.getDay() === 0 || date.getDay() === 6) ? true : false;
            obj['active'] = (date >= startDate && date <= endDate) ? true : false;
            months[nameMonth].push(obj);
        }
    }
    return months;
}
module.exports = dateRange;