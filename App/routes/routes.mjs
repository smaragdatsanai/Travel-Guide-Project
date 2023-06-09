
import express from 'express'
const router = express.Router()

import * as Validator from '../validator/validation.mjs'


import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    console.log('loading .env')
    dotenv.config();
}


const AccommodationController = await import('../controllers/accommodationController.mjs')
const ActivitiesController = await import('../controllers/activitiesController.mjs')
const BudgetController = await import('../controllers/budgetController.mjs')
const DestinationController = await import('../controllers/destinationController.mjs')
const FeedbackController = await import('../controllers/feedbackController.mjs')
const TravelPlanController = await import('../controllers/travelPlanController.mjs')

import multer from 'multer';
const upload = multer({ dest: 'public/uploads/' });


router.get("/", (req, res) => {
    
        res.render("./home")
}
);

export default router;