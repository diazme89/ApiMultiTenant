import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comprobantes_destinoAttributes {
  id: number;
  destino: string;
}

export type comprobantes_destinoPk = "id";
export type comprobantes_destinoId = comprobantes_destino[comprobantes_destinoPk];
export type comprobantes_destinoCreationAttributes = Optional<comprobantes_destinoAttributes, comprobantes_destinoPk>;

export class comprobantes_destino extends Model<comprobantes_destinoAttributes, comprobantes_destinoCreationAttributes> implements comprobantes_destinoAttributes {
  id!: number;
  destino!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof comprobantes_destino {
    comprobantes_destino.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    destino: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comprobantes_destino',
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
  return comprobantes_destino;
  }
}
