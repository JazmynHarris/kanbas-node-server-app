import assignmentList from "../Database/assignments.js";
import * as db from "../Database/index.js";
export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = assignmentList.findIndex((a) => a._id === aid);

        if (assignmentIndex === - 1) {
            return res.status(404).send({ message: "Assignment not found" });
        }
        assignmentList.splice(assignmentIndex, 1);
        res.sendStatus(204);
    });

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = assignmentList.filter((a) => {
            console.log("cid: " + cid + " assin: " + a.course);
            return a.course === cid;
        });
        res.json(assignments);
    });

    app.post("/api/courses/:cid/assignments", (req, res) => {
        console.log("hello");
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        assignmentList.push(newAssignment);
        res.send(newAssignment);
    });

    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = assignmentList.findIndex((a) => a._id === aid);
        assignmentList[assignmentIndex] = {
            ...assignmentList[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });
    app.get("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const exists = assignmentList.find((a) => a._id === aid) !== undefined;
        const assignment = exists ? assignmentList.find((a) => a._id === aid) : {
            _id: "1234", title: "New Assignment", description: "New Assignment Description",
            points: "100", dueDate: "2023-12-15", availableDate: "2023-12-15", untilDate: "2023-12-15"
        };
        res.json(assignment);
    })
}