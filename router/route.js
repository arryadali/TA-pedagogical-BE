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

// Register Routes API
router.route('/signin')
        .post(controller.signIn)
        
export default router;