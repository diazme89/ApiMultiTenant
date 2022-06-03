import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ec_tipos_enviosAttributes {
  id: number;
  cod_envio?: number;
  descripcion?: string;
  cant_dias_entrega?: number;
  costo?: number;
  envio_gratis?: string;
  cod_cuenta?: number;
}

export type ec_tipos_enviosPk = "id";
export type ec_tipos_enviosId = ec_tipos_envios[ec_tipos_enviosPk];
export type ec_tipos_enviosCreationAttributes = Optional<ec_tipos_enviosAttributes, ec_tipos_enviosPk>;

export class ec_tipos_envios extends Model<ec_tipos_enviosAttributes, ec_tipos_enviosCreationAttributes> implements ec_tipos_enviosAttributes {
  id!: number;
  cod_envio?: number;
  descripcion?: string;
  cant_dias_entrega?: number;
  costo?: number;
  envio_gratis?: string;
  cod_cuenta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ec_tipos_envios {
    ec_tipos_envios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_envio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cant_dias_entrega: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    envio_gratis: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "true"
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ec_tipos_envios',
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
  return ec_tipos_envios;
  }
}
