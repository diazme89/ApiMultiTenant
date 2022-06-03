import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_nov_animalesAttributes {
  id: number;
  id_reg?: number;
  id_novedades?: number;
  cod_animal?: number;
  fecha_nac?: string;
  color?: number;
  caravana?: string;
  estado?: number;
  cod_categoria?: number;
  pesoactual?: number;
  id_madre?: number;
  id_padre?: number;
  descrip_animal?: string;
  raza?: number;
  sexo?: string;
  origen?: number;
  cod_grupo?: number;
  estado_rep?: number;
  flag?: number;
  error?: number;
  descrip_error?: string;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;
  id_mov_posterior?: number;
  id_mov_anterior?: number;
  fecha_mov_posterior?: string;
  fecha_mov_anterior?: string;
  tipo_mov_posterior?: string;
  tipo_mov_anterior?: string;
}

export type tt_nov_animalesPk = "id";
export type tt_nov_animalesId = tt_nov_animales[tt_nov_animalesPk];
export type tt_nov_animalesCreationAttributes = Optional<tt_nov_animalesAttributes, tt_nov_animalesPk>;

export class tt_nov_animales extends Model<tt_nov_animalesAttributes, tt_nov_animalesCreationAttributes> implements tt_nov_animalesAttributes {
  id!: number;
  id_reg?: number;
  id_novedades?: number;
  cod_animal?: number;
  fecha_nac?: string;
  color?: number;
  caravana?: string;
  estado?: number;
  cod_categoria?: number;
  pesoactual?: number;
  id_madre?: number;
  id_padre?: number;
  descrip_animal?: string;
  raza?: number;
  sexo?: string;
  origen?: number;
  cod_grupo?: number;
  estado_rep?: number;
  flag?: number;
  error?: number;
  descrip_error?: string;
  idproc?: number;
  fecha_alta?: Date;
  marca?: number;
  id_mov_posterior?: number;
  id_mov_anterior?: number;
  fecha_mov_posterior?: string;
  fecha_mov_anterior?: string;
  tipo_mov_posterior?: string;
  tipo_mov_anterior?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_nov_animales {
    tt_nov_animales.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_reg: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_novedades: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_animal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    color: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    caravana: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    pesoactual: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    id_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_padre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descrip_animal: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    raza: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    origen: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    estado_rep: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    flag: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    error: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    descrip_error: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    marca: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_mov_posterior: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_mov_anterior: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_mov_posterior: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_mov_anterior: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_mov_posterior: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tipo_mov_anterior: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_nov_animales',
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
        name: "tt_nov_animalesxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "flag" },
        ]
      },
      {
        name: "tt_nov_animalesxkey2",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "id_reg" },
          { name: "flag" },
        ]
      },
      {
        name: "tt_nov_animalesxkey3",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "cod_animal" },
        ]
      },
    ]
  });
  return tt_nov_animales;
  }
}
