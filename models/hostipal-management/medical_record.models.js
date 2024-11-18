import mongoose from "mongoose"

const medicalRecordSchmea = new mongoose.Schema({}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchmea)