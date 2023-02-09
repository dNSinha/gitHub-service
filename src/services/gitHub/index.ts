import Axios from 'axios';
import { User } from '../../types/user';
import { Organization } from '../../types/organization';
import { Gists } from '../../types/gists';
import { Repository } from '../../types/Repository';

const URI = "https://api.github.com/users/";

export default class GitHubService {

    static getUserDetails(userName: string) {
        return new Promise<User>((resolve, reject) => {
            const url = URI + userName;
            Axios.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static getUserRepos(userName: string) {
        return new Promise<Repository[]>((resolve, reject) => {
            const url = URI + userName + '/repos';
            Axios.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static getGists(userName: string) {
        return new Promise<Gists[]>((resolve, reject) => {
            const url = URI + userName + "/gists";
            Axios.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static getOrganisation(userName: string) {
        return new Promise<Organization[]>((resolve, reject) => {
            const url = URI + userName + "/orgs";
            Axios.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
};

