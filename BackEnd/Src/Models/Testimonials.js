const mongoose = require("mongoose");

let TestimonialsSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true,
  },
  CREATED_AT: {
    type: String,
    require,
    trim: true,
  },
  jobTitle: {
    type: String,
    require: true,
    minLength: 2,
    trim: true,
  },
  text: {
    type: String,
    require: true,
    minLength: 8,
    trim: true,
  },
  isShowing: {
    type: Boolean,
  }
});

let Testimonials = mongoose.model("Testimonials", TestimonialsSchema);

module.exports = Testimonials;
