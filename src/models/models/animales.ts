import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface animalesAttributes {
  id: number;
  descripcion?: string;
  fecha_carga?: string;
  fecha_nac?: string;
  tipo_inseminacion?: number;
  fecha_baja?: string;
  raza?: number;
  sexo?: string;
  peso_nac?: number;
  observacion?: string;
  origen?: number;
  cod_grupo?: number;
  cod_animal?: number;
  num_compra?: number;
  num_venta?: number;
  cod_categoria?: number;
  estado?: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  pesoactual?: number;
  cod_color?: number;
  num_caravana?: string;
  idpadre?: number;
  idmadre?: number;
}

export type animalesPk = "id";
export type animalesId = animales[animalesPk];
export type animalesCreationAttributes = Optional<animalesAttributes, animalesPk>;

export class animales extends Model<animalesAttributes, animalesCreationAttributes> implements animalesAttributes {
  id!: number;
  descripcion?: string;
  fecha_carga?: string;
  fecha_nac?: string;
  tipo_inseminacion?: number;
  fecha_baja?: string;
  raza?: number;
  sexo?: string;
  peso_nac?: number;
  observacion?: string;
  origen?: number;
  cod_grupo?: number;
  cod_animal?: number;
  num_compra?: number;
  num_venta?: number;
  cod_categoria?: number;
  estado?: number;
  cod_establecimiento?: number;
  cod_actividad?: number;
  pesoactual?: number;
  cod_color?: number;
  num_caravana?: string;
  idpadre?: number;
  idmadre?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof animales {
    animales.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_inseminacion: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    fecha_baja: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    raza: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    peso_nac: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    observacion: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    origen: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_animal: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true,
      unique: "animalesxkey1"
    },
    num_compra: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    num_venta: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_categoria: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    pesoactual: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cod_color: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    num_caravana: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    idpadre: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    idmadre: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'animales',
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
        name: "animal_num_animal",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_animal" },
        ]
      },
      {
        name: "animalesxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_animal" },
        ]
      },
      {
        name: "animalesxkey2",
        using: "BTREE",
        fields: [
          { name: "cod_color" },
          { name: "num_caravana" },
        ]
      },
    ]
  });
  return animales;
  }
}
