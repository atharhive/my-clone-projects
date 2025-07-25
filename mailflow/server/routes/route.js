import express from 'express';

import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
    moveEmailsToBin, toggleReadEmails } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/starred', toggleStarredEmail);
routes.post('/read', toggleReadEmails);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

export default routes;