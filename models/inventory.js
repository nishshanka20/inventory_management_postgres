module.exports = (sequelize, Datatypes) => {
  const Inventory = sequelize.define(
    "Inventory",
    {
      product_Id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      product_quantity: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      product_price: {
        type: Datatypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Inventory;
};
