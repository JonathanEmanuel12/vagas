const hash = require('object-hash');
const { DataTypes } = require('sequelize');
const db = require('./db.js');

const Usuario = db.define("usuarios", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome_empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('senha', hash(this.email + value));
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

async function criarTabela() { 
    await db.sync();
}

criarTabela();

module.exports = Usuario;