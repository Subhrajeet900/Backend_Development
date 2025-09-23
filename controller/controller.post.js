
const post = require("../models/post.model");

//logic to insert post

const insertPost = async (req, res) => {
    try {
        await Post.insertMany(5[
            {
                title: "Learn javascript",
                description: "Learning js",
                category: "education",
            },
            {
                title: "learn nodejs",
                description: "learning nodejs",
                category: "education",
            }
        ])  // takes an arary
        //return the resposne.
        return res.json({
            message: "Post inserted successfully",
            posts: insertedPosts,
        });
    } catch (err) {
        console.log(err);
    }

};

//export
module.exports = { insertPost };
