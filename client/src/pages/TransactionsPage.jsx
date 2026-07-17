import { useEffect, useState } from "react";

import { TransactionsTopbar } from "../components/transactions/TransactionsTopbar";
import { SearchTransaction } from "../components/transactions/SearchTransaction";
import { TransactionFilters } from "../components/transactions/TransactionFilters";
import { TransactionTable } from "../components/transactions/TransactionTable";
import { Pagination } from "../components/transactions/Pagination";
import { AddTransactionModal } from "../components/transactions/AddTransactionModal";
import { DeleteTransactionModal } from "../components/transactions/DeleteTransactionModal";
import { getCategories } from "../api/categoryApi";
import { getTransactions, createTransaction } from "../api/transactionApi";


export const TransactionsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);

  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);

  const [transactions, setTransactions] =
  useState([]);

  const [currentPage, setCurrentPage] =
  useState(1);

  const [totalPages, setTotalPages] =
  useState(1);

  const [categories,setCategories]
= useState([]);


  const fetchTransactions = async (page = 1) => {

    try {

        const data =
            await getTransactions(page);

        setTransactions(
            data.transactions
        );

        setTotalPages(
            data.totalPages
        );

    }

    catch (error) {

        console.error(error);

    }

};
 useEffect(() => {

    const loadTransactions = async () => {

        await fetchTransactions(currentPage);

    };

    loadTransactions();

}, [currentPage]);

const handleAddTransaction =
async(data)=>{

    try{

        await createTransaction(data);

        await fetchTransactions(
            currentPage
        );

        setIsModalOpen(false);

    }

    catch(error){

        console.error(error);

    }

};

const fetchCategories = async () => {
    try{

        const data = await getCategories();

        console.log(data);

        setCategories(data);

    }

    catch(error){

        console.error(error);

    }
};

useEffect(()=>{

    fetchCategories();

},[]);
    

  return (

    <div className="min-h-screen bg-[#F7F5EF]">

      {/* Topbar */}

      <TransactionsTopbar
        onAddTransaction={() =>
          setIsModalOpen(true)
        }
      />


      {/* Page Content */}

      <div className="space-y-6 p-8">

        <div className="flex items-center justify-between gap-4">

          <SearchTransaction />

          <TransactionFilters />

        </div>


        <TransactionTable
          transactions={transactions}
          
          openDeleteModal={() =>
            setIsDeleteModalOpen(true)
          }

          openEditModal={() =>
            setIsEditModalOpen(true)
          }
        />


        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

      </div>


      {/* Add Transaction */}

      {isModalOpen && (

        <AddTransactionModal
          mode="add"
          categories={categories}
          onSubmit={handleAddTransaction}
          onClose={() =>
            setIsModalOpen(false)
          }
        />

      )}


      {/* Edit Transaction */}

      {isEditModalOpen && (

        <AddTransactionModal
          mode="edit"
          onClose={() =>
            setIsEditModalOpen(false)
          }
        />

      )}


      {/* Delete Transaction */}

      {isDeleteModalOpen && (

        <DeleteTransactionModal
          onClose={() =>
            setIsDeleteModalOpen(false)
          }
        />

      )}

    </div>
  );
};