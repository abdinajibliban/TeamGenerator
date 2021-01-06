// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

var Employee = require("./Employee");

class engineer extends Employee {
    constructor(name,id,email,gitHub){
        super(name,id,email)
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer"
    }
    
}


module.exports =engineer;