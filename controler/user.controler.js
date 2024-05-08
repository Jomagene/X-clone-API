import data from "../data.js";

function userControler(req, res) {
  try {
    const currentName = data.currentUser.titleAuthor;
    const currentTweets = data.tweets.filter(
      (tweet) => tweet.User.titleAuthor == currentName
    );
    if (!currentTweets[0]) throw new Error("Tweet not found");
    res.status(200).json(currentTweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { userControler };
