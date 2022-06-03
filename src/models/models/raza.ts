import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface razaAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type razaPk = "id";
export type razaId = raza[razaPk];
export type razaCreationAttributes = Optional<razaAttributes, razaPk>;

export class raza extends Model<razaAttributes, razaCreationAttributes> implements razaAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof raza {
    raza.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raza',
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
  return raza;
  }
}
