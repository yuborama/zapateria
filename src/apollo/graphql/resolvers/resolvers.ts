import { IContact } from "../interfaces/interfaces";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  secure: false,
  auth: {
    user: 'postmaster@forever19.online',
    pass: '5b501b8fe96eab1a456d17cd8989e76d-90ac0eb7-56664073',
  },
});

const mailer = async ({ input }: IContact) => {
  const { email, name, message, subject } = input;
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  // let info = await transporter.sendMail({
  //   from: `"Fred Foo 👻" <${email}>`, // sender address
  //   to: "davidjohan2@hotmail.com", // list of receivers
  //   subject:  `${subject} : Mensaje de ${from} `, // Subject line
  //   text: message, // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });
  let info = await transporter.sendMail({
    from: `"Forever_19 👻" <${email}>`, // sender address
    to: "davidjohan2@hotmail.com", // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  const messageSend = {
    from: "postmaster@forever19.online",
    to: "davidjohan2@hotmail.com",
    subject: `${subject} : Mensaje de ${from} `,
    text: message,
    replyTo: from,
  };
};

const resolvers = {
  Query: {
    getDo: async () => {
      return "do";
    },
  },
  Mutation: {
    newContact: async (_: null, { input }: IContact) => {
      const { email, message, name, subject } = input;

      if (email === "" || name === "" || message === "" || subject === "") {
        throw new Error("Send All Data");
      }
      await mailer({
        input,
      });

      return "200";
    },
  },
};

export default resolvers;
