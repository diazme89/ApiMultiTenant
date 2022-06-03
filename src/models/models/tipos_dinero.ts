import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipos_dineroAttributes {
  id: number;
  cod_tipo_dinero?: number;
  nombre_tipo?: string;
  cod_moneda?: number;
  unidades?: number;
  tipo?: string;
  cond_pago?: string;
}

export type tipos_dineroPk = "id";
export type tipos_dineroId = tipos_dinero[tipos_dineroPk];
export type tipos_dineroCreationAttributes = Optional<tipos_dineroAttributes, tipos_dineroPk>;

export class tipos_dinero extends Model<tipos_dineroAttributes, tipos_dineroCreationAttributes> implements tipos_dineroAttributes {
  id!: number;
  cod_tipo_dinero?: number;
  nombre_tipo?: string;
  cod_moneda?: number;
  unidades?: number;
  tipo?: string;
  cond_pago?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipos_dinero {
    tipos_dinero.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_tipo_dinero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre_tipo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    cod_moneda: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    unidades: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cond_pago: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipos_dinero',
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
  return tipos_dinero;
  }
}
