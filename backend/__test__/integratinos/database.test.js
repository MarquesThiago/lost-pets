const request = require('supertest')
const app = require("./../../src/serverTwo")

describe('users', () => {
    it('create users of type fisical person', async () => {
    informationUser = {
        "nome": "Diego Martins de Sousa",
        "num_cpf_cnpj": 23556898789,
        "Status": "A",
        "tipo": "F"
    }
        app.middleware()    
        app.routes()

        const res = await request(app.start).post("/cadastro")
        .send(
            informationUser
        )

        expect(res.status).toBe(200)


    }); //close it
        
    });
