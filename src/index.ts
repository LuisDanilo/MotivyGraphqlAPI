import "reflect-metadata"
import { startServer } from "./app";
import { connect } from './config/typeorm'

async function main() {
    await connect()
    console.log("Starting server...")
    const app = await startServer()
    app.listen(5000)
    console.log("Server started on port 5000");
    console.log("Server started on port 5000");
    
}

main()