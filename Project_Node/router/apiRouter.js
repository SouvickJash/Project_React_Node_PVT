const express = require("express");
//const {model}=require('mongoose');
const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
// const hashPassword=require('../model/userModel')
const router = new express.Router();
const app = express();

//create
router.post("/createadmin", async (req, res) => {
  try {
    console.log("++++", req.body);

    const user = new UserModel(req.body);
    const result = await user.save();
    if (result) {
      return res.status(201).json({
        status: 201,
        message: "data  insert successfull",
        data: result,
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "error",
    });
  }
});

//login
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Plz fill up details");
    return res.status(400).json({
      error: "plz fill up your details",
    });
  } else {
    try {
      const user = await UserModel.findOne({
        email: email,
      });
      if (user == null) {
        return res.status(404).json({
          message: "their is not any user with in email",
          status: "404",
        });
      } else {
        const userLogin = await UserModel.findOne({
          email: email,
        });

        if (userLogin) {
          const isMatch = await bcrypt.compare(password, userLogin.password); //right

          //create token
          const token = await userLogin.generateAuthToken(); //right
          console.log("The token part" + token);

          res.cookie("jwt", token, {
            //if i want
            expires: new Date(Date.now() + 80000),
            httpOnly: true,
          });

          // console.log(`This is the cookie ${req.cookies.jwt}`);

          // local storage
          // let a=window.localStorage.setItem('token',token);
          // console.log(a);

          if (!isMatch) {
            console.log("plz send your correct password");
            return res.status(400).json({
              status: 400,
              error: "plz send your correct password",
            });
          } else {
            return res.status(201).json({
              status: 200,
              message: "login successfull",
              info: [userLogin],
              token: token,
            });
          }
        } else {
          return res.status(400).json({
            status: 400,
            error: "Plz fill you correct emailid",
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
    console.log("sucess");
  }
});


//update password
// router.post("/updatepassword", async (req, res) => {
//   try{
//     const user_id=req.body.user_id;
//     const {password}=req.body
//     const data=await UserModel.findOne({_id:user_id})
//     if(data){
//       const newPassword=await UserModel.hashPassword(password);
//       const userData=await UserModel.findByIdAndUpdate({_id:user_id},{
//           $set:{
//               password:newPassword
//           }
//       })
//     }
//     return res.status(201).json({
//       status:true,
//       message:"your password has been updated"
//     })

//   }catch(error){
//     return res.status(500).json({
//       status:false,
//       message:error.message
//     })
//   }
// });

router.post('/updatepass',async(req,res)=>{
  try{
    console.log(req.body)
    const { user_id, password } = req.body;
    const data=await UserModel.findOne({_id:user_id})
    if(data){
        const newPassword=await bcrypt.compare(password)
        const userData= await UserModel.findByIdAndUpdate({_id:user_id},{
          $set:{
            password:newPassword
          }
        })
        return res.status(200).json({
          status:200,
          message:"password updated successfully"
        })
    }else{
      return res.status(404).json({
        status:404,
        message:"user_id not found"
      })
    }
  }
  catch(error){
    return res.status(500).json({
      status:500,
      message:"error"
    })
  }
})

//forget api

module.exports = router;
