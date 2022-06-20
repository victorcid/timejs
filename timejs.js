"use strict"

const defaultConfig = {
    lenguage:'es',
    contry:'MX',
    timeZone:-6,
}

module.exports = {
    defaultConfig,
    getTimeG,
    getTimeL,
}



function getTimeG(time){
    if (time) {
        if(!(time).toString().toLowerCase().includes('z')
        && !(time).toString().toLowerCase().includes('gmt')
        && !(time).toString().toLowerCase().includes('utc')
        && !(time).toString().includes(' -')
        && !(time).toString().includes('+')) time = (time).toString() + ' +0000'


        return new Date(time).getTime();

        /*var date = new Date(time);
        date = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()]

        return new Date(date[0], date[1], date[2], date[3], date[4], date[5], date[6]).getTime();*/
    }

    return new Date().getTime();
}

function getTimeL(time,timeZone){
    let offsetTimeZone = parseInt(timeZone)
    if(!offsetTimeZone && offsetTimeZone != 0) offsetTimeZone = defaultConfig.timeZone
    if(offsetTimeZone > 24) offsetTimeZone = 24
    if(offsetTimeZone < -24) offsetTimeZone = -24

    offsetTimeZone = offsetTimeZone * 60 * 60 *1000

    if (time) {
        if(!(time).toString().toLowerCase().includes('z')
        && !(time).toString().toLowerCase().includes('gmt')
        && !(time).toString().toLowerCase().includes('utc')
        && !(time).toString().includes(' -')
        && !(time).toString().includes('+')) time = (time).toString() + ' +0000'


        return (new Date(time).getTime() - offsetTimeZone);
    }

    return (new Date().getTime() -  offsetTimeZone);
}
