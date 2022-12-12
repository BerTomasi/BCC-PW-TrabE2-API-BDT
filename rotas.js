const { Router } = require('express');

const controleClinicas = require('./controladores/clinicas');
const controleMedicos = require("./controladores/medicos");

const rotas = new Router();

rotas.route('/clinicas')
     .get(controleClinicas.getClinica)
     .post(controleClinicas.addClinica)
     .put(controleClinicas.updateClinica)

rotas.route('/clinicas/:codigo')
     .delete(controleClinicas.deleteClinica)
     .get(controleClinicas.getClinicaPorCodigo)


rotas.route('/medicos')
   .get(controleMedicos.getMedico)
   .post(controleMedicos.addMedico)
   .put(controleMedicos.updateMedico)

rotas.route('/medicos/:codigo')
   .get(controleMedicos.getMedicoPorCodigo)
   .delete(controleMedicos.deleteMedico)

module.exports = rotas;