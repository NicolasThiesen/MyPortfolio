const Arquitetura = require("../Models/Arquitetura")

module.exports = {
    async store(req,res) {
        const { name, description, short_description, url_photo } = req.body;

        const arquitetura = await Arquitetura.create({ name, description, short_description, url_photo })

        return res.json({status: "Itens inseridos com sucesso!", itens: arquitetura})
    },
    async index(req, res){
        const arquitetura = await Arquitetura.find();

        return res.json(arquitetura)
    },
    async destroy(req,res){
        const { id } = req.body
        const result = await Arquitetura.findByIdAndDelete(id)
        
        console.log(result);
        return res.json({Mensagem: "Item removido com sucesso!"})
    }
}