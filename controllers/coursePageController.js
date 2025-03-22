const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.viewCourses = async (req, res) => {
    const courses = await prisma.course.findMany();
    res.status(200).json(courses);
}

exports.createCouse = async (req, res) => {
    await prisma.course.create({
        data: {
            name: req.body.name,
            emailAccount: req.body.emailAccount,
            passwordAccount: req.body.passwordAccount,
            describe: req.body.describe,
            link: req.body.link,
            image: req.body.image
        }
    })
    res.send('Curso criado com sucesso!');
}

exports.deleteCourse = async (req, res) => {

    await prisma.course.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Course deleted sucessfull'})
}