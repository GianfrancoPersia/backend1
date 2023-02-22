// Dotenv set
import dotenv from 'dotenv';
dotenv.config();
// Minimist "port" var set
import parseArgs from 'minimist';
const options = {default : {port : 8080}}
const args = parseArgs(process.argv.slice(2), options)
// ---------------------------------------------------------
const EXP_TIME = 200000 ;
const PORT = args.port;
const DATABASE_URL = process.env.DATABASE_URL
const MONGO = {
    connection: DATABASE_URL,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET
