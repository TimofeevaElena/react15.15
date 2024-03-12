import './Katalog.css'
import Card from '../Card/Card'
import {katalog} from '../../data'
import {useState} from 'react'


export default function Katalog({addToBag, bag}){

    const[query,setQuery] = useState("")
    const[sorting, setSorting] = useState("")
    const[category, setCategory] = useState(0)


    // ПОИСК
    
    function search(e){
        setQuery(e.target.value)
        console.log(query)
    }

    const filterTovar = katalog.filter(
        (item)=>item.name.toLowerCase().includes(query.toLowerCase())
        // console.log(filterTovar)
        &&
        (item.category == category||category == 0))


    // СОРТИРОВКА

    function sort(e){
        const sortValue = e.target.value
        setSorting(sortValue)
    }

    const sortTovar = (sorting, katalog) => {
        switch (sorting) {
            case 'price-asc':
               return [...katalog].sort((a,b) =>a.price - b.price)
            case 'price-desc':
                return [...katalog].sort((a,b) =>b.price - a.price)
            case 'ost-asc':
               return [...katalog].sort((a,b) =>a.ost - b.ost)
            case 'ost-desc':
                return [...katalog].sort((a,b) =>b.ost - a.ost)
            default:
                   return katalog
        }
    }

    const sortAndFilterTovar = sortTovar(sorting, filterTovar)

    return(
        <div className="katalog">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <div className="filters">
                    <div className="filters-content">
                        <button onClick={()=>setCategory(0)} className="filter">Все</button>
                        <button onClick={()=>setCategory(1)} className="filter">Топ</button>
                        <button onClick={()=>setCategory(2)} className="filter">Низ</button>
                        <button onClick={()=>setCategory(3)} className="filter">Обувь</button>
                    </div>                  
                </div>
                <div className="filters-content">
                    <div className="poisk">
                        <input onChange={search} type="search" className='search' name="search" placeholder="Поиск"/>
                    </div>
                    <select onChange={sort}>
                        <option value="price-asc">Сортировать...</option>
                        <option value="price-asc">По возростанию цены</option>
                        <option value="price-desc">По убыванию цены</option>
                        <option value="ost-asc">По остатку в порядке возростания</option>
                        <option value="ost-desc">По остатку в порядке убывания</option>
                    </select>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        {
                            sortAndFilterTovar.length ?
                            sortAndFilterTovar.map((card,index)=>{
                                return(
                                    <Card  key={index} {...card}
                                     addTovar={
                                         ()=> addToBag([...bag,card.id])} />
                                )
                            })
                            :
                            <h2>По вашему запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}