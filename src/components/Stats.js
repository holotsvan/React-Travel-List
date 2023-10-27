export default function Stats({items}){
    if(!items.length) return <em className="stats">Start adding some items to your packing list 🚀</em>
  
    let itemsLenght = items.length;
    let packedItems = [...items].filter((item)=>item.packed).length;
    let percentageOfPacked = (packedItems/itemsLenght*100).toFixed(1);
    return <footer className="stats">
     <em> You have {itemsLenght} items on your list, and you already packed {packedItems} ({percentageOfPacked}%)</em>
    </footer>  
  }