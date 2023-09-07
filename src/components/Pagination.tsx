

export default function Pagination({totalPhotos, indexOfFirstPhoto, indexOfLastPhoto, nextPage, previousPage }: {totalPhotos: number, indexOfLastPhoto: number, indexOfFirstPhoto: number, previousPage: any, nextPage: any }) {

  return (
    <>
      <footer
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sticky bottom-0"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstPhoto + 1}</span> to <span className="font-medium">{indexOfLastPhoto}</span> of{' '}
            <span className="font-medium">{totalPhotos}</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={previousPage}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </button>
        </div>
      </footer>
    </>
  )

}

