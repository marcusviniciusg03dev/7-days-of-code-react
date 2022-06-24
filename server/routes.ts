import path from 'path';
import fs from 'fs';
import { config } from 'dotenv';
import { Request, Response, Router } from "express";
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail'

const plants = require('./data/plants.json');

config({ path: './.env' });

sgMail.setApiKey(process.env.SENDGRID_SENDER_API_KEY!);

const routes = Router();

routes.post('/register-email', async (request: Request, response: Response) => {
    const { emailAddress, name } : { emailAddress: string, name: string } = request.body;

    try {

        if (!emailAddress || !name) return response.status(400).send({ message: 'No name or e-mail.' });

        await sgMail.send({
            from: process.env.SENDER_EMAIL!,
            to: emailAddress,
            subject: 'Boas-vindas ao nosso sistema!',
            html: fs.readFileSync(path.resolve(__dirname, 'emails', 'welcome.html'), 'utf-8').replace('#{{name}}', name)
        });

        return response.status(200).send({ message: "E-mail successfully sended." });

    } catch (error: any) {
        return response.status(error.status || 400).send({ message: error.message || 'Unexpected error.' })
    }
})

routes.get('/plants', async (request: Request, response: Response) => {

    try {

        return response.status(200).send(plants);

    } catch (error: any) {
        return response.status(error.status || 400).send({ message: error.message || 'Unexpected error.' })
    }

})

export default routes;