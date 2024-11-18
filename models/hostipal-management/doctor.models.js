import mongoose from "mongoose"

const hostipalHourSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: true,
  }
  
})

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  qualification:{
    type: Stirng,
    required: true
  },
  experienceInYears: {
    type: Number,
    default: 0
  },
  workInHostipals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  hostipalHours: {
  type: [hostipalHour]
},]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)