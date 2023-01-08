import axios from "axios";

export default async (req, res) => {
  try {
    const { token } = req.body
    const headers = {
        'authorization': 'Bearer '+token
    }
    const URL = `${process.env.API}/api/users?page=0&limit=20`;
    const result = await axios.get(URL, { headers });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
