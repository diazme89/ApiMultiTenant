import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tarjetasAttributes {
  id: number;
  codigo: number;
  descripcion: string;
  tipo: number;
  cod_cuenta: number;
  cod_proveedor: number;
  habilitada: number;
  cod_externo?: string;
}

export type tarjetasPk = "id";
export type tarjetasId = tarjetas[tarjetasPk];
export type tarjetasCreationAttributes = Optional<tarjetasAttributes, tarjetasPk>;

export class tarjetas extends Model<tarjetasAttributes, tarjetasCreationAttributes> implements tarjetasAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;
  tipo!: number;
  cod_cuenta!: number;
  cod_proveedor!: number;
  habilitada!: number;
  cod_externo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tarjetas {
    tarjetas.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "tarjetas_idx1"
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    habilitada: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    cod_externo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarjetas',
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
        name: "tarjetas_idx1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return tarjetas;
  }
}
