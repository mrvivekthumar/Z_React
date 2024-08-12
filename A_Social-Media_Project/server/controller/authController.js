const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error, success } = require("../utils/responseWrapper");

const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password || !name) {
            return res.send(error(400, "All Fields Are Required"));
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.send(error(409, "User Is Already Registered"));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });



        return res.send(success(201, "User created successfully"));
    } catch (e) {
        return res.send(error(500, "Internal Server Error" + e.message));
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send(error(400, "All Fields Are Required"));
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.send(error(404, "User Is Not Registered"));
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            return res.send(error(403, "Incorrect Password"));
        }

        const accessToken = generateAccessToken({
            _id: user._id,
        });

        const refreshToken = generateRefreshToken({
            _id: user._id,
        });

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            secure: true,
        });

        return res.send(success(200, { accessToken }));

    } catch (error) {
        console.log(error);
        return res.send(error(500, "Internal Server Error"));
    }
};

const refershTokenController = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies.jwt) {
        return res.send(error(401, "Refresh Token Is Required"));
    }

    const refreshToken = cookies.jwt;

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY);

        const _id = decoded._id;
        const accessToken = generateAccessToken({ _id });

        return res.send(success(201, { accessToken }));
    } catch (e) {
        return res.send(error(401, "Invalid Refresh Token"));
    }
};

// Internal function - generateAccessToken and generateRefreshToken remain unchanged

const generateAccessToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
            expiresIn: "15m",
        });
        console.log(token);
        return token;
    } catch (error) {
        console.log(error);
        throw new Error("Error generating access token");
    }
};

const generateRefreshToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
            expiresIn: "1y",
        });
        console.log(token);
        return token;
    } catch (error) {
        console.log(error);
        throw new Error("Error generating refresh token");
    }
};

module.exports = { signupController, loginController, refershTokenController };
