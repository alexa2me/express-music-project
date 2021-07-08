import { config } from "dotenv";
import App from "./app";
import userHandle from "./routes/userRouter";
import songHandle from "./routes/songRouter";

config();

const expressApp: App = new App([userHandle, songHandle]);

expressApp.init().listen();
