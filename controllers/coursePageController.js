const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.viewCourses = async (req, res) => {
    const courses = await prisma.course.findMany();
    res.status(200).json(courses);
}

exports.createCouse = async (req, res) => {
    const { name, emailAccount, passwordAccount, describe, link, image } = req.body

    if (!name || !emailAccount || !passwordAccount || !describe || !link) return res.status(400).json({ message: "Preencha todos os campos obrigatórios!" })

    const newCourse = await prisma.course.create({
        data: {
            name,
            emailAccount,
            passwordAccount,
            describe,
            link,
            image
        }
    })
    res.status(201).json({ message: "Curso criado com sucesso!", course: newCourse })
}

exports.deleteCourse = async (req, res) => {
    const { id } = req.params

    await prisma.course.delete({
        where: {
            id
        }
    })

    res.status(200).json({message: 'Course deleted sucessfull'})
}