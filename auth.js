import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const secretKey = "mySecret123$";

function generateJWT(data) {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
}

app.use(bodyParser.json());

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log(email+"       "+ password);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    console.log(user);
    const token = generateJWT({ username: user.email });
    res.status(200).json({ token, message: "Successfully signed in" });
  } catch (error) {
    res.status(500).json({ error,error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
