import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface secuenciaAttributes {
  secuencia: number;
  desde?: number;
  hasta?: number;
}

export type secuenciaPk = "secuencia";
export type secuenciaId = secuencia[secuenciaPk];
export type secuenciaCreationAttributes = Optional<secuenciaAttributes, secuenciaPk>;

export class secuencia extends Model<secuenciaAttributes, secuenciaCreationAttributes> implements secuenciaAttributes {
  secuencia!: number;
  desde?: number;
  hasta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof secuencia {
    secuencia.init({
    secuencia: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false,
      primaryKey: true
    },
    desde: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    hasta: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'secuencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secuencia" },
        ]
      },
    ]
  });
  return secuencia;
  }
}
