const mongoose = require("mongoose");

const TranslateSchema = new mongoose.Schema({
    pt : String,
    eng: String
})

const ArquiteturaSchema = new mongoose.Schema({
    name: TranslateSchema,
    description: TranslateSchema,
    url_foto: String
});


module.exports = mongoose.model("Arquitetura", ArquiteturaSchema);