const company_service = require("../service/company-service");

async function create(req, res) {
    const {name} = req.body

    const payload = {
        name
    };

    try {
        const result = await company_service.create(payload);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
        error: error.message || "Bir hata meydana geldi",
        });
    }
}

module.exports = {create}