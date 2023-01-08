import axios from "axios";

export default async (req, res) => {
  try {
    const URL = `${process.env.API}/api/auth`;
    const result = await axios.post(URL, req.body);
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
