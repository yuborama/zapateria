import { IContact } from '../interfaces/interfaces';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'Stacklycode@gmail.com',
    pass: 'Stacklycode77.',
  },
});

const mailer = ({ input }: IContact) => {
  const { email, name, message, subject } = input;
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const messageSend = {
    from,
    to: 'stacklycode@gmail.com',
    subject: `${subject} : Mensaje de ${from} `,
    text: message,
    replyTo: from,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(messageSend, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

const resolvers = {
  Query: {
    getDo: async () => {
      return 'do';
    },
  },
  Mutation: {
    newContact: async (_: null, { input }: IContact) => {
      const { email, message, name, subject } = input;

      if (email === '' || name === '' || message === '' || subject === '') {
        throw new Error('Send All Data');
      }
      await mailer({
        input,
      });

      return '200';
    },
  },
};

export default resolvers;
