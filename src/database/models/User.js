module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pass:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pass_sin_cryp:{
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar:{
            type: DataTypes.STRING,
        },
        admin:{
            type: DataTypes.BOOLEAN
        }

    };
    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}