import File from '../schemas/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const handleFileUpload = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        response.status(200).json({ fileId: file._id });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}