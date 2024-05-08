import data from "../data";

function readTweet(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function createTweet(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { readTweet, createTweet };
