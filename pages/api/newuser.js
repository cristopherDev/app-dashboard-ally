import axios from "axios";

export default async (req, res) => {
  try {
    const { name, password, email } = req.body
    const URL = `${process.env.API}/api/users`;
    const result = await axios.post(URL, { name, password, email });
    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
