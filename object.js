let user = {
    name : "nikhil",
    age : 21,
    func : function(){
        return this.name + " " + this.age;
    }
}

/* Here Function 'func' is a property of object 'user' 
so, function "func" is a method of object "user" */

console.log(user.func());
console.log(user.age);