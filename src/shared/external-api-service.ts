
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ExternalAPIService {

    constructor() { }

    public async getOutBoundAPICall(url: string, config: any): Promise<AxiosResponse> {
        try {
            const response = await axios.get(url, config)
            if (!response) {
                console.log('No response received for GET Api Call');
            }
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}