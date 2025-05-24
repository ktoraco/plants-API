import express, { Request, Response, Express } from "express";
const app: Express = express();
const port = process.env.PORT || 3000;
let plantslog: { [key: string]: any } = {};

// JSONデータを処理できるようにする
app.use(express.json());

//ルートエンドポイント
app.get("/plants", (req: Request, res: Response) => {
  res.json({
    ok: true,
    plantslog: plantslog,
  });
});

app.post("/plants", (req: Request, res: Response) => {
  const name = req.body.name;
  const status = req.body.status;

  if (!name || !status) {
    return res.status(400).json({
      ok: false,
      error: "nameとstatusは必須です",
    });
  }

  //plantslogにデータを追加
  const plantId = `plant_${Date.now()}`;
  plantslog[plantId] = { name, status };

  res.json({
    ok: true,
    received: {
      id: plantId,
      name,
      status,
    },
  });
});

//サーバー起動
app.listen(port, () => {
  console.log(`サーバーがhttp://localhost:${port}で起動しました`);
});
