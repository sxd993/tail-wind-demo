const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Разрешить CORS

app.post('/submit', (req, res) => {
    const email = req.body.email;

    // Читаем существующий файл JSON или создаем новый
    fs.readFile('submissions.json', (err, data) => {
        let submissions = [];
        if (!err) {
            submissions = JSON.parse(data);
        }

        // Добавляем новую запись
        submissions.push({ email });

        // Сохраняем обратно в файл
        fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Ошибка при сохранении данных');
            }
            res.send('Ваши данные успешно отправлены');
        });
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
