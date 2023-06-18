typescript
// server.ts
import express, { Request, Response } from ‘express’;
import cors from ‘cors’;
import { Pool } from ‘pg’;

const app = express();
const port = 3001;
const pool = new Pool({
user: ‘your-username’,
host: ‘your-database-host’,
database: ‘your-database-name’,
password: ‘your-database-password’,
port: 5432,
});

app.use(cors());

app.get(‘/api/patients’, async (req: Request, res: Response) => {
try {
const query = ‘SELECT * FROM patients’;
const result = await pool.query(query);
res.json(result.rows);
} catch (error) {
console.error(‘Error fetching patients:’, error);
res.status(500).json({ error: ‘Internal server error’ });
}
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
