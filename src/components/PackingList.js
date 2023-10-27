import { useState } from "react";
import Item from "./Item";
export default function PackingList({items,onDeleteItem,onToggleItem,onClearItems}){
    const[sortBy,setSortBy] = useState("input")
    let sortedItems;
    switch(sortBy){
      case "input":
        sortedItems = items;
        break;
      case "description":
        sortedItems = [...items].sort((a,b)=> a.description===b.description?0:a.description<b.description?-1:1);
        break;
      case "packed" :
        sortedItems = [...items].sort((a,b)=>a.packed===b.packed?0:a.packed>b.packed?-1:1);
        break; 
      default:
        sortedItems = items;
        break;
    }
    return (<div className="list"> 
    <ul>
      {sortedItems.map(item=><Item onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} item={item} key={item.id}></Item>)}
    </ul>
  
    <div className="actions">
      <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={onClearItems}>Clear list</button>
    </div>
    </div>)
    }
  