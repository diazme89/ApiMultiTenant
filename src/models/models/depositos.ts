import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface depositosAttributes {
  id: number;
  cod_deposito?: number;
  descripcion?: string;
  cod_empresa?: number;
  domicilio_empresa?: string;
  tipo_deposito?: string;
  punto_de_venta?: number;
}

export type depositosPk = "id";
export type depositosId = depositos[depositosPk];
export type depositosCreationAttributes = Optional<depositosAttributes, depositosPk>;

export class depositos extends Model<depositosAttributes, depositosCreationAttributes> implements depositosAttributes {
  id!: number;
  cod_deposito?: number;
  descripcion?: string;
  cod_empresa?: number;
  domicilio_empresa?: string;
  tipo_deposito?: string;
  punto_de_venta?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof depositos {
    depositos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_deposito: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    domicilio_empresa: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tipo_deposito: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    punto_de_venta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'depositos',
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
  return depositos;
  }
}
