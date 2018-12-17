function getLastDayOfMonth(year, month){
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

function dateRange(start, end){
    var startDate = new Date(start);
    var endDate = new Date(end);
    var year = startDate.getFullYear();
    var months = {};

    var monthEnd = endDate.getMonth();

    if(monthEnd < startDate.getMonth()){
        monthEnd += 12;
    }

    for(var i = startDate.getMonth(); i <= monthEnd; i++){
        var date = new Date();
        date.setFullYear(year);
        date.setMonth(i);
        var nameMonth = date.toLocaleString('en-US', {month: 'long'});

        months[nameMonth] = [];

        for(var j = 1; j <= getLastDayOfMonth(date.getFullYear(), i); j++){
            var obj = {};

            date.setDate(j);

            obj['date'] = date.toISOString().slice(0, 10);
            obj['weekday'] = date.getDay();
            months[nameMonth].push(obj);
        }
    }
    return months;
}

module.exports = dateRange;