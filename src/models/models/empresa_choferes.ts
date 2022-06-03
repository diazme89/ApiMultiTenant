import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface empresa_choferesAttributes {
  id: number;
  cod_fletero?: number;
  nombre?: string;
  cuit?: string;
  patente_camion?: string;
  patente_acoplado?: string;
}

export type empresa_choferesPk = "id";
export type empresa_choferesId = empresa_choferes[empresa_choferesPk];
export type empresa_choferesCreationAttributes = Optional<empresa_choferesAttributes, empresa_choferesPk>;

export class empresa_choferes extends Model<empresa_choferesAttributes, empresa_choferesCreationAttributes> implements empresa_choferesAttributes {
  id!: number;
  cod_fletero?: number;
  nombre?: string;
  cuit?: string;
  patente_camion?: string;
  patente_acoplado?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof empresa_choferes {
    empresa_choferes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_fletero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    patente_camion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    patente_acoplado: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empresa_choferes',
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
  return empresa_choferes;
  }
}
