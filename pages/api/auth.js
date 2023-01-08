import axios from "axios";

export default async (req, res) => {
  try {
    console.log(req.body);
    const URL = `${process.env.API}/api/auth`;
    const result = await axios.post(URL, req.body);
    console.log(result);
    res.status(200).json(result.data);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};
