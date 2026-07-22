import { useEffect, useState } from "react";

import { TransactionsTopbar } from "../components/transactions/TransactionsTopbar";
import { SearchTransaction } from "../components/transactions/SearchTransaction";
import { TransactionFilters } from "../components/transactions/TransactionFilters";
import { TransactionTable } from "../components/transactions/TransactionTable";
import { Pagination } from "../components/transactions/Pagination";
import { AddTransactionModal } from "../components/transactions/AddTransactionModal";
import { DeleteTransactionModal } from "../components/transactions/DeleteTransactionModal";
import { ViewReceiptModal } from "../components/transactions/ViewReceiptModal";
import { useOutletContext } from "react-router-dom";

import { getCategories } from "../api/categoryApi";

import {
  getTransactions,
  createTransaction,
  updateTransaction,
} from "../api/transactionApi";

export const TransactionsPage = () => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  ] = useState(false);

  const [
    isEditModalOpen,
    setIsEditModalOpen,
  ] = useState(false);

  const [transactions, setTransactions] =
    useState([]);

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const [categories, setCategories] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedType, setSelectedType] =
    useState("all");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  const [
    selectedPaymentMethod,
    setSelectedPaymentMethod,
  ] = useState("all");

  const [sortBy, setSortBy] =
    useState("newest");

  const [
    selectedTransactionId,
    setSelectedTransactionId,
  ] = useState(null);

  const [selectedReceipt, setSelectedReceipt] =
    useState("");

  const [
    isReceiptModalOpen,
    setIsReceiptModalOpen,
  ] = useState(false);

  const { setIsSidebarOpen } =
useOutletContext();

  const fetchTransactions = async (
    page = 1
  ) => {
    try {
      const data =
        await getTransactions(page);

      setTransactions(data.transactions);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadTransactions = async () => {
      await fetchTransactions(currentPage);
    };

    loadTransactions();
  }, [currentPage]);

  const handleAddTransaction = async (
    data
  ) => {
    try {
      console.log("DATA RECEIVED");
      console.log(data);

      await createTransaction(data);

      console.log("TRANSACTION CREATED");

      await fetchTransactions(currentPage);

      setIsModalOpen(false);
    } catch (error) {
      console.log("ERROR");
      console.error(error);
    }
  };

  const handleUpdateTransaction = async (
    id,
    data
  ) => {
    try {
      await updateTransaction(id, data);

      await fetchTransactions(currentPage);

      setIsEditModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      console.log(data);

      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  let filteredTransactions = [
    ...transactions,
  ];

  // SEARCH

  filteredTransactions =
    filteredTransactions.filter(
      (transaction) => {
        const search =
          searchTerm.toLowerCase();

        return (
          transaction.description
            ?.toLowerCase()
            .includes(search) ||
          transaction.paymentMethod
            ?.toLowerCase()
            .includes(search) ||
          transaction.type
            ?.toLowerCase()
            .includes(search) ||
          transaction.category?.name
            ?.toLowerCase()
            .includes(search)
        );
      }
    );

  // TYPE FILTER

  if (selectedType !== "all") {
    filteredTransactions =
      filteredTransactions.filter(
        (transaction) =>
          transaction.type === selectedType
      );
  }

  // CATEGORY FILTER

  if (selectedCategory !== "all") {
    filteredTransactions =
      filteredTransactions.filter(
        (transaction) =>
          transaction.category?.name ===
          selectedCategory
      );
  }

  // PAYMENT METHOD FILTER

  if (selectedPaymentMethod !== "all") {
    filteredTransactions =
      filteredTransactions.filter(
        (transaction) =>
          transaction.paymentMethod ===
          selectedPaymentMethod
      );
  }

  // SORTING

  if (sortBy === "newest") {
    filteredTransactions.sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );
  }

  if (sortBy === "oldest") {
    filteredTransactions.sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );
  }

  if (sortBy === "highest") {
    filteredTransactions.sort(
      (a, b) => b.amount - a.amount
    );
  }

  if (sortBy === "lowest") {
    filteredTransactions.sort(
      (a, b) => a.amount - b.amount
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#121212]">
      {/* Topbar */}

      <TransactionsTopbar
        onAddTransaction={() =>
          setIsModalOpen(true)
        }
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Page Content */}

      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col  xl:flex-row xl:items-center gap-4">
          <SearchTransaction 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        <div classNmae="flex-1">
          <TransactionFilters
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
            selectedPaymentMethod={
              selectedPaymentMethod
            }
            setSelectedPaymentMethod={
              setSelectedPaymentMethod
            }
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
          />
        </div>
        </div>

        <TransactionTable
          transactions={
            filteredTransactions
          }
          openReceiptModal={(receipt) => {
            setSelectedReceipt(receipt);
            setIsReceiptModalOpen(true);
          }}
          openDeleteModal={(id) => {
            setSelectedTransactionId(id);
            setIsDeleteModalOpen(true);
          }}
          openEditModal={(transaction) => {
            setSelectedTransaction(
              transaction
            );

            setIsEditModalOpen(true);
          }}
        />

        {isReceiptModalOpen && (
          <ViewReceiptModal
            receipt={selectedReceipt}
            onClose={() =>
              setIsReceiptModalOpen(false)
            }
          />
        )}

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
          onSubmit={
            handleAddTransaction
          }
          onClose={() =>
            setIsModalOpen(false)
          }
        />
      )}

      {/* Edit Transaction */}

      {isEditModalOpen && (
        <AddTransactionModal
          mode="edit"
          transaction={
            selectedTransaction
          }
          categories={categories}
          onSubmit={
            handleUpdateTransaction
          }
          onClose={() =>
            setIsEditModalOpen(false)
          }
        />
      )}

      {/* Delete Transaction */}

      {isDeleteModalOpen && (
        <DeleteTransactionModal
          transactionId={
            selectedTransactionId
          }
          onDelete={async () => {
            await fetchTransactions(
              currentPage
            );
          }}
          onClose={() =>
            setIsDeleteModalOpen(false)
          }
        />
      )}
    </div>
  );
};