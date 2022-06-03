import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_caracteristicas_valoresAttributes {
  id: number;
  codigo?: string;
  descripcion?: string;
  id_caracteristica?: number;
  cod_grupo?: string;
  imp_check?: string;
}

export type articulos_caracteristicas_valoresPk = "id";
export type articulos_caracteristicas_valoresId = articulos_caracteristicas_valores[articulos_caracteristicas_valoresPk];
export type articulos_caracteristicas_valoresCreationAttributes = Optional<articulos_caracteristicas_valoresAttributes, articulos_caracteristicas_valoresPk>;

export class articulos_caracteristicas_valores extends Model<articulos_caracteristicas_valoresAttributes, articulos_caracteristicas_valoresCreationAttributes> implements articulos_caracteristicas_valoresAttributes {
  id!: number;
  codigo?: string;
  descripcion?: string;
  id_caracteristica?: number;
  cod_grupo?: string;
  imp_check?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_caracteristicas_valores {
    articulos_caracteristicas_valores.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    id_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_grupo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    imp_check: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_caracteristicas_valores',
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
        name: "id_caracteristica_xkey1",
        using: "BTREE",
        fields: [
          { name: "id_caracteristica" },
        ]
      },
    ]
  });
  return articulos_caracteristicas_valores;
  }
}
