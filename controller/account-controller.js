async function me(req, res) {
    console.log("alkdaşkdsad")
    return res.json({ user: req.user });
}

module.exports = {me}