import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_import_archivo_ingenioAttributes {
  id: number;
  idproc?: number;
  numero_rem: number;
  numero_val: number;
  trash_kg?: number;
  kg_azucar?: number;
  nro_cta?: number;
}

export type tt_import_archivo_ingenioPk = "id";
export type tt_import_archivo_ingenioId = tt_import_archivo_ingenio[tt_import_archivo_ingenioPk];
export type tt_import_archivo_ingenioCreationAttributes = Optional<tt_import_archivo_ingenioAttributes, tt_import_archivo_ingenioPk>;

export class tt_import_archivo_ingenio extends Model<tt_import_archivo_ingenioAttributes, tt_import_archivo_ingenioCreationAttributes> implements tt_import_archivo_ingenioAttributes {
  id!: number;
  idproc?: number;
  numero_rem!: number;
  numero_val!: number;
  trash_kg?: number;
  kg_azucar?: number;
  nro_cta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_import_archivo_ingenio {
    tt_import_archivo_ingenio.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    numero_rem: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    numero_val: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    trash_kg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    kg_azucar: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    nro_cta: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_import_archivo_ingenio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tt_import_archivo_ingenio_idproc",
        using: "BTREE",
        fields: [
          { name: "idproc" },
        ]
      },
    ]
  });
  return tt_import_archivo_ingenio;
  }
}
