const Post = require("../models/Post");
const User = require("../models/User");
const { sucess, error, success } = require("../utils/responseWrapper");

const getAllPostController = async (req, res) => {
    console.log(req._id);
    return res.send(sucess(200, "These Are All The Post "));
};

const createPostController = async (req, res) => {

    try {
        const { caption } = req.body;
        const owner = req._id;

        const user = User.findById(req._id);

        const post = await Post.create({
            owner,
            caption,
        })

        user.posts.push(post._id);
        await user.save();

        res.send(success(201, post));

    } catch (e) {
        res.send(error(500, e.message));
    }
}






module.exports = {
    getAllPostController,
    createPostController,
};
