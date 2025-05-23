import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3000;

// JSONデータを処理できるようにする
app.use(express.json());

//ルートエンドポイント
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Plants APIへようこそ!'});
});

//サーバー起動
app.listen(port, () => {
    console.log(`サーバーがhttp://localhost:${port}で起動しました`);
});