

// import User from '../models/user.js'

// export const getUsers= function(req,res){
//     User.find().then((u)=>{
//         res.status(200).json({ message:"users found!", users: u})

//     }).catch((err)=>{
//         console.log(err)
//         res.status(500).json({message:"Failed to find user!"})
//     })
// }

// export const postUser = function(req,res){
//     const email = req.body.email;
//     const name = req.body.name;
//     const password = req.body.password;
    
//     User.create({email, name, password}).then((user) => {
//         console.log(user)

//         res.json({message: 'user created!',user:user})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).json({ message: "failed to create user"});
//     })

// }
