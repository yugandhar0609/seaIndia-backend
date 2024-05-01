const UserDB = require("../Models/UserModels");
const nodeMailer = require("nodemailer");

const CreateUserData = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const CreateData = new UserDB({ firstName, lastName, email, phone, message });
    await CreateData.save();
    await SendMailToUser(firstName, lastName, email, phone, message); 
    res.json({
      data: CreateData,
      message: "Form submitted successfully!",
      success: true, 
    });
  } catch (error) {
    res.status(500).json({
      error: error.message, 
      message: "Error submitting form",
      success: false, 
    });
  }
};

const SendMailToUser = async (firstName, lastName, email, phone, message) => {
  try {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "yugandhardeveloper@gmail.com",
        pass: "xcms leoa dyol rxsy",
      },
    });
    const mailOption = {
      from: email,
      to: "yugandhardeveloper@gmail.com",
      subject: "New Form Submission",
      html: `
        <h1>New Form Submission</h1>
        <p>Name: ${firstName}</p>
        <p>Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>        
        <p>Message: ${message}</p>
      `,
    };
    await transporter.sendMail(mailOption);
    console.log("Mail sended sucussfully");
  } catch (error) {
    console.error("Error in sending email:", error);
  }
};

module.exports = CreateUserData;
