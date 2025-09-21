// require express

const express = require("express");

// import User model

const User = require("../models/user.model");

// router -> to create apis

const router = express.Router();

router.post("/store-user", async function (req, res) {
  try {
    // store user
    const { username, email, password } = req.body;
    // create new user

    const newUser = new User({
      username,
      email,
      password,
    });
    // save newUser
    await newUser.save();

    return res.json({ message: "User stored successfully", user: newUser });
  } catch (err) {
    console.log(err);
  }
});

// api to fetch users

// const fetchUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // array []

//     return res.json({ message: "users fetched", users });
//   } catch (err) {
//     console.log(err);
//   }
// };

router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // array []


    return res.json({ message: "users fetched", users });
  } catch (err) {
    console.log(err);
  }
});

//update single user
router.patch("/edit-user/:userId", async (req, res) => {
  try {
    //logic to update user
    const { userId } = req.params;

    //get password.
    const { password } = req.body;

    //find user based on userId
    const user = await User.findById(userId);
    user.password = password;
    await user.save();
    return res.json({ message: "User updated successfully", user });

  } catch (err) {
    console.log(err);
  }
})

//delete user
router.delete("/delete-account/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    return res.json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
