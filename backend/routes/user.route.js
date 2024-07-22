import express from "express"
import User from "../models/user.model.js"

const router = express.Router();


router.post("/register" ,async (req,res)=>{
  const {userID , username , password} = req.body;
  const user = await User.findOne({username : username , userID : userID , password : password});
  try {
    if(user){
      res.status(400).send("user already exist");
    }
    else{
      const newUser = await User.create({
        userID : userID,
        username : username,
        password : password 
      });
      res.status(200).send("user created");
    }
  } catch (error) {
    console.error('Error in /register route:', error);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { userID, password } = req.body;
  try {
    const user = await User.findOne({ userID });
    if (!user) {
      return res.status(400).send('Invalid userID or password');
    }
    if (user.password !== password) {
      return res.status(400).send('Invalid userID or password');
    }

    res.status(200).send('User logged in successfully');
  } catch (error) {
    console.error('Error in /login route:', error);
    res.status(500).send('Server error');
  }
});

export default router;