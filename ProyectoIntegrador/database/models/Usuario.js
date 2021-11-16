module.exports = function(sequelize, dataTypes){

    //Definir un alias
    let alias = 'Usuario'; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        apellido:{
            type: dataTypes.STRING,
        },
        nombreDeUsuario:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        fechaDeNacimiento:{
            type: dataTypes.DATE,
        },
        fotoPerfil:{
            type: dataTypes.STRING,
        },
        celular:{
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'usuarios', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at     
    }

    const Usuario = sequelize.define(alias, cols, config);

    //RELACIONES DE LA TABLA USUARIOS
    Usuario.associate = (db) => {
        Usuario.hasMany(db.Posteo, {
            as: 'posteos', 
            foreignKey: 'usuarios_id'
        });
        Usuario.hasMany(db.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuarios_id'
        });
    };

    return Usuario;
}