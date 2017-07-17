const ua = require('universal-analytics')
const config = require('../config')

let UNIVERSAL_ANALYTICS = config.UNIVERSAL_ANALYTICS

let sessions = {}



function track(eventName, payload) {
    console.log('track', eventName, payload)
}

function getVisitorFromFBID(id){
    if(sessions.hasOwnProperty(id)){
        let visitor = ua.createFromSession({uid: sessions[id]})
        console.log("have visitor1 = ", visitor)
    }
    else{
        let visitor = ua.Visitor({tid: UNIVERSAL_ANALYTICS, uid: id})
        console.log("have visitor2 = ", visitor)
    }
}

function startQuiz(user, visitor) {
    console.log('__startQuiz__', user, visitor)
    visitor.pageview("/", "http://quizchatbot-ce222.firebaseapp.com/", "Welcome", (err) => {
        console.log("Analytics error = ", err)
    })
    visitor.event("Chat", "Received message").send()
}

function playing(user, visitor) {
    console.log('__playing__', user, visitor)
    visitor.pageview("/", "http://quizchatbot-ce222.firebaseapp.com/", "Playing", function (err) {
        console.log("Analytics error = ", err)
    })
    visitor.event("Playing", "Answer quesyion").send()
}

module.exports = { track, startQuiz, playing, getVisitorFromFBID}
