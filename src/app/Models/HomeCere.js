// models/user.js
const mongoose = require("mongoose");

// Define the schema
const HomeCereSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true, // Specify the field as unique
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    postalCode: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    medicalId: {
      type: String,
      required: true,
    },

    mltc: {
      type: String,
      required: true,
    },

    switchingAgency: {
      type: String,
      required: true,
    },

    lookingFor: {
      type: String,
      required: true,
    },

    callingTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

// Create the model
const HomeCere = mongoose.model("HomeCere", HomeCereSchema);
module.exports = HomeCere;
