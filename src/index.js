module.exports = function reverse (n) {
    n = String(n);
    if(n.startsWith('-')) {
        let newN = n.slice(1);
        newN = newN.split('').reverse().join('');
        return +newN;
    } else {
        n = n.split('').reverse().join('');
        return +n;
    }  
}
