export const Pagination = ({ currentPage, totalPages, onPageChange}) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">

      {/* Previous Button */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage-1)}
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#5B6360]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        Previous
      </button>


      {

    [...Array(totalPages)].map(

        (_,index)=>(

            <button

                key={index}

                onClick={()=>

                    onPageChange(

                        index+1

                    )

                }

                className={`

                rounded-xl
                px-4
                py-2
                text-sm
                font-semibold
                transition

                ${

                    currentPage===index+1

                    ?

                    "bg-[#2D5A4A] text-white"

                    :

                    `border
                    border-[#DCD6C7]
                    bg-white
                    text-[#1C2321]
                    hover:bg-[#F7F5EF]`

                }

                `}

            >

                {index+1}

            </button>

        )

    )

}


      {/* Next Button */}

      <button
        disabled={currentPage === totalPages}
        onChange={() => onPageChange(currentPage+1)}
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#5B6360]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        Next
      </button>

    </div>
  );
};