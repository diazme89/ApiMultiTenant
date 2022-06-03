import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tarjetas_planAttributes {
  id: number;
  id_tarjeta: number;
  codigo: number;
  descripcion: string;
  cuotas: number;
  recargo?: number;
  tna?: number;
  tem?: number;
  coeficiente?: number;
  habilitada: number;
  arancel?: number;
  costo_financiero?: number;
  iva?: number;
  descuento?: number;
  vigencia_desde?: string;
  vigencia_hasta?: string;
  plazo_modo_acreditacion?: string;
  plazo_acreditacion?: string;
  dia_lunes?: number;
  dia_martes?: number;
  dia_miercoles?: number;
  dia_jueves?: number;
  dia_viernes?: number;
  dia_sabado?: number;
  dia_domingo?: number;
  cod_cuenta?: number;
  cuota_hasta?: number;
}

export type tarjetas_planPk = "id";
export type tarjetas_planId = tarjetas_plan[tarjetas_planPk];
export type tarjetas_planCreationAttributes = Optional<tarjetas_planAttributes, tarjetas_planPk>;

export class tarjetas_plan extends Model<tarjetas_planAttributes, tarjetas_planCreationAttributes> implements tarjetas_planAttributes {
  id!: number;
  id_tarjeta!: number;
  codigo!: number;
  descripcion!: string;
  cuotas!: number;
  recargo?: number;
  tna?: number;
  tem?: number;
  coeficiente?: number;
  habilitada!: number;
  arancel?: number;
  costo_financiero?: number;
  iva?: number;
  descuento?: number;
  vigencia_desde?: string;
  vigencia_hasta?: string;
  plazo_modo_acreditacion?: string;
  plazo_acreditacion?: string;
  dia_lunes?: number;
  dia_martes?: number;
  dia_miercoles?: number;
  dia_jueves?: number;
  dia_viernes?: number;
  dia_sabado?: number;
  dia_domingo?: number;
  cod_cuenta?: number;
  cuota_hasta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tarjetas_plan {
    tarjetas_plan.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_tarjeta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cuotas: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    recargo: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    tna: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    tem: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    coeficiente: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    habilitada: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    arancel: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    costo_financiero: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    iva: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    descuento: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    vigencia_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vigencia_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    plazo_modo_acreditacion: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    plazo_acreditacion: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dia_lunes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_martes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_miercoles: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_jueves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_viernes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_sabado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dia_domingo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cod_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cuota_hasta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tarjetas_plan',
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
        name: "tarjetas_plan_idx1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tarjeta" },
          { name: "codigo" },
        ]
      },
    ]
  });
  return tarjetas_plan;
  }
}
