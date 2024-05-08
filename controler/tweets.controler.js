import data from "../data.js";

function readTweet(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function createTweet(req, res) {
  try {
    data.tweets.push(req.body);
    res.status(201).json({ message: "Data saved succefully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { readTweet, createTweet };
