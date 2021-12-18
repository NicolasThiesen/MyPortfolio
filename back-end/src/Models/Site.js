const mongoose = require("mongoose");

const TranslateSchema = new mongoose.Schema({
    pt : String,
    eng: String
})

const SiteSchema = new mongoose.Schema({
    name: TranslateSchema,
    description: TranslateSchema,
    url_site: String,
    url_photo: String
});

module.exports = mongoose.model("Site", SiteSchema);