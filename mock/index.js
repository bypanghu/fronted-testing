import path from 'path';

const list =  [
    {
        url :'/mock/list',
        method : 'get',
        response:()=>{
            let imgUrl = 'https://cdn.jsdelivr.net/gh/bypanghu/fronted-testing@main/src/assets/imgs/img-1.jpg'
            const data = [
                { img: imgUrl , title : 'test1' },
                { img: imgUrl , title : 'test2' },
                { img: imgUrl , title : 'test3' },
                { img: imgUrl , title : 'test4' },
                { img: imgUrl , title : 'test5' },
            ]
            const smallData = [
                { img: imgUrl , title : 'test1' },
                { img: imgUrl , title : 'test2' },
                { img: imgUrl , title : 'test3' },
                { img: imgUrl , title : 'test4' },
            ]

            let list = {
                list : data,
                smallList : smallData
            }

            return {
                code : 200,
                data : list
            }
        }
    }
];



import {  createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

export const setupMockSever = () =>{
    createProdMockServer(list)
}
