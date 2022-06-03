import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipo_servicio_ganaderiaAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type tipo_servicio_ganaderiaPk = "id";
export type tipo_servicio_ganaderiaId = tipo_servicio_ganaderia[tipo_servicio_ganaderiaPk];
export type tipo_servicio_ganaderiaCreationAttributes = Optional<tipo_servicio_ganaderiaAttributes, tipo_servicio_ganaderiaPk>;

export class tipo_servicio_ganaderia extends Model<tipo_servicio_ganaderiaAttributes, tipo_servicio_ganaderiaCreationAttributes> implements tipo_servicio_ganaderiaAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_servicio_ganaderia {
    tipo_servicio_ganaderia.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_servicio_ganaderia',
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
  return tipo_servicio_ganaderia;
  }
}
