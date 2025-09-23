const express = require("express");

//insert post
const { insertPost } = require("../controller/controller.post");

const router = express.Router();

router.post("/insert-post", insertPost);

