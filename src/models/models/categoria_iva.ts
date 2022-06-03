import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface categoria_ivaAttributes {
  id: number;
  categoria_iva?: string;
  descripcion?: string;
}

export type categoria_ivaPk = "id";
export type categoria_ivaId = categoria_iva[categoria_ivaPk];
export type categoria_ivaCreationAttributes = Optional<categoria_ivaAttributes, categoria_ivaPk>;

export class categoria_iva extends Model<categoria_ivaAttributes, categoria_ivaCreationAttributes> implements categoria_ivaAttributes {
  id!: number;
  categoria_iva?: string;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof categoria_iva {
    categoria_iva.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_iva: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categoria_iva',
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
  return categoria_iva;
  }
}
