import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_comercializacionAttributes {
  id: number;
  numero?: number;
  cod_actividad?: number;
  tipo_operacion?: string;
  estado?: string;
  cantidad?: number;
  precio_operacion?: number;
  prima_operacion?: number;
  importe_total_precio?: number;
  importe_total_prima?: number;
  fecha_compromiso?: string;
  cod_periodo?: number;
}

export type pla_comercializacionPk = "id";
export type pla_comercializacionId = pla_comercializacion[pla_comercializacionPk];
export type pla_comercializacionCreationAttributes = Optional<pla_comercializacionAttributes, pla_comercializacionPk>;

export class pla_comercializacion extends Model<pla_comercializacionAttributes, pla_comercializacionCreationAttributes> implements pla_comercializacionAttributes {
  id!: number;
  numero?: number;
  cod_actividad?: number;
  tipo_operacion?: string;
  estado?: string;
  cantidad?: number;
  precio_operacion?: number;
  prima_operacion?: number;
  importe_total_precio?: number;
  importe_total_prima?: number;
  fecha_compromiso?: string;
  cod_periodo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_comercializacion {
    pla_comercializacion.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    tipo_operacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    precio_operacion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    prima_operacion: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    importe_total_precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    importe_total_prima: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true,
      defaultValue: 0.00000
    },
    fecha_compromiso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_comercializacion',
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
  return pla_comercializacion;
  }
}
