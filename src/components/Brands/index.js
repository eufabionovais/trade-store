import React, {useState, setState} from "react";

import "./brands.scoped.scss";

const marcas = [
    {id: 1, name: "Ajinomoto", image: '/assets/img/marcas/ajinomoto.png'},
    {id: 2, name: "Ajisal", image: '/assets/img/marcas/ajisal.png'},
    {id: 3, name: "Band-aid", image: '/assets/img/marcas/band-aid.png'},
    {id: 4, name: "Barilla", image: '/assets/img/marcas/barilla.png'},
    {id: 5, name: "Bravo", image: '/assets/img/marcas/bravo.png'},
    {id: 6, name: "Cotonetes", image: '/assets/img/marcas/cotonetes.png'},
    {id: 7, name: "Cup Noodles", image: '/assets/img/marcas/cup-noodles.png'},
    {id: 8, name: "Dadinho", image: '/assets/img/marcas/dadinho.png'},
    {id: 9, name: "Desistin", image: '/assets/img/marcas/desitin.png'},
    {id: 10, name: "Fisher Price", image: '/assets/img/marcas/fisher-price.png'},
    {id: 11, name: "FIT", image: '/assets/img/marcas/fit.png'},
    {id: 12, name: "Haribo", image: '/assets/img/marcas/haribo.png'},
    {id: 13, name: "Hipoglos", image: '/assets/img/marcas/hipoglos.png'},
    {id: 14, name: "Hondashi", image: '/assets/img/marcas/hondashi.png'},
    {id: 15, name: "Johnson & Johnson", image: '/assets/img/marcas/johnson-and-johnson.png'},
    {id: 16, name: "Johnsons", image: '/assets/img/marcas/johnsons.png'},
    {id: 17, name: "Johnsons Baby", image: '/assets/img/marcas/johnsons-baby.png'},
    {id: 18, name: "Kenko", image: '/assets/img/marcas/kenko.png'},
    {id: 19, name: "Kian", image: '/assets/img/marcas/kian.png'},
    {id: 20, name: "Listerine", image: '/assets/img/marcas/listerine.png'},
    {id: 21, name: "Mammy Poko", image: '/assets/img/marcas/mammy-poko.png'},
    {id: 22, name: "Marilan", image: '/assets/img/marcas/marilan.png'},
    {id: 23, name: "MID", image: '/assets/img/marcas/mid.png'},
    {id: 24, name: "Miojo", image: '/assets/img/marcas/miojo.png'},
    {id: 25, name: "Misso", image: '/assets/img/marcas/misso.png'},
    {id: 26, name: "Mito", image: '/assets/img/marcas/mito.png'},
    {id: 27, name: "Neo Strata", image: '/assets/img/marcas/neo-strata.png'},
    {id: 28, name: "Neutrocare", image: '/assets/img/marcas/neutrocare.png'},
    {id: 29, name: "Neutrogema", image: '/assets/img/marcas/neutrogena.png'},
    {id: 30, name: "Nissin", image: '/assets/img/marcas/nissin.png'},




    {id: 31, name: "Johnsons", image: '/assets/img/marcas/johnsons.png'},
    {id: 32, name: "Johnsons Baby", image: '/assets/img/marcas/johnsons-baby.png'},
    {id: 33, name: "Kenko", image: '/assets/img/marcas/kenko.png'},
    {id: 34, name: "Kian", image: '/assets/img/marcas/kian.png'},
    {id: 35, name: "Listerine", image: '/assets/img/marcas/listerine.png'},
    {id: 36, name: "Mammy Poko", image: '/assets/img/marcas/mammy-poko.png'},
    {id: 37, name: "Marilan", image: '/assets/img/marcas/marilan.png'},
    {id: 38, name: "MID", image: '/assets/img/marcas/mid.png'},
    {id: 39, name: "Miojo", image: '/assets/img/marcas/miojo.png'},
    {id: 40, name: "Misso", image: '/assets/img/marcas/misso.png'},
    {id: 41, name: "Mito", image: '/assets/img/marcas/mito.png'},
    {id: 42, name: "Neo Strata", image: '/assets/img/marcas/neo-strata.png'},
    {id: 43, name: "Neutrocare", image: '/assets/img/marcas/neutrocare.png'},
    {id: 44, name: "Neutrogema", image: '/assets/img/marcas/neutrogena.png'},
    {id: 45, name: "Nissin", image: '/assets/img/marcas/nissin.png'}


]

const Brands = () => {

    const [showAll, toggleShowAll] = useState(true);

    return (
        <>
            <div className={`brands-list ${showAll ? 'closed' : ''}`}>
                {
                    marcas.map((marca) => {
                        return <div className="image" key={marca.id}><img src={marca.image} alt={marca.name} /></div>
                    })
                }
                
            </div>
            <div className="toggle-content">
                <p>{showAll ? 'Ver todas as marcas' : 'Exibir menos marcas'}</p>
                <button onClick={() =>toggleShowAll(!showAll)} className={`${!showAll ? 'opened' : ''}`}>Ver todas</button>
            </div>
        </>
    )
}

export default Brands;