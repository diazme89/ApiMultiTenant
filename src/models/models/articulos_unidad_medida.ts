import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_unidad_medidaAttributes {
  id: number;
  cod_articulo: number;
  unidad_de_medida?: string;
}

export type articulos_unidad_medidaPk = "id";
export type articulos_unidad_medidaId = articulos_unidad_medida[articulos_unidad_medidaPk];
export type articulos_unidad_medidaCreationAttributes = Optional<articulos_unidad_medidaAttributes, articulos_unidad_medidaPk>;

export class articulos_unidad_medida extends Model<articulos_unidad_medidaAttributes, articulos_unidad_medidaCreationAttributes> implements articulos_unidad_medidaAttributes {
  id!: number;
  cod_articulo!: number;
  unidad_de_medida?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_unidad_medida {
    articulos_unidad_medida.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    unidad_de_medida: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_unidad_medida',
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
  return articulos_unidad_medida;
  }
}
