const Project = require("../models/project");


const all = (request,response)=>{
    Project.find()
        .then(result=>{
            response.render("projects",{projects : result});
        })
        .catch(err =>console.log(err));
};

const getCreate = (request,response)=>{
    response.render("projects/create")
};

const storeCreate = (request,response)=>{
    Project.create(request.body)
        .then(()=>response.redirect("/projects"))
        .catch(err=> console.log(err))
};

const getUpater = (request,response)=>{
    const id = request.params.id;
    Project.findById(id)
        .then(project =>{
            response.render("projects/update", {project});
        })
        .catch(err => console.log(err));
};
const storeUpdate = (request, response)=>{
    const project = request.body;
    Project.findByIdAndUpdate(project._id,{name: project.name, description: project.description})
        .then(()=>response.redirect("/projects"))
        .catch(err =>console.log( err));
};
const getDelete = (request, response)=>{
    const id = request.params.id;
    response.render("projects/delete",{_id : id });
};

const storeDelete = (request, response)=> {
    Project.findByIdAndDelete(request.body._id)
        .then(()=> response.redirect("/projects"))
        .catch(err=> console.log(err));
};

module.exports = {
    all,
    getCreate,
    storeCreate,
    getUpater,
    storeUpdate,
    getDelete,
    storeDelete
}