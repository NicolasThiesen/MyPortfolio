const mongoose = require("mongoose");

const TranslateSchema = new mongoose.Schema({
    pt : String,
    eng: String
})

const ArquiteturaSchema = new mongoose.Schema({
    name: TranslateSchema,
    description: TranslateSchema,
    short_description: TranslateSchema,
    url_photo: String
});


module.exports = mongoose.model("Arquitetura", ArquiteturaSchema);