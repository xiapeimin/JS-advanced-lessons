
Array.prototype.filterspace = function(){
    var arrr1 = this;
    var result = arrr1.map(function(value){
        return value.trim();
    });
    return result;
}