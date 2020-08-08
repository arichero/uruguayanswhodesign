import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1bGjq4zGnt4DMtmF5l6Jo3xBaVh1HaVdhSU9M995EW_k");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
