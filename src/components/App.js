import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App(){
  const[items,setItems] = useState([]);
  function handleAddItems(item){
    setItems((items)=>[...items,item]);
  }
  function handleDeleteItem(id){
    setItems(items=> items.filter(item=>item.id!==id))
  }
  function handleToggleItem(id){
    setItems(items=>items.map(item=>item.id===id ? {...item,packed : !item.packed} : item));
  }
  function handleClearItems(){
    const confirm = window.confirm("Are you sure you want delete all items?")
    if(!confirm) return;
    setItems([]);
  }

  return <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems ={handleClearItems}/>
    <Stats items={items}/>
  </div>
}








