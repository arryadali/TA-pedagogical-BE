import questions, {answers} from '../database/data.js'
import materi from '../database/materi.js'

import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import userModel from "../models/userSchema.js"
import Materi from "../models/materiSchema.js"

// get all questions
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

// insert all questions
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany([
          { questions, answers },
        ]);
        res.json({ msg: "Data Saved Successfully...!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// delete all questions
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// get all result
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

// post all result
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;

        if (!username && !result) throw new Error("Data Not Provided...!");

        const resultDocument = new Results({ username, result, attempts, points, achieved });
        await resultDocument.save();

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// delete all result
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// Register
export async function signUp(req, res) {
    console.log(req.body)

    const newUser = new userModel({
        nama: req.body.nama,
        kelas: req.body.kelas,
        absen: req.body.absen,
        username : req.body.username,
        password : req.body.password
    })

    newUser.save()
    .then(() => {
        res.send({ code: 200, message: 'Signup Success...!' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err...!' })
    })
}

// get all Signup
export async function getSignUp(req, res) {
    try {
        const users = await userModel.find()

        if(!users) {
            return res.status(404).json({msg : "Data not found...!"})
        }

        res.status(200).json(users)
    } catch (error) {
        res.send({
            code : 500,
            msg : "a server error occurred"
        })
    }
}

//
export async function signIn(req, res) {
    console.log(req.body.username)

    // username and password match

    userModel.findOne({username : req.body.username})
    .then(result => {
        console.log(result, "11")

        // match password
        if(result.password !== req.body.password) {
            res.send({
                code : 404,
                message : "Password wrong...!"
            }) 
        } else {
            res.send({
                nama : result.nama,
                code : 200,
                message : "User found...!",
                token : "awdwd"
            })
        }
    }).catch(err => {
        res.send({
            code : 500,
            message : "User not found...!"
        })
    })
}

// get all materi
export async function getMateri(req, res) {
    try {
        const m = await Materi.find()
        res.json(m)
    } catch (error) {
        res.json({error})
    }
}

// insert all materi
export async function insertMateri(req, res) {
    try {
        await Materi.insertMany([
          {materi}
        ]);
        res.json({ msg: "Data Saved Successfully...!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// delete all Materi
export async function dropMateri(req, res) {
    try {
        await Materi.deleteMany();
        res.json({ msg: "Materi Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}