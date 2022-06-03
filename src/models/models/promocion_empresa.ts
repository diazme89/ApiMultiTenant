import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface promocion_empresaAttributes {
  id: number;
  cod_empresa?: number;
  id_promocion: number;
}

export type promocion_empresaPk = "id";
export type promocion_empresaId = promocion_empresa[promocion_empresaPk];
export type promocion_empresaCreationAttributes = Optional<promocion_empresaAttributes, promocion_empresaPk>;

export class promocion_empresa extends Model<promocion_empresaAttributes, promocion_empresaCreationAttributes> implements promocion_empresaAttributes {
  id!: number;
  cod_empresa?: number;
  id_promocion!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof promocion_empresa {
    promocion_empresa.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_promocion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'promocion_empresa',
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
  return promocion_empresa;
  }
}
