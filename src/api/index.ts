import express from 'express';
import { formattedResponse } from '../middleware/formattedResponse';
import { pingRoutes } from './ping';
import { userRouter } from './user';
import { reposRouter } from './repos';
import { gistsRouter } from './gists';
import { orgsRouter } from './orgs';
import { gitHub } from '../middleware/gitHub';


const router = express.Router({ mergeParams: true });
router.use('/ping', pingRoutes, formattedResponse);
router.use('/users', userRouter, gitHub.userDetails, formattedResponse);
router.use('/repos', reposRouter, gitHub.userRepos, formattedResponse);
router.use('/gists', gistsRouter, gitHub.userGists, formattedResponse);
router.use('/orgs', orgsRouter, gitHub.userOrgs, formattedResponse);


export const routes = router;
