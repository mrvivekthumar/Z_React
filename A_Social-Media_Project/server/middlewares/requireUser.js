const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (
        !req.headers ||
        !req.headers.authorization ||
        req.headers.authorization.startsWith("Bearer")
    ) {
        // return res.status(401).send("Authorization Header Is Required ");
        return res.send(sucess(401, "Authorization Header Is Required"));
    }

    const accessToken = req.headers.authorization.split(" ")[1];

    console.log(accessToken);

    try {
        const decoded = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_PRIVATE_KEY
        );

        req._id = decoded._id;

        next();
    } catch (e) {
        console.log(e);
        return res.send(error(401, "Invalid Access Key"));
    }

    next();
};
