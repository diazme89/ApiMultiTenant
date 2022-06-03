import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cab_lista_precioAttributes {
  id: number;
  cod_lista?: number;
  descripcion?: string;
  fecha_gra?: Date;
  aplica_a?: string;
  cod_empresa?: number;
  habilitado?: string;
}

export type cab_lista_precioPk = "id";
export type cab_lista_precioId = cab_lista_precio[cab_lista_precioPk];
export type cab_lista_precioCreationAttributes = Optional<cab_lista_precioAttributes, cab_lista_precioPk>;

export class cab_lista_precio extends Model<cab_lista_precioAttributes, cab_lista_precioCreationAttributes> implements cab_lista_precioAttributes {
  id!: number;
  cod_lista?: number;
  descripcion?: string;
  fecha_gra?: Date;
  aplica_a?: string;
  cod_empresa?: number;
  habilitado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cab_lista_precio {
    cab_lista_precio.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_lista: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      unique: "cab_lista_precio_xkey1"
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_gra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aplica_a: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      defaultValue: 0
    },
    habilitado: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 'cab_lista_precio',
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
        name: "cab_lista_precio_xkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_lista" },
        ]
      },
    ]
  });
  return cab_lista_precio;
  }
}
