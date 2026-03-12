import {useEffect} from 'react'
import {api} from '../api'
import {useAuth} from './useAuth'


const useAxios = () => {
    const {auth, setAuth} = useAuth();
    
    useEffect (() => {
        // Add a request intercepter


        api.interceptors.request.use(
            (config) => {

            }
        )


        // Add a response intercepter

    }, [])

}