import express from 'express';
import upload from '../utils/upload.js';
import { handleFileUpload } from '../controller/image-controller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), handleFileUpload);

export default router;