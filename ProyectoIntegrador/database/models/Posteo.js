module.exports = function(sequelize, dataTypes){

    //Definir un alias
    let alias = 'Posteo'; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombreDeUsuario:{
            type: dataTypes.STRING,
        },
        pie:{
            type: dataTypes.STRING,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        fotoPerfil:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        usuarios_id:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: 'posteos', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

    const Posteos = sequelize.define(alias, cols, config);

    return Posteos;
}