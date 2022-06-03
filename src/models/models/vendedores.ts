import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface vendedoresAttributes {
  id: number;
  cod_vendedor?: number;
  nombre?: string;
  usuario?: string;
  porcentaje?: number;
  contrato?: string;
  sueldo?: number;
  zona?: string;
  fecha_ingreso?: string;
  viatico?: number;
  cuil?: number;
  inactivo?: string;
}

export type vendedoresPk = "id";
export type vendedoresId = vendedores[vendedoresPk];
export type vendedoresCreationAttributes = Optional<vendedoresAttributes, vendedoresPk>;

export class vendedores extends Model<vendedoresAttributes, vendedoresCreationAttributes> implements vendedoresAttributes {
  id!: number;
  cod_vendedor?: number;
  nombre?: string;
  usuario?: string;
  porcentaje?: number;
  contrato?: string;
  sueldo?: number;
  zona?: string;
  fecha_ingreso?: string;
  viatico?: number;
  cuil?: number;
  inactivo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof vendedores {
    vendedores.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    contrato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sueldo: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    zona: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    viatico: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    cuil: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    },
    inactivo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'vendedores',
    hasTrigger: true,
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
        name: "vendedores_xkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_vendedor" },
        ]
      },
    ]
  });
  return vendedores;
  }
}
