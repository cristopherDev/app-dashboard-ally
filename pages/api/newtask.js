import axios from "axios";

export default async (req, res) => {
  try {
    const { userId, task, token } = req.body
    const headers = {
        'authorization': 'Bearer '+token
    }
    const URL = `${process.env.API}/api/tasks`;
    const result = await axios.post(URL, { userId, task },{ headers });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
