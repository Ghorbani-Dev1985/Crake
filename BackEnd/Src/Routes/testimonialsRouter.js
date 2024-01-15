const express = require('express')
const TestimonialsModel = require('../Models/Testimonials')
const testimonialsRouter = express.Router()

// ** Get All Testimonials APi
testimonialsRouter.get('/all', (req , res) => {
    TestimonialsModel.find({}).then(allTestimonials => {
        res.json(allTestimonials)
    })
})

// ** Get Main Testimonials Info APi
testimonialsRouter.get('/testimonial', (req , res) => {
    let testimonialID = req.headers.authorization

    TestimonialsModel.findById(`${testimonialID}`).then(mainUserInfo => {
        res.send(mainUserInfo)
    })
})

// ** Delete Main Testimonials APi
testimonialsRouter.delete('/delete', (req , res) => {
    let testimonialID = req.headers.authorization
    TestimonialsModel.findByIdAndDelete(`${testimonialID}`).then(result => {
        res.send(true)
    })
})

// ** Update Main Testimonials APi
testimonialsRouter.put('/update', (req , res) => {
    let body = req.body
    let testimonialID = req.headers.authorization
    let testimonialUpdateInfo = {
        firstName : body.firstName,
        lastName: body.lastName,
        jobTitle: body.jobTitle,
        text: body.text,
        isShowing : body.isShowing,
    }
    TestimonialsModel.findByIdAndUpdate(`${testimonialID}` , testimonialUpdateInfo).then(result => {
        res.send(true)
    })
})

// ** Add New Testimonial APi
testimonialsRouter.post('/newTestimonial', (req , res) => {
    let body = req.body
    let date = new Date().toLocaleDateString("fa-IR");
    let newTestimonialInfo = {
        firstName : body.firstName,
        lastName: body.lastName,
        CREATED_AT: date,
        jobTitle: body.jobTitle,
        text: body.text,
        isShowing: false,
    }
    let addNewTestimonial = new TestimonialsModel(newTestimonialInfo)
    addNewTestimonial.save().then(result => {
        res.send(true)
    })
})




module.exports = testimonialsRouter;