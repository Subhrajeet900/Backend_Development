const mongoose = require("mongoose");
// post schema
const userSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },

        Description: {
            type: String,
        },

        Category: {
            type: String,
        },
    },
    { timestamps: true }
);

// model

const Post = mongoose.model("Post", userSchema);

module.exports = Post;
