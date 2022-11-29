let nodemailer=require("nodemailer");
let express=require("express");
let mailValidator=require("./MailValidator");

let app=express();
app.use(express.json());

app.post("/sendMail",async(req,res)=>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "narasimhulugaridevendra@gmail.com",
          pass: "snbwiborutnhvmbt"
        }
    });
    let mailOptions={
        from:req.body.from,
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text
    }

    let toMail=req.body.to;
    let status=await mailValidator(toMail).then((data)=>{
        return data
    })
    .catch((error)=>{
        return error
    })
    let email_status=status.response.email_status;
    if(email_status==='No'){
        return res.send("Invalid email")
    }
    else{
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.send(error)
            }
            else{
                return res.send(info)
            }
        });
    }
})
app.listen(9000,()=>{
    console.log("server running")
})
 
