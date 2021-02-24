class ServicesController {
    constructor() {}
    index(req, res) {
    res.status(     200).json({ serverResponse: "hola mundo" });
        }
        test(req, res) {
            const data = req.body;
            res.status(200).json(data);
            }
    }
    export default ServicesController;