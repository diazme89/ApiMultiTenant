import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface articulos_tagsAttributes {
  id: number;
  cod_articulo?: number;
  id_valor_caracteristica?: number;
}

export type articulos_tagsPk = "id";
export type articulos_tagsId = articulos_tags[articulos_tagsPk];
export type articulos_tagsCreationAttributes = Optional<articulos_tagsAttributes, articulos_tagsPk>;

export class articulos_tags extends Model<articulos_tagsAttributes, articulos_tagsCreationAttributes> implements articulos_tagsAttributes {
  id!: number;
  cod_articulo?: number;
  id_valor_caracteristica?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof articulos_tags {
    articulos_tags.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_valor_caracteristica: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_tags',
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
        name: "id_valor_caracteristica",
        using: "BTREE",
        fields: [
          { name: "id_valor_caracteristica" },
        ]
      },
    ]
  });
  return articulos_tags;
  }
}
