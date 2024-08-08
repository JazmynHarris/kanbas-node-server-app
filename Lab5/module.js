const module = {
    id: "123",
    name: "Learning React",
    description: "This will focus on learning React",
    course: "Web Dev"
};

export default function Module(app) {
    app.get('/lab5/module', (req, res) => {
        res.json(module);
    });
    app.get('/lab5/module/name', (req, res) => {
        res.json(module.name);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });
    app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.name = newDescription;
        res.json(module);
    });
    
}