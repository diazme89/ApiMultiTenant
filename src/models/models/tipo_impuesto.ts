import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipo_impuestoAttributes {
  id: number;
  cod_tipo: number;
  tipo_impuesto: string;
}

export type tipo_impuestoPk = "id";
export type tipo_impuestoId = tipo_impuesto[tipo_impuestoPk];
export type tipo_impuestoCreationAttributes = Optional<tipo_impuestoAttributes, tipo_impuestoPk>;

export class tipo_impuesto extends Model<tipo_impuestoAttributes, tipo_impuestoCreationAttributes> implements tipo_impuestoAttributes {
  id!: number;
  cod_tipo!: number;
  tipo_impuesto!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_impuesto {
    tipo_impuesto.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_tipo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    tipo_impuesto: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipo_impuesto',
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
  return tipo_impuesto;
  }
}
