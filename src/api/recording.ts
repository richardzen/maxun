import { AxiosResponse } from "axios";

const axios = require('axios').default;


export const startRecording = async() : Promise<string> => {
  try {
    const response = await axios.get('http://localhost:8080/record/start')
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Couldn\'t start recording');
    }
  } catch(error: any) {
    return '';
  }
};

export const stopRecording = async (id: string): Promise<void> => {
    await axios.get(`http://localhost:8080/record/stop/${id}`)
        .then((response : AxiosResponse<boolean>)  => {
        })
        .catch((error: any) => {
        });
};

export const getActiveBrowserId = async(): Promise<string> => {
    try {
        const response = await axios.get('http://localhost:8080/record/active');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Couldn\'t get active browser');
        }
    } catch(error: any) {
        return '';
    }
};

export const interpretCurrentRecording = async(): Promise<boolean> => {
    try {
        const response = await axios.get('http://localhost:8080/record/interpret');
        if (response.status === 200) {
            return true;
        } else {
            throw new Error('Couldn\'t interpret current recording');
        }
    } catch(error: any) {
        console.log(error);
        return false;
    }
};

