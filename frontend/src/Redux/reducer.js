import React from 'react'

let intialState={
    isLoading:false,
    isAuth:false,
    isError:false,
    data:[]
}

export const reducer = (state=intialState,{type,payload}) => {
  switch(type){
    default:return state;
  }
}
