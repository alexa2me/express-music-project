import { config } from "dotenv";
import App from "./app";
import userHandle from "./routes/userRouter";
import songHandle from "./routes/songRouter";
import genreHandle from "./routes/genreRouter";

config();

const expressApp: App = new App([userHandle, songHandle, genreHandle]);

expressApp.init().listen();
