module.exports = function (app){
    app.route('/:time').get(function(req,res){
        res.json(processTime(req.params.time));
        res.end();
    })
}

function processTime(time){
    if(isTimestamp(time))
        return(timestampToFormal(time));
    else if(isFormal(time))
        return(formalToTimestamp(time));
    else
        return {'unix':null, 'natural':null}
}

function isTimestamp(time){
    return new Date( parseInt(time)).getTime() > 0;
}

function isFormal(time){
    return !isNaN(Date.parse(time));
}

function formalToTimestamp(time){
    return {'unix':Date.parse(time), 'natural':time}
}

function timestampToFormal(time){
    var date = new Date(time*1000);
    var month = getMonth(date);
    var day = date.getDate();
    var year = date.getFullYear();
    var formattedTime = month + ' ' + day + ', ' + year;
    return {'unix' : time/1000, 'natural' :formattedTime};
}

function getMonth(date){
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    return month[date.getMonth()];
}