import { create } from "apisauce"


const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey='?country=us&apiKey=b323928085fa43d290656fb070b4f5e5'
const getTopHeadline=api.get('top-headlines'+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=b323928085fa43d290656fb070b4f5e5")
export default{
    getTopHeadline,
    getByCategory
}
///top-headlines?country=us&apiKey=b323928085fa43d290656fb070b4f5e5