'use strict'
function onInit() {
    createProjectsLib()
    renderProjects()
}


function renderProjects() {
    var projects = getProjectsForDisplay()
    var str = projects.map(function (project) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="onUpdateModal('${project.id}')" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.img}" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.desc}</p>
      </div>
    </div>`});

    $('.proj').html(str.join(''))
}

function renderModal(project) {
    $('.modal-body').html(
        `<h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.label}</p>
         <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.img}" alt="">
         <p class="desc">${project.desc}</p>
         <ul class="list-inline">
         <li class="date">Date:${project.date}</li>
        <li class="client">Client: ${project.client}</li>
        <li class="category">Category: ${project.category}</li>
        </ul>
         <button class="btn btn-primary" data-dismiss="modal" type="button">
         <i class="fa fa-times"></i>
         Close Project</button>`)


}
function getProjectsForDisplay() {
    return gProjects

}
function onUpdateModal(projectId) {
    var project = getProjectById(projectId)
    renderModal(project)
}

function onFormSubmit() {
    var email = $('input[id=email]').val()
    var subject = $('input[id=subject]').val()
    var body = `from  ${email}  \n` + $('textarea[id=message]').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yonit@example.com&su=${subject}&body=${body}`)
}

