const nodemailer = require("nodemailer");
const sendMail = async (req,res) =>{

    let testAccount = await nodemailer.createTestAccount();

    //conect to smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'joanny.oconnell@ethereal.email',
            pass: 'kgEn8c2QpYvTQhWvy4'
        }
    });

    const info = await transporter.sendMail({
        from: '"techysquad 👻😁😜" <arti@techysquad.com>', // sender address
        to: "artilakum09@gmail.com, baz@example.com", // list of receivers
        subject: "Hello techysquad✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
    //   console.log("Message sent: %s", info.messageId);
    //  res.json(info);
    res.send(' am send mail');

};

module.exports = sendMail;