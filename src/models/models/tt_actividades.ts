import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tt_actividadesAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;
}

export type tt_actividadesPk = "id";
export type tt_actividadesId = tt_actividades[tt_actividadesPk];
export type tt_actividadesCreationAttributes = Optional<tt_actividadesAttributes, tt_actividadesPk>;

export class tt_actividades extends Model<tt_actividadesAttributes, tt_actividadesCreationAttributes> implements tt_actividadesAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  idproc?: number;
  marca?: number;
  fecha_alta?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tt_actividades {
    tt_actividades.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idproc: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    marca: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_actividades',
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
        name: "tt_actividadesxkey1",
        using: "BTREE",
        fields: [
          { name: "idproc" },
          { name: "codigo" },
          { name: "marca" },
        ]
      },
      {
        name: "tt_actividades_idx_fecha",
        using: "BTREE",
        fields: [
          { name: "fecha_alta" },
        ]
      },
    ]
  });
  return tt_actividades;
  }
}
