import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("2PACX-1vRQATDXx4dhn6cKNmzFvgsv1yU2e_oz3If_g-XzCMxxhFCnv1UYgD5g0Kur0D__3ug5c4--qVuPuiMv");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
