const mongoose = require("mongoose");
const User = require("./user");

mongoose
  .connect("mongodb://localhost:27017/mongoose")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const createUser = async () => {
  try {
    const user = await User.findById("6662b435d348d3664cbe1fd3");
    // const users = await User.deleteOne({name:"Prasad"});
    // const user = await User.where('name').equals("Prasad")
    // const user = await User.where("age")
    //   .gt("18")
    //   .where("name")
    //   .equals("Prasad")
    //   .limit(1)
    //   .select('age')
      // user[0].department = '6662aef9069df78151c7bb27'
      // await user[0].save()
      // console.log(user);

  //   const user = await User.create({
  //       name:'Guru',
  //       age:24,
  //       email:"Guru@gmail.com",
  //       hobbies:["Cricket","Driving", 'Coding'],
  //       address:{
  //           street:"Main st.",
  //           city:"Bangalore"
  //       }
  //   })
  //   await user.save()
  //   console.log(user);
  } catch (error) {
    console.log(error.message);
  }

}
createUser();
