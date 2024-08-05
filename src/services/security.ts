import bcrypt from "bcryptjs"
import { injectable, inject } from "tsyringe"
import { userRepository } from "../repositories/userRepository"




@injectable()
export class Security {
    constructor(@inject(userRepository) private userRepository: userRepository) { }


    async encriptPassword(password: string): Promise<string> {
        const azar = await bcrypt.genSalt(10)// me genera numeros al azar para que la contraseña sea indecifrable
        return await bcrypt.hash(password, azar)

    }

    async authorize(email: string, passwordBody: string): Promise<boolean> {
        try {
            // Busca el usuario por email
            const user = await this.userRepository.findByEmail(email);
            // Verifica si el usuario existe
            if (!user) {
                return false;
            }
            // Compara la contraseña proporcionada con el hash almacenado
            const isMatch = await bcrypt.compare(passwordBody, user.password);
            return isMatch;
        } catch (error) {
            console.error('Error during authorization:', error);
            return false;
        }
    }
}



