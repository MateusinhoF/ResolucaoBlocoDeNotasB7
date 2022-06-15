import { serverHttp } from "./app";
import 'dotenv/config';

serverHttp.listen(process.env.PORT, () => console.log(`server running, port ${process.env.PORT}`));
