import connectMongo from "../../../../database/conn";
import Users from "../../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    await connectMongo();
  } catch (error) {
    return res.status(500).json({ error: "Connection Failed..." });
  }

  // Only POST method is accepted
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Don't have form data..!" });
    const { username, email, password } = req.body;

    // Check for duplicate users
    try {
      const checkExisting = await Users.findOne({ email });
      if (checkExisting) return res.status(422).json({ message: "User Already Exists...!" });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong while checking for duplicate users." });
    }

    // Hash password and create new user
    try {
      const hashedPassword = await hash(password, 12);
      const newUser = await Users.create({ username, email, password: hashedPassword });
      return res.status(201).json({ status: true, user: newUser });
    } catch (error) {
      return res.status(500).json({ error: "Failed to create a new user." });
    }
  } else {
    return res.status(500).json({ message: "HTTP method not valid, only POST is accepted." });
  }
}
