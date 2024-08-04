import { table } from "console";
import { Tableusers } from "../models/tableUsers";
import { injectable } from 'tsyringe';
import { where } from "sequelize";

@injectable()
export class userRepository{
    async finAll(){
        return await Tableusers.findAll()
    }

    async findById(id:number){
        try {
            return await Tableusers.findByPk(id)
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewUser(user: Partial<Tableusers>){
        try{
            return await Tableusers.create(user)
        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }

     async updateUserById(userupdated:Partial<Tableusers>,id:number){
        try {
            const update= await Tableusers.update(userupdated,{
                where:{
                    id:id
                }
            })
            return update
            
        } catch (error) {
            console.log(error)
        }

    }

    async deleteUserById(id:number){
        try {
            await Tableusers.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            
        }
    }

}



