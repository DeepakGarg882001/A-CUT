import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserCol from "../DB_Collections/users.js";
import nodemailer from "nodemailer";

const Secure_Key = process.env.JWT_KEY_OTP;

// Set a New Password for a Particular Account
export const setNewPassword = async (request, response) => {
  try {
    const { password } = request.body;
    console.log(password);
    if (!password) {
      return response
        .status(401)
        .json({ error: "Please Provide New Password !" });
    }

    const token = request.cookies.BHB_FgPass;
    console.log(token);

    if (!token) {
      return response.status(401).json({ error: " UnAuthorised User !" });
    }
    const isTokenValid = jwt.verify(token, Secure_Key);
    console.log(isTokenValid);

    if (!isTokenValid) {
      return response
        .status(401)
        .json({ error: "Time Out ,Please Try again !" });
    }

    const id = isTokenValid.id;

    const getUser = await UserCol.findOne({ _id: id });

    if (!getUser) {
      return response.status(400).json({ error: "Unauthorised User" });
    }

    const count = getUser.security_attack.count;
    if (count > 3) {
      return response
        .status(400)
        .json({ error: " You have Crossed all your Limits " });
    }
    const salt = bcrypt.genSaltSync();
    const secure = await bcrypt.hash(password, salt);

    const changePass = await UserCol.findByIdAndUpdate(
      { _id: id },
      { password: secure }
    );

    if (changePass) {
      response.status(201).json({ message: "Password Changed Successfully !" });
    } else {
      response.status(401).json({ error: "Process Failed, Try again!" });
    }
  } catch (error) {
    response.status(501).json({ error });
  }
};

// Send the OTP to user email so that we can verify a Right user
export const sendFrgPassOTP = async (request, response) => {
  try {
    const { email } = request.body;

    if (!email) {
      return response.status(401).json({ error: "Please Provide an Email!" });
    }

    const isEmailExist = await UserCol.findOne({ email });

    if (!isEmailExist) {
      return response
        .status(401)
        .json({ error: "Account with this Email does not Exist !" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    const data = {
      OTP: otp + 1,
      id: isEmailExist._id,
      count: 0,
    };
    const forgotPassToken = jwt.sign(data, Secure_Key, { expiresIn: "0.5h" });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "cikurra@gmail.com",
        pass: "xlizhlqnzzznjxky",
      },
    });

    const mailMessage = {
      from: "cikurra@gmail.com",
      to: email,
      subject: " Change Password ",
      text: `Hi, the secret OTP code is : ${otp} . Please never share with others. `,
    };

    transporter.sendMail(mailMessage, async (error, info) => {
      if (error) {
        return response.status(500).json({ error :"OTP Sending Process failed Due to Very Poor Internet Connection,Try Again"});
      } else {
        response
          .status(201)
          .cookie("BHB_FgPass", forgotPassToken)
          .json({ token: forgotPassToken });
      }
    });
  } catch (error) {}
};

// Verify the OTP entered by the user for change PassWord
export const verifyFrgPassOTP = async (request, response) => {
  const { userOtp } = request.body;

  const userToken = request.cookies.BHB_FgPass;

  if (!userToken) {
    return response.status(401).json({ error: " UnAuthorised User !" });
  }
  const isTokenVerified = jwt.verify(userToken, Secure_Key);
  if (!isTokenVerified) {
    return response.status(401).json({ error: "UnAuthorised User !" });
  }

  const otp = isTokenVerified.OTP - 1;
  const _id = isTokenVerified.id;

  const getUser = await UserCol.findOne({ _id });

  if (!getUser) {
    return response.status(400).json({ error: "Unauthorised User" });
  }

  const count = getUser.security_attack.count;
  const lastDate = getUser.security_attack.date;
  if (count > 3) {
    return response
      .status(400)
      .json({ error: " You have Crossed all your Limits " });
  }

  let todayDate = new Date();

  if (userOtp === otp) {
    await UserCol.findByIdAndUpdate(_id, {
      security_attack: {
        count: 0,
        date: todayDate,
      },
    });

    response.status(201).json({ message: "OTP Matched!" });
  } else {
    let secureUser;

    if (count === 0 || lastDate.toDateString() != todayDate.toDateString()) {
      secureUser = await UserCol.findByIdAndUpdate(
        { _id },
        {
          security_attack: {
            count: 1,
            date: todayDate,
          },
        }
      );
    } else if (`${lastDate.toDateString()}` === `${todayDate.toDateString()}`) {
      secureUser = await UserCol.findByIdAndUpdate(
        { _id },
        {
          security_attack: {
            count: count + 1,
            date: todayDate,
          },
        }
      );
    }
    if (!secureUser) {
      return response
        .status(401)
        .json({ error: "Invalid OTP & Process Failed " });
    }

    return response.status(401).json({ error: " Invalid OTP !" });
  }
};

// Send a OTP to User Email to verify the email address
export const sendOTPtoEmail = async (request, response) => {};

// Verify the OTP entered by the user to verify its email
export const verifyOTPforEmail = async (request, response) => {};
