import axios from "axios";

export default async (req, res) => {
  try {
    const { id, token } = req.body
    const headers = {
        'authorization': 'Bearer '+token
    }
    const URL = `${process.env.API}/api/users/${id}/tasks`;
    const result = await axios.get(URL, { headers });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
