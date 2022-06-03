import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_transformacionAttributes {
  id: number;
  cod_articulo?: number;
  cod_articulo_relacion?: number;
  cantidad?: number;
  id_um?: number;
}

export type articulos_transformacionPk = "id";
export type articulos_transformacionId = articulos_transformacion[articulos_transformacionPk];
export type articulos_transformacionCreationAttributes = Optional<articulos_transformacionAttributes, articulos_transformacionPk>;

export class articulos_transformacion extends Model<articulos_transformacionAttributes, articulos_transformacionCreationAttributes> implements articulos_transformacionAttributes {
  id!: number;
  cod_articulo?: number;
  cod_articulo_relacion?: number;
  cantidad?: number;
  id_um?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_transformacion {
    articulos_transformacion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_articulo_relacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    id_um: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_transformacion',
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
    ]
  });
  return articulos_transformacion;
  }
}
