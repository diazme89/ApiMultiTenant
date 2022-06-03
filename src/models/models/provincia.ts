import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface provinciaAttributes {
  id: number;
  codigo: number;
  nombre: string;
  cod_identif?: number;
  cod_jurisdiccion?: number;
  cod_afip_provincia?: number;
}

export type provinciaPk = "id";
export type provinciaId = provincia[provinciaPk];
export type provinciaCreationAttributes = Optional<provinciaAttributes, provinciaPk>;

export class provincia extends Model<provinciaAttributes, provinciaCreationAttributes> implements provinciaAttributes {
  id!: number;
  codigo!: number;
  nombre!: string;
  cod_identif?: number;
  cod_jurisdiccion?: number;
  cod_afip_provincia?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof provincia {
    provincia.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    cod_identif: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_jurisdiccion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_afip_provincia: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'provincia',
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
  return provincia;
  }
}
