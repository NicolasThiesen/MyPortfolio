const Site = require("../Models/Site")

module.exports = {
    async store(req,res) {
        const { name, description, short_description, url_site, url_photo } = req.body;
    
        const site = await Site.create({ name, description, short_description, url_site, url_photo })

        return res.json({status: "Itens inseridos com sucesso!", itens: site})
    },
    async index(req, res){
        const site = await Site.find();

        return res.json(site)
    },
    async destroy(req,res){
        const { id } = req.body
        await Site.findByIdAndDelete(id);
        
        return res.json({Mensagem: "Item removido com sucesso!"})
    }
}