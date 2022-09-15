module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(19,2),
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}