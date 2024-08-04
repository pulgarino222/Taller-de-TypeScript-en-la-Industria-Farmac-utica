import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'
import { Tableusers } from "./tableUsers"
import { medications } from './tableMedications'


@Table({
    tableName:'patients',
    timestamps:true
})

export class Patients extends Tableusers{
    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      age!:string

      @Column({
        type: DataType.NUMBER,
        allowNull: false,
      })
      frecuency!:number

      @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      endDateMedication!:Date

      @HasMany(()=>medications)
      medications!:medications[]


}