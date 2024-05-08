import data from "../data";

function readUserTweets(req, res) {
  try {
    const userName = req.params;
    const userTweets = data.tweets.filter(
      (tweet) => tweet.User.titleAuthor == userName
    );
    if (!userTweets[0]) throw new Error("Tweets not found");
    res.status(200).json(userTweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { readUserTweets };
