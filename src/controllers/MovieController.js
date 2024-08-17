import axios from "axios";


const Basic_URL ="https://api.themoviedb.org/3/discover";
const Basics_URL ="https://api.themoviedb.org/3";
const Key ="31b9c640f4511af28076291d8f874bfc";
export const FetchMoives = async () => {
    try{
        
    const res = await axios.get(`${Basic_URL}/movie?sort_by=popularity.desc&api_key=${Key}`);
    return res.data.results;
    }catch(error){
        console.log(error);
        
    }
};
//https://api.themoviedb.org/3/discover/serie?sort_by=popularity.desc&api_key=31b9c640f4511af28076291d8f874bfc
//https://api.themoviedb.org/3/discover/tv/top_rated?api_key=31b9c640f4511af28076291d8f874bfc
export const FetchTvShows = async () => {
    try{
        
    const res = await axios.get(`${Basic_URL}/tv?sort_by=popularity.desc&api_key=${Key}`);
    return res.data.results;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchSerise = async () => {
    try{
        
    const res = await axios.get(`${Basics_URL}/tv/top_rated?api_key=${Key}`);
    return res.data.results;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchActors = async () => {
    try{
        
    const res = await axios.get(`${Basic_URL}/person?sort_by=popularity.desc&api_key=${Key}`);
    return res.data.results;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchMovieDetails = async (id) => {
    try{
  //https://api.themoviedb.org/3/movie/1022789?api_key=31b9c640f4511af28076291d8f874bfc      
    const res = await axios.get(`${Basics_URL}/movie/${id}?api_key=${Key}`);
    console.log(`from controller fetch${res.data}`);
    
    return res.data;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchSerieDetails = async (id) => {
    try{     
    const res = await axios.get(`${Basics_URL}/tv/${id}?api_key=${Key}`);
    console.log(`from controller fetch${res.data}`);
    
    return res.data;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchActorDetails = async (id) => {
    try{     
        //https://api.themoviedb.org/3/person/64?api_key=31b9c640f4511af28076291d8f874bfc
    const res = await axios.get(`${Basics_URL}/person/${id}?api_key=${Key}`);
    console.log(`from controller fetch${res.data.id}`);
    
    return res.data;
    }catch(error){
        console.log(error);
        
    }
};

export const FetchTvShowDetails = async (id) => {
    try{     
        //tv?sort_by=popularity.desc&api_key
        ///tv?sort_by=popularity.desc&api_key
        //https://api.themoviedb.org/3/discover/tv/top_rated?api_key=31b9c640f4511af28076291d8f874bfc 
        //https://api.themoviedb.org/3/tv/1396?api_key=31b9c640f4511af28076291d8f874bfc
    const res = await axios.get(`${Basics_URL}/tv/${id}?api_key=${Key}`);
    console.log(`from controller fetch${res.data}`);
    
    return res.data;
    }catch(error){
        console.log(error);
        
    }
};