import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'firzdrama.html'));
});

// Database paths (Note: Local JSON won't persist on Vercel between restarts)
const DB_USERS = path.join(process.cwd(), 'db_users.json');
const DB_CHATS = path.join(process.cwd(), 'db_chats.json');
const DB_LOGS = path.join(process.cwd(), 'db_logs.json');
const DB_PLAYLISTS = path.join(process.cwd(), 'db_playlists.json');
const DB_HISTORY = path.join(process.cwd(), 'db_history.json');

// Helper to read/write
const readDB = (file, def) => {
    if (!fs.existsSync(file)) return def;
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) { return def; }
};

const writeDB = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// API Endpoints
app.get('/api/load-all', (req, res) => {
    res.json({
        users: readDB(DB_USERS, []),
        chats: readDB(DB_CHATS, []),
        logs: readDB(DB_LOGS, []),
        playlists: readDB(DB_PLAYLISTS, {}),
        history: readDB(DB_HISTORY, {})
    });
});

app.post('/api/sync-users', (req, res) => {
    writeDB(DB_USERS, req.body);
    res.send({ status: 'ok' });
});

app.post('/api/sync-chats', (req, res) => {
    writeDB(DB_CHATS, req.body);
    res.send({ status: 'ok' });
});

app.post('/api/sync-logs', (req, res) => {
    writeDB(DB_LOGS, req.body);
    res.send({ status: 'ok' });
});

app.post('/api/sync-playlists', (req, res) => {
    writeDB(DB_PLAYLISTS, req.body);
    res.send({ status: 'ok' });
});

app.post('/api/sync-history', (req, res) => {
    writeDB(DB_HISTORY, req.body);
    res.send({ status: 'ok' });
});

// Export for Vercel
export default app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 FIRZDRAMA SERVER AKTIF! PORT: ${PORT}`);
    });
}
