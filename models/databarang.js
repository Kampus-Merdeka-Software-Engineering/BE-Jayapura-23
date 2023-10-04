'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataBarang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataBarang.init({
    nama: DataTypes.STRING,
    nomorHP:  DataTypes.STRING,
    email:  DataTypes.STRING,
    alamatTujuan:  DataTypes.STRING,
    namaBarang:  DataTypes.STRING,
    nomoResi: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'DataBarang',
  });
  return DataBarang;
};