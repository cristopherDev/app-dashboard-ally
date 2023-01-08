import axios from "axios";

export default async (req, res) => {
  try {
    const { id, status, token } = req.body
    const headers = {
        'authorization': 'Bearer '+token
    }
    const URL = `${process.env.API}/api/tasks/${id}`;
    const result = await axios.patch(URL, { status },{ headers });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
