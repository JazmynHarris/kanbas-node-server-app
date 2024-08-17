import * as dao from "./dao.js";
import { findCourseById } from "../Courses/dao.js";

export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const courseId = req.params.cid;
        const course = await findCourseById(courseId);
        const data = { ...req.body, course: course.number };
        const module = await dao.createModule(data);
        res.json(module);
    };

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };
    const findAllModules = async (req, res) => {

        const { courseId } = req.params;
        console.log("fam: " + courseId);
        // console.log("req: " + req.body);
        // const course = await findCourseById(courseId);
        // const modules = await dao.findAllModulesByCourseId(course.number);
        const modules = await dao.findAllModules();
        res.json(modules);
        return;
    };

    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };


    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findAllModules);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);

}
