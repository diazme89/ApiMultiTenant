import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pla_egresos_actividad_itemsAttributes {
  id: number;
  id_cabecera?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;
}

export type pla_egresos_actividad_itemsPk = "id";
export type pla_egresos_actividad_itemsId = pla_egresos_actividad_items[pla_egresos_actividad_itemsPk];
export type pla_egresos_actividad_itemsCreationAttributes = Optional<pla_egresos_actividad_itemsAttributes, pla_egresos_actividad_itemsPk>;

export class pla_egresos_actividad_items extends Model<pla_egresos_actividad_itemsAttributes, pla_egresos_actividad_itemsCreationAttributes> implements pla_egresos_actividad_itemsAttributes {
  id!: number;
  id_cabecera?: number;
  precio?: number;
  importe?: number;
  mes?: number;
  anio?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pla_egresos_actividad_items {
    pla_egresos_actividad_items.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cabecera: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    anio: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pla_egresos_actividad_items',
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
  return pla_egresos_actividad_items;
  }
}
