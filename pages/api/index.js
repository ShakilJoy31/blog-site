import { deleteUser, getUser, postUsers, updateUserWithFeedBack } from "../../Components/database/controller";
import connectMongo from './../../Components/database/connection';

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: 'Error in the connection' }));
    // Type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getUser(req, res);
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            updateUserWithFeedBack(req, res)
            break;
        case 'DELETE':
            deleteUser(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`MEthod ${method} is not allowed`)
            break;
    }
}