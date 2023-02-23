import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM user_tb";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};