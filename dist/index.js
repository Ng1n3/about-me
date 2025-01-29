import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send({ message: 'Server is up an running' });
});
app.get('/api/v1/about', (req, res) => {
    res.send({
        email: 'olumuyiwa@gmail.com',
        current_datetime: new Date(),
        github_url: 'https://github.com/Ng1n3/about-me',
    });
});
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Route not found' });
});
app.listen(PORT, () => {
    console.log(`Server is currently listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map