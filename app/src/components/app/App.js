import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';

import NavBar from '../navBar/NavBar';
import Catalog from '../catalog/Catalog';
import Item from '../item/Item';
import Bag from '../bag/Bag';
import SideBag from '../sideBag/SideBag';

import './app.scss';

const App = () => {
  const [bag, setBag] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("bag")) !== null) {
      const savedBag = JSON.parse(localStorage.getItem("bag"));
      setBag(bag => [...bag, ...savedBag])
    } else {
      localStorage.setItem("bag", JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag))
    bag.map(item => console.log(item.id))
  }, [bag])

  const onAdd = (id) => {
    if (bag.filter(item => item.id === Number(id)) > -1) {
      setBag(bag => [...bag, ...[{"id": Number(id), "quantity": 1}]])
    } else {
      setBag(bag.map(item => {
        if (item.id === Number(id)) {
          return {"id": Number(id), "quantity": item.quantity + 1};
        } else {
          return item;
        }
      }))
    }
  }

  const onRemove = (id) => {
    const newArr = []
    bag.forEach(item => {
      if (item.id === id && item.quantity > 1) {
        newArr.push({"id": id, "quantity": item.quantity - 1});
      } else if (item.id !== id) {
        newArr.push(item);
      }
    })

    setBag(newArr)
  }

  return (
    <Router>
      <div className="App">
        <NavBar/> {/* это навбар слева, у которого позишн стики */}
        <Routes>
          <Route exact path="/" element={<Catalog onAdd={onAdd}/>} />
          <Route exact path=":id" element={<Item onAdd={onAdd}/>} />
          <Route exact path="/bag" element={<Bag bag={bag} onAdd={onAdd} onRemove={onRemove}/>} />
        </Routes>
        {/* <Catalog onAdd={onAdd}/> */}
        {/* <Item id="3" onAdd={onAdd}/> */}
        {/* <Bag bag={bag} onAdd={onAdd} onRemove={onRemove}/> */}
        <SideBag bag={bag} />
      </div>
    </Router>
  )
}

export default App;
