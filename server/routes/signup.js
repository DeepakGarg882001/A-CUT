import UserCol from "../DB_Collections/users.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const signup = async (request, response) => {
  console.log(request.body);

  try {
    const { name, email, phone, password } = request.body;

    if (!name || !email || !phone || !password) {
      return response
        .status(401)
        .json({ error: "Please fill the form completely !" });
    }

    const isUserAccountExist = await UserCol.findOne({ email });

    if (isUserAccountExist) {
      return response
        .status(401)
        .json({ error: "Account Already Exist. Please Login !" });
    }

    const salt = bcrypt.genSaltSync();
    const secure = await bcrypt.hash(password, salt);

    const userDetails = { name, email, phone, password: secure };

    const addUser = await UserCol.create(userDetails);

    if (addUser) {
      // Send a Mail to user

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "birdsheartbeat.in@gmail.com",
          pass: "jsibsanmsicmjest",
        },
      });

      const mailMessage = {
        from: "birdsheartbeat.in@gmail.com",
        to: email,
        subject: " A-CUT Registration ",
        text: `Hi ${name}, You have successfuly Created an account at A-CUT Salon.
                  Thankyou   `,
      };
      transporter.sendMail(mailMessage, async (error, info) => {
        if (error) {
          return response.status(500).json({ error });
        } else {
          response
            .status(201)
            .json({ message: "You have Successfully Registered !" });
        }
      });
      
    } else {
      response.status(401).json({ error: " Register Process Failed !" });
    }
  } catch (error) {
    response.status(401).json({ error });
  }
};

export default signup;
