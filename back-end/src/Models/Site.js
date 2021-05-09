const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    url_site: String,
    url_foto: String
});

module.exports = mongoose.model("Site", SiteSchema);