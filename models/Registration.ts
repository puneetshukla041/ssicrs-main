// models/Registration.ts
import mongoose, { Schema, model, models } from "mongoose";

const RegistrationSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    dob: { type: Date }, // Corrected to Date
    experience: { type: Number }, // Corrected to Number
    institution: { type: String },
    callDateTime: { type: Date }, // Corrected to Date
    hearAboutUs: { type: String },
    currentProfession: { type: String },
    specialization: { type: String },
    learningGoals: { type: String },
    trainingPrograms: { type: [String] },
    additionalPrograms: { type: [String] },
    termsAgree: { type: Boolean, required: true },
    uploadId: { type: mongoose.Schema.Types.ObjectId, default: null }, // GridFS file ID
    uploadName: { type: String, default: null }, // original filename
  },
  { timestamps: true }
);

export default models.Registration || model("Registration", RegistrationSchema);