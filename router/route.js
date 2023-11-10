import { Router } from "express";
const router = Router();

// Import Controller
import * as controller from '../controllers/controller.js'

// Questions Routes API
router.route('/questions')
        .get(controller.getQuestions) // GET Request
        .post(controller.insertQuestions) // POST Request
        .delete(controller.dropQuestions) // DELETE Request

// Reusult Routes API
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

// Register Routes API
router.route('/signup')
        .get(controller.getSignUp)
        .post(controller.signUp)

// Login Routes API
router.route('/signin')
        .post(controller.signIn)

// Materi Routes API   
router.route('/materi')
        .get(controller.getMateri)
        .post(controller.insertMateri)
        .delete(controller.dropMateri)
        
export default router;