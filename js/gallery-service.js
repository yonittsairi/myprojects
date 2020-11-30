'use strict'
var gProjects;
const KEY = 'projects'



function createProjectsLib() {
    var projects = loadFromStorage(KEY)
    if (!projects || projects.length === 0) {
        projects = [
            createProject('Minesweeper', 'online-game', 'JS HTML CSS', 'gitADD', '01-thumbnail.jpg', '11/2020', 'me', 'web'),
            createProject('Book Shop', 'online-lib', 'JS HTML CSS', 'gitADD', '02-thumbnail.jpg', '11/2020', 'me', 'web'),
            createProject('safe content', 'web', 'JS HTML CSS', 'gitADD', '03-thumbnail.jpg', '11/2020', 'me', 'web'),
        ]

    }
    gProjects = projects
    _savegProjectsToStorage()
}

function createProject(name, desc, label, url, img, date, client, category) {
    var project = {
        id: _makeId(length = 5),
        name,
        desc,
        label,
        url,
        img,
        date,
        client,
        category,
    }
    return project
}


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function _savegProjectsToStorage() {
    saveToStorage(KEY, gProjects)
}
function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function getProjectById(projectId) {
    console.log(projectId);
    var project = gProjects.find(function (project) {
        return (projectId === project.id)
    });
    return project
}