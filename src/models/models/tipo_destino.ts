import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipo_destinoAttributes {
  id: number;
  nombre: string;
}

export type tipo_destinoPk = "id";
export type tipo_destinoId = tipo_destino[tipo_destinoPk];
export type tipo_destinoCreationAttributes = Optional<tipo_destinoAttributes, tipo_destinoPk>;

export class tipo_destino extends Model<tipo_destinoAttributes, tipo_destinoCreationAttributes> implements tipo_destinoAttributes {
  id!: number;
  nombre!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_destino {
    tipo_destino.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipo_destino',
    timestamps: false,
    indexes: [
      {
        name: "tipo_destino_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return tipo_destino;
  }
}
