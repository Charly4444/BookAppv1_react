// creating similar books display element

import { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";


const Booksdisplay = () => {
    
    
    // reach out to data base at beginning of 'this' page
    // =======================================================
    const [thebooks, settheBooks] = useState([])
    
    const getAllBooks = async ()=> {
        const allBooks = await fetch('http://localhost:8080/books/all-books',
        {
            method: "GET",
            headers: {"Content-Type":"application/json"},
        }).then(res => res.json())
        if (thebooks.length === 0){

            settheBooks(allBooks)
        }
    }

    useEffect(()=>{
        getAllBooks()
        
    },[])

    // console.log(thebooks)


    /* BOOK SAMPLE
        bookid: 1
        booktitle: "To kill a Mockingbird"
​​        chars_per_page: 100
​​        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor odio vel orci tempus rutrum. Praesent feugiat lectus lorem, non rhoncus turpis consectetur a."
​​        lastpage: 0 
    */

    // const actionBooks = thebooks.filter((book)=>book.bookid===1)
    // const mythBooks = thebooks.filter((book)=>book.bookid===2)
    // console.log(actionBooks1)
    // console.log(mythBooks1)
    // =====================================================

    const contain0 = useRef(null);
    const contain1 = useRef(null);
    // const contain2 = useRef(null);
    // const contain3 = useRef(null);
    
    // get 'action' books
    // const actionBooks = data.filter((book)=>book.genre==='action')
    // const mythBooks = data.filter((book)=>book.genre==='myth')

    var motiontop = 0;
    var motiondown = 0;

    const slideLeftTop = () => {
        motiontop = (motiontop>=-84) ? motiontop-12 : -84;
        contain0.current.style.transform= `translatex(${motiontop}%)`;
    }
    const slideRightTop = () => {
        motiontop = (motiontop<=0) ? motiontop+12 : 0;
        contain0.current.style.transform= `translatex(${motiontop}%)`;
    }

    const slideLeftDown = () => {
        motiondown = (motiondown>=-84) ? motiondown-12 : -84;
        contain1.current.style.transform= `translatex(${motiondown}%)`;
    }
    const slideRightDown = () => {
        motiondown = (motiondown<=0) ? motiondown+12 : 0;
        contain1.current.style.transform= `translatex(${motiondown}%)`;
    }
    

    return <>
        <div className="bookpage-intro">
            {/* top */}
            <div className="carousel-section">
                <div className="carousel-section-header">
                    <h2 className="home-h2">Action Books</h2>
                </div>

                <div className="carousel carousel-container carousel-container-decorated slick-slider" id="welcome_carousel">
                    <button type="button" className="slick-prev slick-arrow slick-disabled" onClick={()=>slideLeftTop()}>
                        Previous
                    </button>

                    <div className="slick-list draggable">
                        <div className="slick-track"  ref={contain0}>

                            {/* this one book */}
                            {thebooks.map((book)=>{
                                return <div key={book.bookid} className="book carousel__item slick-slide slick-current slick-active">
                                    <div className="book-cover">
                                        {/* link to onebook page, when clicked -pass book*/}
                                        <Link state={book} to="/book">
                                            <img className="bookcover" loading="lazy" title={book.booktitle} alt={book.booktitle} src={book.image}/>
                                        </Link>
                                    </div>
                                    <div className="book-cta">
                                        <div className="cta-button-group">
                                            <a href="/" className="cta-btn cta-btn--missing" title="This book is currently checked out, please check back later.">
                                            {/* {book.checkedout?"Checked Out":"Available"} */}
                                                Read Book
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                })
                            }

                            {/* ============================================= */}
                        </div>

                    </div>


                    <button type="button" className="slick-next slick-arrow" onClick={()=>slideRightTop()}>
                        Next
                    </button>

                </div>
            </div>

            

            
            {/* down */}
            {/* <div className="carousel-section">
                <div className="carousel-section-header">
                    <h2 className="home-h2">Myth Books</h2>
                </div>

                <div className="carousel carousel-container carousel-container-decorated slick-slider" id="welcome_carousel">
                    <button type="button" className="slick-prev slick-arrow slick-disabled" onClick={()=>slideLeftDown()}>
                        Previous
                    </button>

                    <div className="slick-list draggable">
                        <div className="slick-track"  ref={contain1}>

                            
                            {thebooks.map((book)=>{
                                return <div key={book.bookid} className="book carousel__item slick-slide slick-current slick-active">
                                    <div className="book-cover">
                                        
                                        <Link state={book} to="/book">
                                            <img className="bookcover" loading="lazy" title={book.booktitle} alt={book.booktitle} src={book.image}/>
                                        </Link>
                                    </div>
                                    <div className="book-cta">
                                        <div className="cta-button-group">
                                            <a href="/" className="cta-btn cta-btn--missing" title="This book is currently checked out, please check back later.">
                                            
                                                Read Book
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                })
                            }

                            

                        </div>

                    </div>


                    <button type="button" className="slick-next slick-arrow" onClick={()=>slideRightDown()}>
                        Next
                    </button>

                </div>
            </div> */}
            
        </div>
    </>

}

export default Booksdisplay;
