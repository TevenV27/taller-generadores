import React from 'react'
import { Lineal } from '../pages/Lineal'
import Estandar from '../pages/Estandar';
import { Factorizated } from '../pages/Factorizado';
import { Javascript } from '../pages/Javascript';
export default function Resultado({ data, typeGenerator, isCheckedFactorized }) {
    const datos = {
        x0: data.x0,
        a: data.a,
        c: data.c,
        m: data.m,
        pk: data.pk,
        canDatos: data.canDatos
    }

    let componentToRender = null;
    console.log(typeGenerator)
    if (typeGenerator === 'lineal') {
        componentToRender = <Lineal data={datos} />;
    } else if (typeGenerator === 'estandar' && !isCheckedFactorized) {
        componentToRender = <Estandar data={datos} />;
    } else if (typeGenerator === 'estandar' && isCheckedFactorized) {
        componentToRender = <Factorizated data={datos} />;
    
    } else if (typeGenerator === 'javascript' ){
        componentToRender = <Javascript data = {datos}/>
    }
        
    return (
        <>
            {componentToRender}
        </>


    )
}
