import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface categoriaAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
  tipo_progenitor?: string;
}

export type categoriaPk = "id";
export type categoriaId = categoria[categoriaPk];
export type categoriaCreationAttributes = Optional<categoriaAttributes, categoriaPk>;

export class categoria extends Model<categoriaAttributes, categoriaCreationAttributes> implements categoriaAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;
  tipo_progenitor?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof categoria {
    categoria.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true,
      unique: "categoriaxkey1"
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    tipo_progenitor: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categoria',
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
        name: "categoriaxkey1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
  return categoria;
  }
}
