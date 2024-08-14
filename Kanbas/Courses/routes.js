import courses from "../Database/courses.js";

export default function CourseRoutes(app) {
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const updatedCourse = req.body;

        const courseIndex = courses.findIndex((c) => c._id === id);
        if (courseIndex === -1) {
            return res.status(404).send({ message: "Course not found" });
        }

        courses[courseIndex] = { ...courses[courseIndex], ...updatedCourse };
        res.sendStatus(204);
    });

    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const courseIndex = courses.findIndex((c) => c._id === id);

        if (courseIndex === -1) {
            return res.status(404).send({ message: "Course not found" });
        }

        courses.splice(courseIndex, 1);
        res.sendStatus(204);
    });

    app.post("/api/courses", (req, res) => {
        const newCourse = {
            ...req.body,
            _id: new Date().getTime().toString(), // Generate a new unique ID
        };
        courses.push(newCourse);
        res.status(201).json(newCourse);
    });

    app.get("/api/courses", (req, res) => {
        res.json(courses);
    });
}