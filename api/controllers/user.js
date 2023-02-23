import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM user_tb";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res)=>{
    const q = "INSERT INTO user_tb(`NOME`, `EMAIL`, `TELEFONE`, `DATA_NASCIMENTO`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    ];

    db.query(q, [values], (err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!")
    })
}

export const updateUser = (req, res) =>{
    const q = "UPDATE user_tb SET `NOME`= ?, `EMAIL` = ?, `TELEFONE` = ?, `DATA_NASCIMENTO` = ? WHERE `ID` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    ];

    db.query(q, [...values, req.params.id], (err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!")
    })

}

export const deleteUser = (req, res)=>{
    const q = "DELETE FROM user_tb WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}