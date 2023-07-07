
module.exports = {
    sum: (a,b)=>{
       return a + b;
    },

    mul: (a,b)=>{
        return a*b;
    },

    sub: (a,b)=>{
        return a-b;
    },

    pow: (a,b)=>{
        return Math.pow(a,b);
    },

    sqrt: (a) => {
        return Math.sqrt(a);
    },

    log: (a) => {
        return Math.log(a);
    },

    percent: (a,b) => {
        return (a/b) * 100;
    }
}