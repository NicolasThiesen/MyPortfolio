const express = require("express");
const Site = require("./Controllers/SiteController");
const Arquitetura = require("./Controllers/ArquiteturaController");

const routes = express.Router();

routes.post("/site", Site.store);
routes.post("/arquitetura", Arquitetura.store);
routes.get("/site", Site.index);
routes.get("/arquitetura", Arquitetura.index);
routes.delete("/site", Site.destroy);
routes.delete("/arquitetura", Arquitetura.destroy);


module.exports = routes;