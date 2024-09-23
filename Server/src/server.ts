import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Charge les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Définir une route GET
app.get('/', (req: Request, res: Response) => {
    res.send(process.env.MESSAGE || 'Default Message');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
