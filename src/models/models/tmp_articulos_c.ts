import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmp_articulos_cAttributes {
  cod_articulo: number;
  descripcion?: string;
  c1_nombre?: string;
  c2_nombre?: string;
  c3_nombre?: string;
  c4_nombre?: string;
  c5_nombre?: string;
  c1_id_caracteristica?: number;
  c2_id_caracteristica?: number;
  c3_id_caracteristica?: number;
  c4_id_caracteristica?: number;
  c5_id_caracteristica?: number;
  c1_valor?: string;
  c2_valor?: string;
  c3_valor?: string;
  c4_valor?: string;
  c5_valor?: string;
  c1_grupo?: string;
  c2_grupo?: string;
  c3_grupo?: string;
  c4_grupo?: string;
  c5_grupo?: string;
  c1_id_valor_caracteristica?: number;
  c2_id_valor_caracteristica?: number;
  c3_id_valor_caracteristica?: number;
  c4_id_valor_caracteristica?: number;
  c5_id_valor_caracteristica?: number;
}

export type tmp_articulos_cPk = "cod_articulo";
export type tmp_articulos_cId = tmp_articulos_c[tmp_articulos_cPk];
export type tmp_articulos_cCreationAttributes = Optional<tmp_articulos_cAttributes, tmp_articulos_cPk>;

export class tmp_articulos_c extends Model<tmp_articulos_cAttributes, tmp_articulos_cCreationAttributes> implements tmp_articulos_cAttributes {
  cod_articulo!: number;
  descripcion?: string;
  c1_nombre?: string;
  c2_nombre?: string;
  c3_nombre?: string;
  c4_nombre?: string;
  c5_nombre?: string;
  c1_id_caracteristica?: number;
  c2_id_caracteristica?: number;
  c3_id_caracteristica?: number;
  c4_id_caracteristica?: number;
  c5_id_caracteristica?: number;
  c1_valor?: string;
  c2_valor?: string;
  c3_valor?: string;
  c4_valor?: string;
  c5_valor?: string;
  c1_grupo?: string;
  c2_grupo?: string;
  c3_grupo?: string;
  c4_grupo?: string;
  c5_grupo?: string;
  c1_id_valor_caracteristica?: number;
  c2_id_valor_caracteristica?: number;
  c3_id_valor_caracteristica?: number;
  c4_id_valor_caracteristica?: number;
  c5_id_valor_caracteristica?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmp_articulos_c {
    tmp_articulos_c.init({
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c1_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c2_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c3_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c4_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c5_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c1_id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c2_id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c3_id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c4_id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c5_id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c1_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c2_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c3_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c4_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c5_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c1_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c2_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c3_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c4_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c5_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    c1_id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c2_id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c3_id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c4_id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    c5_id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_articulos_c',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_articulo" },
        ]
      },
    ]
  });
  return tmp_articulos_c;
  }
}
