import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_animalesAttributes {
  id: number;
  fecha_desde?: string;
  fecha_hasta?: string;
  sexo?: string;
  descripcion?: string;
  cod_color?: number;
  num_caravana?: string;
  fecha_nac?: string;
  grupo?: number;
  cod_animal?: number;
  num_compra?: number;
  num_venta?: number;
  categoria?: number;
  raza?: number;
}

export type filtro_animalesPk = "id";
export type filtro_animalesId = filtro_animales[filtro_animalesPk];
export type filtro_animalesCreationAttributes = Optional<filtro_animalesAttributes, filtro_animalesPk>;

export class filtro_animales extends Model<filtro_animalesAttributes, filtro_animalesCreationAttributes> implements filtro_animalesAttributes {
  id!: number;
  fecha_desde?: string;
  fecha_hasta?: string;
  sexo?: string;
  descripcion?: string;
  cod_color?: number;
  num_caravana?: string;
  fecha_nac?: string;
  grupo?: number;
  cod_animal?: number;
  num_compra?: number;
  num_venta?: number;
  categoria?: number;
  raza?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_animales {
    filtro_animales.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    cod_color: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    num_caravana: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    grupo: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    cod_animal: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    num_compra: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    num_venta: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    categoria: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    raza: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_animales',
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
  return filtro_animales;
  }
}
