import { Button } from '@mui/material';
// import React, { useState } from 'react';
// import items from '../data/items.jsx';

// export default function Pagination() {

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const handlePrev = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
//       <div className="bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6">
//         <div className="flex flex-col items-center">
//           <ul className="space-y-2 w-full mb-6">
//             {currentItems.map((item, i) => (
//               <li
//                 key={i}
//                 className="text-white text-lg font-medium bg-gray-700 p-2 rounded hover:bg-gray-600 transition-all text-center"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center justify-center space-x-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded font-medium ${
//                 currentPage === 1 
//                   ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               }`}
//             >
//               Previous
//             </button>
//             <span className="text-white font-semibold text-lg">
//               {currentPage} / {totalPages}
//             </span>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded font-medium ${
//                 currentPage === totalPages 
//                   ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination  // ← now this will work fine
} from '@mui/material';

function PaginatedTable({ data }) {
  const itemsPerPage = 2;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      />
    </>
  );
}

export default PaginatedTable;
