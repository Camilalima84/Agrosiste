const sequelize = require('../index')

const usuario = sequelize.define('usuario',{
    id:{
        type: DataTypes.INT,
        allowNull: false
    },nome:{
        type: DataTypes.STRING,
        allowNull: false
    },senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
});