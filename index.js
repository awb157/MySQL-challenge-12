const db=require("./connection")
const inquirer=require("inquirer") 




function startapp(){
    inquirer.prompt([
        {
          name: "prompt",
          type: "list",
          message: "Please select an action.",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a new department",
            "Add a new role",
            "Add a new employee",
            "modify emploee role",
            "Exit"
          ]
        }])
        .then(function (answer) {
          switch (answer.prompt) {
            case "View all departments":
              viewDepartments();
              break;
            case "View all roles":
              viewRoles();
              break;
            case "View all employees":
              viewEmployees();
              break;
            case "Add a new department":
              addDepartment();
              break;
            case "Add a new role":
              addRole();
              break;
            case "Add a new employee":
              addEmployee();
              break;
            case "modify emploee role":
             updateRole();
              break;
            case "exit":
              quit()
              break;
          }
        });
}






function viewDepartments(){
    db.query('SELECT * FROM departments',(err,res)=>{
        console.table(res)
   startapp()
    })
}

function viewRoles(){
  db.query('SELECT * FROM roles',(err,res)=>{
    if(err) throw err 
      console.table(res)
 startapp()
  })
}



db.connect(function(err){
  if (err) throw err 
  console.log("connected")
  startapp()
})