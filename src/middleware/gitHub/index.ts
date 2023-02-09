import { Request, Response, NextFunction } from 'express';
import GitHubService from '../../services/gitHub';

const userDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userName = req.requestData.userName;
        res.responseData.userDetails = await GitHubService.getUserDetails(userName);
        return next();
    } catch (error) {
        return next(error)
    }
}

const userRepos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userName = req.requestData.userName;
        res.responseData.userRepos = await GitHubService.getUserRepos(userName);
        return next();
    } catch (error) {
        return next(error)
    }
}

const userGists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userName = req.requestData.userName;
        res.responseData.userGists = await GitHubService.getGists(userName);
        return next();
    } catch (error) {
        return next(error)
    }
}

const userOrgs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userName = req.requestData.userName;
        res.responseData.userOrgs = await GitHubService.getOrganisation(userName);
        return next();
    } catch (error) {
        return next(error)
    }
}

export const gitHub = {
    userDetails,
    userRepos,
    userGists,
    userOrgs
}