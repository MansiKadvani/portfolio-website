import Contact from "../models/Contact";

export const submitContact = async (req:any, res:any) => {

  try {

    const { name, email, message } = req.body;

    if(!name || name.length < 3){
      return res.status(400).json({
        message:"Name must be at least 3 characters"
      });
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if(!email || !emailRegex.test(email)){
      return res.status(400).json({
        message:"Invalid email address"
      });
    }

    if(!message || message.length < 10){
      return res.status(400).json({
        message:"Message must be at least 10 characters"
      });
    }

    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    res.status(200).json({
      message:"Message sent successfully"
    });

  } catch (error) {

    res.status(500).json({
      message:"Server error"
    });

  }
};