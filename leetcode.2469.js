// 2469. Convert the Temperature

var convertTemperature = function(celsius) {
    let res=[]
    res.push(celsius+273.15,(9/5*celsius)+32)
    return res;
};