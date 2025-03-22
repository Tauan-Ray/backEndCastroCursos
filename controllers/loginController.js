const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.loginUser = async (req,  res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return res.status(401).json(({message: "User not found"}))
    }

    if (user.password != password) {
        return res.status(401).json({message: "Incorrect password"})
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '2h' });

    console.log({message: "Login sucessfull", token});
    res.status(200).json(user);
}