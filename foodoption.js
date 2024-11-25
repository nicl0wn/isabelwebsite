function sendMail(){
    var params = {
        name: "nicholas",
        email: "deadlymouse15@gmail.com",
        message: "Food chosen is: " + winner
    };
    const serviceID = "service_slbsusa"
    const templateID = "template_un5v89c"

    emailjs.send(serviceID,templateID,params)
}