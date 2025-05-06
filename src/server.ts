import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db';

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
