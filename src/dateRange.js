function getLastDayOfMonth(year, month){
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

function dateRange(start, end){
    var startDate = new Date(start);
    var endDate = new Date(end);
    var year = startDate.getFullYear();
    var months = {};
    for(var i = startDate.getMonth(); i <= endDate.getMonth(); i++){
        var date = new Date(year, i, 1);
        var nameMonth = date.toLocaleString('en-US', {month: 'long'});
        months[nameMonth] = [];
        for(var j = 1; j <= getLastDayOfMonth(year, i); j++){
            var obj = {};
            date.setDate(j);
            var day = date.getDate(); 
            if(date.getDate() < 10){
                day = '0' + day;
            }
            var month = date.getMonth() + 1;
            if(month < 10){
                month = '0' + month;
            }
            obj['date'] = day + '-' + month + '-' + date.getFullYear();
            obj['weekday'] = date.getDay();
            months[nameMonth].push(obj);
        }
    }
    return months;
}
module.exports = dateRange;