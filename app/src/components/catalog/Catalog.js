import { useState, useEffect } from 'react';
import CatalogItem from '../catalogItem/CatalogItem';

import './catalog.scss';

import DB from '../../service/DB.json';

const Catalog = ({onAdd}) => {
    const {data} = DB;
    const [catalog, setCatalog] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        setCatalog(data)
    }, [])

    useEffect(() => {
        setCatalog(data.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1))
    }, [filter])

    const catalogRender = catalog.map(item => {
        return (
            <>
                <CatalogItem id={item.id} title={item.title} subtitle={item.subtitle} price={item.price} src={item.src1} key={item.id} onAdd={onAdd}/>
            </>
        )
    })

    return (
        <div className="catalog">
            <div className="catalog-search">
                <p>Поиск по каталогу</p>
                <div className="catalog-search-inputfield">
                    <input type="text" placeholder={"Куртки, кроссовки, футболки, ..."} onChange={(e) => setFilter(e.target.value)}/>
                </div>
            </div>
                <div className="catalog__list">
                    {catalogRender}
                </div> 
            </div>
    )
}

export default Catalog;