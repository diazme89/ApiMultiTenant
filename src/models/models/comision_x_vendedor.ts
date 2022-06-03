import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface comision_x_vendedorAttributes {
  id: number;
  cod_vendedor: number;
  fecha: string;
  comision?: number;
}

export type comision_x_vendedorPk = "id";
export type comision_x_vendedorId = comision_x_vendedor[comision_x_vendedorPk];
export type comision_x_vendedorCreationAttributes = Optional<comision_x_vendedorAttributes, comision_x_vendedorPk>;

export class comision_x_vendedor extends Model<comision_x_vendedorAttributes, comision_x_vendedorCreationAttributes> implements comision_x_vendedorAttributes {
  id!: number;
  cod_vendedor!: number;
  fecha!: string;
  comision?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof comision_x_vendedor {
    comision_x_vendedor.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    comision: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comision_x_vendedor',
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
  return comision_x_vendedor;
  }
}
