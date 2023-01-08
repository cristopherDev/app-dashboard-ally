import axios from "axios";

export default async (req, res) => {
  try {
    const { zone, token } = req.body
    const headers = {
        'authorization': 'Bearer '+token
    }
    const URL = `${process.env.API}/api/timezone?zone=${zone}`;
    const result = await axios.get(URL, { headers });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
