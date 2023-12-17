const UserModel = require("../models/userModel");
const { use } = require("../routes/authRoutes");

const register = async (req, res) => {
  try {
    const user = UserModel.create(req.body);

    return res.status(201).json({ user });
  } catch (err) {
    console.log("error -->", err);
    res.status(400).json({
      status: "failed",
      error: err.code,
      message: err.message,
      stack: err.stack,
    });
  }
};
const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const user = UserModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        return res.status(200).json({ user });
      } else {
        return res.status(403).json({ msg: "Password is incorrect!!" });
      }
    } else {
      return res
        .status(404)
        .json({ msg: "No user with provided email existed!!" });
    }

    // return res.status(201).json({ user });
  } catch (err) {
    console.log("error -->", err);
    res.status(400).json({
      status: "failed",
      error: err.code,
      message: err.message,
      stack: err.stack,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    console.log("DATA : =====>", req.body);
    const userId = req.params.id;
    const user = await UserModel.findByIdAndUpdate(userId, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.code,
      message: err.message,
      stack: err.stack,
    });
  }
};

module.exports = {
  register,
  login,
  updateUser,
};
