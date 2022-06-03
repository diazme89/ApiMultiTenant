import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tareasAttributes {
  codigo?: number;
  descrip?: string;
  coef_uta?: number;
  valor?: number;
  insumos?: string;
  empresa_servicio?: number;
  tipo?: string;
  id: number;
  uni_medida?: string;
  aplic_cosecha?: string;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  precio?: number;
  cantidad?: number;
  cod_sueldos?: number;
  grupo?: string;
  inf_flete_prod?: number;
  pcio_milimetro?: number;
}

export type tareasPk = "id";
export type tareasId = tareas[tareasPk];
export type tareasCreationAttributes = Optional<tareasAttributes, tareasPk>;

export class tareas extends Model<tareasAttributes, tareasCreationAttributes> implements tareasAttributes {
  codigo?: number;
  descrip?: string;
  coef_uta?: number;
  valor?: number;
  insumos?: string;
  empresa_servicio?: number;
  tipo?: string;
  id!: number;
  uni_medida?: string;
  aplic_cosecha?: string;
  cantidad1?: number;
  cantidad2?: number;
  cantidad3?: number;
  cantidad4?: number;
  cantidad5?: number;
  cantidad6?: number;
  cantidad7?: number;
  cantidad8?: number;
  cantidad9?: number;
  cantidad10?: number;
  cantidad11?: number;
  cantidad12?: number;
  precio?: number;
  cantidad?: number;
  cod_sueldos?: number;
  grupo?: string;
  inf_flete_prod?: number;
  pcio_milimetro?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tareas {
    tareas.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      unique: "tareasxkey1"
    },
    descrip: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    coef_uta: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    insumos: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    empresa_servicio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    uni_medida: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    aplic_cosecha: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cantidad1: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad2: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad3: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad4: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad5: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad6: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad7: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad8: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad9: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad10: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad11: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cantidad12: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    cod_sueldos: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    inf_flete_prod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pcio_milimetro: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tareas',
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
        name: "tareasxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "tareasxkey2",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
      {
        name: "tareasxkey3",
        using: "BTREE",
        fields: [
          { name: "empresa_servicio" },
        ]
      },
    ]
  });
  return tareas;
  }
}
