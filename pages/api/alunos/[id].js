export default function handler(req, res){
    const id = req.query.id
    res.status(200).json({
        id,
        nome: 'Jordano',
        email: `teste${id}@email.com`
    })
}