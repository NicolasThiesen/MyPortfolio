const Arquitetura = require("../Models/Arquitetura")

module.exports = {
    async store(req,res) {
        const { nome, descricao, url_foto } = req.body;
    
        const arquitetura = await Arquitetura.create({ nome, descricao, url_foto })

        return res.json({status: "Itens inseridos com sucesso!", itens: arquitetura})
    },
    async index(req, res){
        const arquitetura = await Arquitetura.find();

        return res.json(arquitetura)
    },
    async destroy(req,res){
        await Arquitetura.findByIdAndDelete(req.params.id);
        return res.json({Mensagem: "Item removido com sucesso!"})
    }
}