module.exports = function(sequelize, dataTypes){

    //Definir un alias
    let alias = 'Comentario'; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

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
        texto:{
            type: dataTypes.STRING
        },
        usuarios_id:{
            type: dataTypes.INTEGER
        },
        posteos_id:{
            type: dataTypes.INTEGER
        },
        creacion:{
            type: dataTypes.DATE
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'comentarios', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at      
    }

    const Comentario = sequelize.define(alias, cols, config);

    return Comentario;
}