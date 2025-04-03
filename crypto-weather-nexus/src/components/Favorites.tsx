// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store"; // <-- Import RootState
// import { removeFavorite } from "@/redux/favoritesSlice";

// const Favorites = () => {
//   const favorites = useSelector((state: RootState) => state.favorites.items); // ✅ Add type
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Favorites</h2>
//       {favorites.map((fav, index) => (
//         <div key={index}>
//           {/* <p>{fav.name}</p> */}
//           <button onClick={() => dispatch(removeFavorite(fav))}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;
