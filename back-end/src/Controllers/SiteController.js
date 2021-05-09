const Site = require("../Models/Site")

module.exports = {
    async store(req,res) {
        const { nome, descricao, url_site, url_foto } = req.body;
    
        const site = await Site.create({ nome, descricao, url_site, url_foto })

        return res.json({status: "Itens inseridos com sucesso!", itens: site})
    },
    async index(req, res){
        const site = await Site.find();

        return res.json(site)
    },
    async destroy(req,res){
        await Site.findByIdAndDelete(req.params.id);
        return res.json({Mensagem: "Item removido com sucesso!"})
    }
}