import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Book1Image from "../../assets/book1.jpeg";
import Book2Image from "../../assets/book2.jpeg";
import Book3Image from "../../assets/book3.jpeg";
import Book4Image from "../../assets/book4.jpeg";
import Book5Image from "../../assets/book5.jpeg";
import Book6Image from "../../assets/book6.jpeg";
import Book7Image from "../../assets/book7.jpeg";
import Book8Image from "../../assets/book8.jpeg";
import Book9Image from "../../assets/book9.jpeg";
import Book10Image from "../../assets/book10.jpeg";
import Book11Image from "../../assets/book11.jpeg";
import Book12Image from "../../assets/book12.jpeg";
import samplePDF1 from "../../assets/pdf1.pdf"; // Import the PDF file

function BooksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiped, setSwiped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define books with the same PDF for all
  const books = [
    { image: Book1Image, title: "When You're Expecting", pdf: samplePDF1 },
    { image: Book2Image, title: "The Mama Natural", pdf: samplePDF1 },
    { image: Book3Image, title: "Bringing Up Bébé", pdf: samplePDF1 },
    { image: Book4Image, title: "The Whole-Brain Child", pdf: samplePDF1 },
    { image: Book5Image, title: "Expecting Better", pdf: samplePDF1 },
    { image: Book6Image, title: "Belly Laughs", pdf: samplePDF1 },
    { image: Book7Image, title: "Pregnancy Day by Day", pdf: samplePDF1 },
    { image: Book8Image, title: "The Birth Partner", pdf: samplePDF1 },
    { image: Book9Image, title: "Natural Childbirth", pdf: samplePDF1 },
    {
      image: Book10Image,
      title: "Happiest Baby on the Block",
      pdf: samplePDF1,
    },
    {
      image: Book11Image,
      title: "The Ima's Guide to Pregnancy",
      pdf: samplePDF1,
    },
    {
      image: Book12Image,
      title: "Childbirth and the Newborn",
      pdf: samplePDF1,
    },
  ];

  const booksPerPage = 3;
  const totalBooks = books.length;
  const bookRefs = useRef(books.map(() => React.createRef()));

  const nextBooks = () => {
    const nextIndex = Math.min(currentIndex + 1, totalBooks - booksPerPage);
    setCurrentIndex(nextIndex);
    setSwiped(true);
    scrollToBook(nextIndex);
  };

  const prevBooks = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
    setSwiped(true);
    scrollToBook(prevIndex);
  };

  const scrollToBook = (index) => {
    bookRefs.current[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    if (swiped) {
      const timer = setTimeout(() => {
        setSwiped(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [swiped]);

  useEffect(() => {
    bookRefs.current[currentIndex]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [currentIndex]);

  const openModal = (pdf) => {
    setIsModalOpen(pdf); // Pass the PDF link to the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-10 mt-20 bg-white">
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F38FB1] text-white rounded-full p-2 z-10"
          onClick={prevBooks}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className="flex overflow-hidden">
          <AnimatePresence>
            {books
              .slice(currentIndex, currentIndex + booksPerPage)
              .map((book, index) => {
                let scale, x;

                if (!swiped) {
                  scale = 1;
                  //y = 0;
                  x = 0;
                } else {
                  if (index === 1) {
                    scale = 1.1;
                    //y = -10;
                    x = 0;
                  } else {
                    scale = 0.9;
                    //y = 0;
                    x = index === 0 ? -100 : 100;
                  }
                }

                return (
                  <motion.div
                    key={index}
                    ref={bookRefs.current[currentIndex + index]}
                    className="flex flex-col items-center border p-4 rounded-lg shadow-md m-2 h-72 w-72 transition-opacity duration-500"
                    initial={{ opacity: 0, x: 100, y: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: -10,
                      scale,
                    }}
                    exit={{ opacity: 0, x, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <img
                      className="h-40 w-40 object-cover rounded-md mb-3"
                      src={book.image}
                      alt={`Book ${index + 1}`}
                    />
                    <h4 className="text-lg font-semibold mb-4 text-center h-16">
                      {book.title}
                    </h4>
                    <button
                      className="bg-[#F38FB1] py-2 rounded-full font-bold text-white w-full"
                      onClick={() => openModal(book.pdf)} // Open the modal with the corresponding PDF
                    >
                      Read More
                    </button>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F38FB1] text-white rounded-full p-2 z-10"
          onClick={nextBooks}
          disabled={currentIndex >= totalBooks - booksPerPage}
        >
          &gt;
        </button>
      </div>

      {/* PDF Viewer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closeModal}
            >
              X
            </button>
            <iframe
              src={isModalOpen} // Display the PDF inside an iframe
              width="600"
              height="400"
              title="PDF Viewer"
              className="border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksSection;
