import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface insumos_ordenes_trabajoAttributes {
  descrip?: string;
  cantidad?: number;
  observar?: string;
  dosis?: number;
  id: number;
  nro_orden?: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;
}

export type insumos_ordenes_trabajoPk = "id";
export type insumos_ordenes_trabajoId = insumos_ordenes_trabajo[insumos_ordenes_trabajoPk];
export type insumos_ordenes_trabajoCreationAttributes = Optional<insumos_ordenes_trabajoAttributes, insumos_ordenes_trabajoPk>;

export class insumos_ordenes_trabajo extends Model<insumos_ordenes_trabajoAttributes, insumos_ordenes_trabajoCreationAttributes> implements insumos_ordenes_trabajoAttributes {
  descrip?: string;
  cantidad?: number;
  observar?: string;
  dosis?: number;
  id!: number;
  nro_orden?: number;
  fecha_carga?: string;
  hora_carga?: string;
  id_pc?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof insumos_ordenes_trabajo {
    insumos_ordenes_trabajo.init({
    descrip: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    observar: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    dosis: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nro_orden: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_carga: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_pc: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insumos_ordenes_trabajo',
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
  return insumos_ordenes_trabajo;
  }
}
