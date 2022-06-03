import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_volcado_impuestosAttributes {
  id: number;
  campos_txt?: string;
  cuit?: string;
  fecha?: string;
  alicuota?: string;
  alicuota_ret?: string;
  categoria?: string;
  valor_1?: string;
  valor_2?: string;
  valor_3?: string;
  valor_4?: string;
}

export type tt_volcado_impuestosPk = "id";
export type tt_volcado_impuestosId = tt_volcado_impuestos[tt_volcado_impuestosPk];
export type tt_volcado_impuestosCreationAttributes = Optional<tt_volcado_impuestosAttributes, tt_volcado_impuestosPk>;

export class tt_volcado_impuestos extends Model<tt_volcado_impuestosAttributes, tt_volcado_impuestosCreationAttributes> implements tt_volcado_impuestosAttributes {
  id!: number;
  campos_txt?: string;
  cuit?: string;
  fecha?: string;
  alicuota?: string;
  alicuota_ret?: string;
  categoria?: string;
  valor_1?: string;
  valor_2?: string;
  valor_3?: string;
  valor_4?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_volcado_impuestos {
    tt_volcado_impuestos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    campos_txt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    alicuota: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    alicuota_ret: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    categoria: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    valor_1: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    valor_2: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    valor_3: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    valor_4: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_volcado_impuestos',
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
  return tt_volcado_impuestos;
  }
}
