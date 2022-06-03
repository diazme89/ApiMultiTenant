import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface planAttributes {
  id: number;
  codigo?: number;
  cuenta_madre?: number;
  descripcion?: string;
  imputable?: string;
  resultado?: string;
  detalle?: string;
  cod_unidad_negocio?: number;
  tipo_cotizacion?: string;
  niveles?: number;
  cod_rubro_iva?: number;
  cuenta_monetaria?: string;
}

export type planPk = "id";
export type planId = plan[planPk];
export type planCreationAttributes = Optional<planAttributes, planPk>;

export class plan extends Model<planAttributes, planCreationAttributes> implements planAttributes {
  id!: number;
  codigo?: number;
  cuenta_madre?: number;
  descripcion?: string;
  imputable?: string;
  resultado?: string;
  detalle?: string;
  cod_unidad_negocio?: number;
  tipo_cotizacion?: string;
  niveles?: number;
  cod_rubro_iva?: number;
  cuenta_monetaria?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof plan {
    plan.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true,
      unique: "plan_codigo"
    },
    cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    imputable: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    resultado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    detalle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_cotizacion: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    niveles: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    cod_rubro_iva: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cuenta_monetaria: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plan',
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
      {
        name: "plan_codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "plan_cuenta_madre",
        using: "BTREE",
        fields: [
          { name: "cuenta_madre" },
        ]
      },
    ]
  });
  return plan;
  }
}
