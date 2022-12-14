import React ,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import ShopLayout from './ShopLayout';
import getAllShopAction from '../../../redux/action/allShopsAction';
const ShowShops = () => {
      const dispatch = useDispatch();
    const AllShops = useSelector( (state)=> state.allShopDataReducer);

    return(
    <>
        <div className='all-shops-canvas'>
            <SearchBar />
            <div>
                 {/* filters */}
            </div>

            <div>
            {AllShops.length !=0? AllShops.map((data,index)=>{
                return(
                    <React.Fragment key={index}>
                       <ShopLayout data={data}/>
                    </React.Fragment>
                )

            }) : (<div><h2> No Shop Found </h2></div>)}
                 
            </div>

        </div>

    </>
    );
}

export default ShowShops;