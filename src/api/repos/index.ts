import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router({ mergeParams: true });

router.route('/:userName').get((req: Request, res: Response, next: NextFunction) => {
    req.requestData = Object.assign({}, {userName: req.params?.userName});
    res.responseData = Object.assign({}, {});
    next();
});

export const reposRouter = router;
