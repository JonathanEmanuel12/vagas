const Usuario = require('../models/usuario.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const usuarios = await Usuario.findAll({
      attributes: {exclude: ['senha']}
    });
    res.json(usuarios);
  }
  catch(error) {
    res.json({mensagem: error.message});
  }
});

router.get('/:id', async function(req, res, next) {
  console.log("Entrou no :id");
  try{
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: {exclude: ['senha']}
    });
    res.json(usuario);
  }
  catch(error)
  {
    res.json({mensagem: error.message});
  }
  
});

router.post('/', async function(req, res, next) {
  try {
    await Usuario.create({
      nome: req.body.nome,
      email: req.body.email,
      nome_empresa: req.body.nome_empresa,
      senha:  req.body.senha,
      telefone: req.body.telefone
    });
    res.json({retorno: "Incluído com sucesso"});
  }
  catch(error) {
    res.json({mensagem: error.message});
  }
  
});

router.put('/:id', async function(req, res, next) {
  try {
    console.log("put");
    const usuario = await Usuario.findByPk(req.params.id);

    if(usuario == null) {
      throw new Error('Nenhum usuário encontrado');
    }
    console.log(req.body);
    if(req.body.nome) { usuario.name = req.body.name }
    if(req.body.email) { throw new Error('Rota incorreta para alterar informações de login(email e senha)') }
    if(req.body.nome_empresa) { usuario.nome_empresa = req.body.nome_empresa }
    if(req.body.senha) { throw new Error('Rota incorreta para alterar informações de login(email e senha)') }
    if(req.body.telefone) { usuario.telefone = req.body.telefone }
    await usuario.save();
    res.json(usuario);
  }
  catch(error) {
    res.json({mensagem: error.message});
  }
});

router.put('/login/:id', async function(req, res) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if(!(req.body.email && req.body.senha)) {
      throw new Error('Informe email e senha');
    }
    if(usuario == null) {
      throw new Error('Nenhum usuário encontrado');
    }
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;

    usuario.save();
    res.json(usuario);
  }
  catch(error) {
    res.json({mensagem: error.message});
  }
  
})

router.delete('/:id', async function(req, res, next) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if(usuario == null) {
      throw new Error('Usuário não encontrado');
    }
    usuario.destroy();
    res.json({mensagem: 'Deletado com sucesso'});
  }
  catch(error) {
    res.json({ mensagem: error.message });
  }

});
module.exports = router;

