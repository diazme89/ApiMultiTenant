import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_comprob_ingresos_brutoAttributes {
  id: number;
  id_comprobante: number;
  numero: number;
  id_impuestoTercero: number;
  declaracion_jurada_periodo?: string;
  declaracion_jurada_presentacion?: string;
  cod_empresa?: number;
  tipo_juridico_fisico?: number;
  fecha_ret?: string;
}

export type compras_comprob_ingresos_brutoPk = "id";
export type compras_comprob_ingresos_brutoId = compras_comprob_ingresos_bruto[compras_comprob_ingresos_brutoPk];
export type compras_comprob_ingresos_brutoCreationAttributes = Optional<compras_comprob_ingresos_brutoAttributes, compras_comprob_ingresos_brutoPk>;

export class compras_comprob_ingresos_bruto extends Model<compras_comprob_ingresos_brutoAttributes, compras_comprob_ingresos_brutoCreationAttributes> implements compras_comprob_ingresos_brutoAttributes {
  id!: number;
  id_comprobante!: number;
  numero!: number;
  id_impuestoTercero!: number;
  declaracion_jurada_periodo?: string;
  declaracion_jurada_presentacion?: string;
  cod_empresa?: number;
  tipo_juridico_fisico?: number;
  fecha_ret?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_comprob_ingresos_bruto {
    compras_comprob_ingresos_bruto.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    numero: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    id_impuestoTercero: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false
    },
    declaracion_jurada_periodo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declaracion_jurada_presentacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_juridico_fisico: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_ret: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_comprob_ingresos_bruto',
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
        name: "compras_comprob_ingresos_bruto_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "compras_comprob_ingresos_bruto_ak1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
          { name: "cod_empresa" },
          { name: "tipo_juridico_fisico" },
        ]
      },
      {
        name: "compras_comprob_ingresos_bruto_ak2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
          { name: "cod_empresa" },
          { name: "tipo_juridico_fisico" },
        ]
      },
    ]
  });
  return compras_comprob_ingresos_bruto;
  }
}
