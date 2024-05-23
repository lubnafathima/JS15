// function constructor
function User(name, isAdmin, last) {
  this.name = name;
  this.isAdmin = isAdmin;
  this.last = last;
  this.fullName = function() { 
    return `${this.name} ${this.last}`; 
  };
}

const obj1 = new User("aaa", true, "bbb");
console.log(obj1.fullName());