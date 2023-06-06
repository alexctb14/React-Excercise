import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GroceryListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const listItemStyle = {
    fontWeight: isHovered ? 'bold' : 'normal'
  };

  return (
    <li
      style={listItemStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item}
    </li>
  );
}

function GroceryList() {
  const groceryItems = ["Cucumbers", "Kale", "Tomatoes"];

  return (
    <ul>
      {groceryItems.map((item, index) => (
        <GroceryListItem key={index} item={item} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <GroceryList />
    </>
  );
}

export default App;
