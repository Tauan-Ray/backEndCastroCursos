const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { compare } = require('bcryptjs')

const prisma = new PrismaClient();

exports.loginUser = async (req,  res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).json({ message: "Send email and password!" })

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return res.status(401).json({message: "Email or password incorrets!"})
    }

    const passwordMatches = await compare(password, user.password)

    if (!passwordMatches) {
        return res.status(401).json({message: "Email or password incorrets!"})
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '2h' });

    res.status(200).json({
        token
    });
}