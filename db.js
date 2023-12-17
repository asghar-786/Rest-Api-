const { error } = require("console");
const {Pool} = require("pg");

const pool=new Pool({
    user:"postgres",
    password:"postgres",
    database:"crud_db",
    host:"localhost",
    port:5432
});

const createuser= async (request,response) => {
    const{username, age, gender}=request.body;
    const query = 'INSERT INTO "user" (username, age, gender) VALUES ($1, $2, $3)';
    const values = [username, age, gender];

    try {
        let result = await pool.query(query, values)
        response.send('data has been inserted ');
    } catch (error) {
        console.log(error);
        
    }
}




const getdata= (req,res)=>{
    pool.query(`SELECT * FROM "user"`,(error,result)=>{
        if(!error){
     res.send (result.rows);
        }
    })
    pool.end;
}
const getdatabyid= (req,res)=>{
    pool.query(`SELECT * FROM "user" where id=${req.params.id}`,(error,result)=>{
        if(!error){
     res.send (result.rows);
        }
    })
    // pool.end;
}

const deletedatabyid= (req,res)=>{
    pool.query(`DELETE FROM "user" where id=${req.params.id}`,(error,result)=>{
        if(!error){
     res.send (`Data deleted succcssfully ${req.params.id}`);
        }
    })
 
}
    
const updatedata = (req, res) => {
    const { username, age, gender } = req.body;
    const userId = req.params.id;

    pool.query('UPDATE "user" SET username=$1, age=$2, gender=$3 WHERE id=$4', [username, age, gender, userId], (error, result) => {
        if (error) return res.status(500).send('Internal Server Error');
        res.send(`Data Updated Successfully for user with ID ${userId}`);
    });
};










module.exports={
    createuser,
    getdata,
    getdatabyid,
    deletedatabyid,
    updatedata

};


