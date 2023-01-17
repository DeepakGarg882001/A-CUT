import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserCol from "../DB_Collections/users.js";

const login = async (request, response) => {
  console.log(request.body);

  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response
        .status(401)
        .json({ error: "Please Fill the form Completely" });
    }

    const isUserExists = await UserCol.findOne({ email });

    if (isUserExists) {
      console.log(isUserExists);

      const checkPassword = await bcrypt.compare(password, isUserExists.password);
      console.log("password checked is :", checkPassword)
      if (!checkPassword) {
        return response.status(401).json({ error: "Invalid Credential !" });
      } else {
        // Is Account Bolcked ?
        if (isUserExists.userAccPlay.accPlay === "block") {
          return response
            .status(200)
            .json({ error: "Your Account is Paused by Company !" });
        }

        // Now Generate Token
        const data = {
          id: isUserExists._id,
        };
        const customer_Key = process.env.JWT_KEY_CUSTOMER;
        const owner_Key = process.env.JWT_KEY_OWNER;
        const admin_Key = process.env.JWT_KEY_ADMIN;

        let token = "";

        if (isUserExists.userRole.role === "customer") {
          token = jwt.sign(data, customer_Key);
        } else {
          if (isUserExists.userRole.role === "owner") {
            token = jwt.sign(data, owner_Key);
          } else {
            if (isUserExists.userRole.role === "admin") {
              token = jwt.sign(data, admin_Key);
            }
          }
        }

        console.log(token);

        // Add token to DB
        const addToken = await UserCol.findByIdAndUpdate(
          { _id: isUserExists._id },
          { token }
        );

        const user = await UserCol.findOne({ _id: isUserExists._id });

        if (addToken) {
          response
            .status(201)
            .cookie("Authentication_token", token)
            .json({ message: "You have Successfully LogedIn !", data: user });
        } else {
          response.status(401).json({ error: " Login Process failed !" });
        }
      }
    } else {
      return response.status(401).json({ error: "Invalid Credential !" });
    }
  } catch (error) {
    response.status(401).json({ error });
  }
};

export default login;
