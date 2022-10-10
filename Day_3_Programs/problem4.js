//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let database_user = "xyz@gmail.com";

let database_pass = "abc@123";

let user =  "xyz@gmail.com";

let pass =  "abd@123";

if(database_user==user)
{

if(database_pass==pass)
{

  console.log("Login Successful");
  
}
else 
{

  console.log("Incorrect Password");

}
}
else
{

  console.log("Wrong Credentials")
}