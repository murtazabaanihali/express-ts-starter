import 'module-alias/register';
import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';
import routes from "@/routes";

const app: Application = express();

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
