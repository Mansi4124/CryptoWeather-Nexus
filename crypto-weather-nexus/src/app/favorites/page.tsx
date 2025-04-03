// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import { removeFavorite } from "@/redux/favoritesSlice";

// const Favorites = () => {
//   const favorites = useSelector((state: RootState) => state.favorites.items);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Your Favorites</h2>
//       <ul>
//         {favorites.map((fav, index) => (
//           <li key={index} className="flex justify-between p-2 border">
//             {/* {fav.name} ({fav.type}) */}
//             <button onClick={() => dispatch(removeFavorite(fav))} className="text-red-500">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Favorites;
