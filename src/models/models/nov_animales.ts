import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface nov_animalesAttributes {
  id: number;
  id_novedades: number;
  pesoactual?: number;
  cod_animal?: number;
  estado?: number;
  cod_categoria?: number;
  id_madre?: number;
  cod_grupo?: number;
  estado_rep?: number;
}

export type nov_animalesPk = "id";
export type nov_animalesId = nov_animales[nov_animalesPk];
export type nov_animalesCreationAttributes = Optional<nov_animalesAttributes, nov_animalesPk>;

export class nov_animales extends Model<nov_animalesAttributes, nov_animalesCreationAttributes> implements nov_animalesAttributes {
  id!: number;
  id_novedades!: number;
  pesoactual?: number;
  cod_animal?: number;
  estado?: number;
  cod_categoria?: number;
  id_madre?: number;
  cod_grupo?: number;
  estado_rep?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof nov_animales {
    nov_animales.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    id_novedades: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    pesoactual: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cod_animal: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    estado_rep: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nov_animales',
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
        name: "nov_animales_xcod_categoria",
        using: "BTREE",
        fields: [
          { name: "cod_categoria" },
        ]
      },
      {
        name: "nov_animales_xid_madre",
        using: "BTREE",
        fields: [
          { name: "id_madre" },
        ]
      },
      {
        name: "nov_animalesxkey1",
        using: "BTREE",
        fields: [
          { name: "id_novedades" },
          { name: "cod_animal" },
        ]
      },
      {
        name: "nov_animalesxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_animal" },
        ]
      },
    ]
  });
  return nov_animales;
  }
}
