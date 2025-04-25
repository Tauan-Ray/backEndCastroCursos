const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

exports.viewUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !password || !email) return res.status(400).json({message: "Send name, email and password!"})

    if (!email.includes('@')) return res.status(400).json({ message: "Invalid email format." });


    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user) return res.status(409).json({message: "E-mail already exists."})

    const passwordHash = await hash(password, 6)

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: passwordHash
        },
        select: { id: true, name: true, email: true }
    })

    const token = jwt.sign({ id: newUser.id, email }, process.env.SECRET_KEY, { expiresIn: '2h' });

    res.status(201).send({ message: 'Cadastro feito com sucesso!', user:  newUser, token: token})
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params
    const user = req.user

    if (user.id !== id) {
        return res.status(401).send('Unauthorized')
    }

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'User deleted sucessfull'})
}