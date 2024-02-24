import { useState } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);



  return (<nav className="bg-indigo-200 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="mr-20 border-2">
        <p className="text-white  text-xl p-3">E-COMMERCE</p>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <img src="" alt="" />
        <form className="bg-white p-2 h-[20%] w-full rounded-lg">
          <input type="text" className="w-full" />
        </form>
      </div>
      <div className="ml-20 flex items-center justify-end">
        <ul className="flex space-x-4 justify-end">
          <li>
            <button className="text-white text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
            {showCategories && (
              <ul className="absolute bg-white text-xl w-[20%]">
                <li>
                  <button className="hover:text-blue-400">
                    Categoría 1

                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400">
                    Categoría 2

                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400">
                    Categoría 3

                  </button>

                </li>
              </ul>)}

          </li>
          <li><button className="text-white text-xl">Productos</button></li>
          <li><button className="text-white text-xl">Contacto</button></li>
          <li>

            <CartWidget />
          </li>
        </ul>
      </div>
    </div>

  </nav>);
}

export default Navbar;