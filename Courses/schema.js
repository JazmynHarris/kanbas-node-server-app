import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    image: String,
},
    { collection: "courses" }
);
export default courseSchema;