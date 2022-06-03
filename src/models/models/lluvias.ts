import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface lluviasAttributes {
  d1?: number;
  d2?: number;
  d3?: number;
  d4?: number;
  d5?: number;
  d6?: number;
  d7?: number;
  d8?: number;
  d9?: number;
  d10?: number;
  d11?: number;
  d12?: number;
  d13?: number;
  d14?: number;
  d15?: number;
  d16?: number;
  d17?: number;
  d18?: number;
  d19?: number;
  d20?: number;
  d21?: number;
  d22?: number;
  d23?: number;
  d24?: number;
  d25?: number;
  d26?: number;
  d27?: number;
  d28?: number;
  d29?: number;
  d30?: number;
  d31?: number;
  total?: number;
  total_anual?: number;
  numero?: number;
  id: number;
  mes?: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type lluviasPk = "id";
export type lluviasId = lluvias[lluviasPk];
export type lluviasCreationAttributes = Optional<lluviasAttributes, lluviasPk>;

export class lluvias extends Model<lluviasAttributes, lluviasCreationAttributes> implements lluviasAttributes {
  d1?: number;
  d2?: number;
  d3?: number;
  d4?: number;
  d5?: number;
  d6?: number;
  d7?: number;
  d8?: number;
  d9?: number;
  d10?: number;
  d11?: number;
  d12?: number;
  d13?: number;
  d14?: number;
  d15?: number;
  d16?: number;
  d17?: number;
  d18?: number;
  d19?: number;
  d20?: number;
  d21?: number;
  d22?: number;
  d23?: number;
  d24?: number;
  d25?: number;
  d26?: number;
  d27?: number;
  d28?: number;
  d29?: number;
  d30?: number;
  d31?: number;
  total?: number;
  total_anual?: number;
  numero?: number;
  id!: number;
  mes?: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof lluvias {
    lluvias.init({
    d1: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d2: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d3: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d4: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d5: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d6: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d7: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d8: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d9: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d10: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d11: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d12: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d13: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d14: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d15: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d16: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d17: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d18: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d19: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d20: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d21: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d22: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d23: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d24: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d25: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d26: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d27: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d28: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d29: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d30: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    d31: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: true
    },
    total_anual: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lluvias',
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
  return lluvias;
  }
}
