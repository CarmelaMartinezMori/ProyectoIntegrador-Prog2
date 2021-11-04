module.exports = function(sequelize, dataTypes){

    //Definir un alias
    let alias = 'Posteo'; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombreDeUsuario:{
            type: dataTypes.STRING
        },
        pie:{
            type: dataTypes.STRING
        },
        imagen:{
            type: dataTypes.STRING
        },
        fotoPerfil:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        usuarios_id:{
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'posteos', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
    }

    const Posteos = sequelize.define(alias, cols, config);

    return Posteos;
}