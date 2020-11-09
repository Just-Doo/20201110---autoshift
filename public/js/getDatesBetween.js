export class DatesBetween{
    constructor(){
        this.datesBewteenDates = datesBetweenDates();
        this.setPeriod = 
    }
}

const datesBetweenDates = (date1, date2) => {
    const days1 = calculateDays(date1);
    const days2 = calculateDays(date2);
    
    return [days1, days2];
};
  
function setPeriod(start, end) {
    let primativeStart = new Date(start);
    let primativeEnd = new Date(end);
    let startSecond = primativeStart.getTime() + 32400000;
    let endSecond = primativeEnd.getTime() + 32400000;
  
    let endPoint = ((endSecond - startSecond) / 86400000);

    if (periodList < 1) {
        for (let i = 0; i <= endPoint; i++) {
            var dates = startSecond + (i * 86400000);
            periodList.push(new Date(dates));
        }
    } else {
        periodList = [];
        for (let i = 0; i <= endPoint; i++) {
            var dates = startSecond + (i * 86400000);
            periodList.push(new Date(dates));
        }
    }
    return periodList;
}
  
const calculateDays = (date) => {
    const [y, m, d] = date.split('-')
  
    const yearDays = calculateDaysUpToYears(parseInt(y))
    const monthDays = calculateDaysUpToMonths(parseInt(m), parseInt(y))
    const dayDays = parseInt(d)
    
    const days = yearDays + monthDays + dayDays
    
    return days
}
  
const calculateDaysUpToYears = (year) => {
    let days = 0
    
    for (let i = 1971; i < year; i++) {
      days += (isLeapYear(i)) ? 366 : 365
    }
    
    return days
}
  
const isLeapYear = (year) => {
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
}
  
const calculateDaysUpToMonths = (month, year) => {
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0
    
    for (let i = 1; i < month; i++) {
        days += months[i]
    }
    
    if (month > 2 && isLeapYear(year)) {
      days += 1
    }
    
    return days
}