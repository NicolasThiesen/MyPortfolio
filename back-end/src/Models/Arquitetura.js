const mongoose = require("mongoose");

const ArquiteturaSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    url_foto: String
});

module.exports = mongoose.model("Arquitetura", ArquiteturaSchema);