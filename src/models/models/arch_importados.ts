import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface arch_importadosAttributes {
  id: number;
  nombre?: string;
}

export type arch_importadosPk = "id";
export type arch_importadosId = arch_importados[arch_importadosPk];
export type arch_importadosCreationAttributes = Optional<arch_importadosAttributes, arch_importadosPk>;

export class arch_importados extends Model<arch_importadosAttributes, arch_importadosCreationAttributes> implements arch_importadosAttributes {
  id!: number;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof arch_importados {
    arch_importados.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'arch_importados',
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
  return arch_importados;
  }
}
