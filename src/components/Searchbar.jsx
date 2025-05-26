import Dropdown from 'react-bootstrap/Dropdown';
import Search from '../assets/image/search-icon.png'
import { IoMdClose } from "react-icons/io";


function Searchbar() {
  return (
    <Dropdown className='searchbar'>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            <img className='img-fluid' src={Search} alt="search icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
            <div className="searchBox">
                <input type="text" className='form-control' placeholder='What are you looking for?' />
                <button className='search'><img className='img-fluid' src={Search} alt="search icon" /></button>
            </div>
        <Dropdown.Toggle variant='transparent' className='cancel' id="dropdown-basic">
            <IoMdClose/>
      </Dropdown.Toggle>

            
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Searchbar;