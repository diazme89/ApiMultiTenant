import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transformacionAttributes {
  id: number;
  nro_operacion?: number;
  descripcion?: string;
  fecha?: string;
  cantidad_aplica?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  cod_deposito_origen?: number;
  cod_deposito_destino?: number;
  cod_empresa?: number;
}

export type transformacionPk = "id";
export type transformacionId = transformacion[transformacionPk];
export type transformacionCreationAttributes = Optional<transformacionAttributes, transformacionPk>;

export class transformacion extends Model<transformacionAttributes, transformacionCreationAttributes> implements transformacionAttributes {
  id!: number;
  nro_operacion?: number;
  descripcion?: string;
  fecha?: string;
  cantidad_aplica?: number;
  usuario?: string;
  usuario_fecha?: string;
  usuario_hora?: string;
  cod_deposito_origen?: number;
  cod_deposito_destino?: number;
  cod_empresa?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof transformacion {
    transformacion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nro_operacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cantidad_aplica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    usuario_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    cod_deposito_origen: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_deposito_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transformacion',
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
  return transformacion;
  }
}
