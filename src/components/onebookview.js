import { useRef } from "react";


const OneBookView = (props) => {
    const contain0 = useRef(null);
    const contain1 = useRef(null);
    const contain2 = useRef(null);

    const thebook = props.thebook;
    // console.log(thebook)

    const handleHide = ()=>{
        contain0.current.className = "book-description-content restricted-view restricted-height";
        contain2.current.className = "book-description read-less hidden";
        contain1.current.className = "book-description read-more";
    }
    const handleShow = ()=>{
        contain0.current.className = "book-description-content restricted-view";
        contain1.current.className = "book-description read-more hidden";
        contain2.current.className = "book-description read-less";
    }


    return <div className="oneBook-page">
        <div className="workDetails">
            <div className="editionCover">
                <div className="Tools">
                    <div id="read">
                        <div className="panel">
                            <div id="read-options" className="btn-notice read-options">
                                <div className="illustration edition-cover">
                
                                        <div className="SRPCover bookCover">
                                            <a href="/" className="coverLook" title={thebook.booktitle}>
                                                <img src={thebook.image} className="cover" alt={`Cover of ${thebook.booktitle}`} />
                                            </a>
                                        </div>
                                        <div className="cta-button-group">
                                            <a className="cta-btn cta-btn--preview" href="#bookPreview">
                                                Preview
                                            </a>
                                        </div>
                                        <div className="cta-button-group">
                                            <a href="/" title="Borrow this book" className="cta-btn cta-btn--available">
                                                Borrow
                                            </a>
                                        </div>
                                        <hr/>
                                        
                                        
                                </div>
                            </div>
                        </div>

                        <div className="panel desktop-vendor">
                            <div className="btn-notice">
                                <div className="cta-section">
                                    <p className="cta-section-title world-cat-link">Check nearby libraries</p>
                                    <ul className="book-locate-options">
                                        <li>
                                            <a href="/">Library.link</a>
                                        </li>
                                        <li>
                                            <a className="worldcat-link" href="/" title="check worldcats">WorldCat</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="editionAbout">
                <span className="nav-bar-wrapper sticky desktop-only">
                    <ul className="nav-bar work-menu">
                        <li className="selected">
                            <a href="/">Overview</a>
                        </li>
                        <li className="">
                            <a href="/">View all Editions</a>
                        </li>
                        <li className="">
                            <a href="/">Details</a>
                        </li>
                    </ul>
                </span>
                <div className="work-title-and-author desktop">
                    <span>
                        <div className="work-line">
                            An edition of <a href="/">{thebook.booktitle}</a>
                            <span className="first-published-date">(2014)</span>
                        </div>
                        <h1 className="work-title">{thebook.booktitle}</h1>
                        {/* <h2 className="edition-byline">
                            by <a href="/">{thebook.Author}</a>
                        </h2> */}
                        <ul className="readers-stats">
                            <li className="avg-ratings">
                                <span className="readers-stats__star">★</span><span className="readers-stats__star">★</span><span className="readers-stats__star">★</span>
                                <span className="readers-stats__star--half">★</span>
                                <span>3.88</span>
                                <span className="dot">·</span>
                            </li>
                            <li className="readers-stats__review-count">
                                <span>178</span> Ratings
                            </li>
                            <li className="reading-log-stat">
                                <span className="readers-stats__stat">3904</span>
                            </li>
                        </ul>
                    </span>
                </div>

                <div className="book-description-content restricted-view restricted-height" ref={contain0}>           
                    <p>Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.</p>
                    <p>As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different people: one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.</p>
                    <p>Bestselling author Sarah J. Maas's masterful storytelling brings this second book in her dazzling, sexy, action-packed series to new heights.</p>
                </div>
                <p className="book-description read-more" ref={contain1}>
                    <a className="read-more-button" data-after=" ▾" onClick={()=>handleShow()}>Read more</a>
                </p>
                <p className="book-description read-less hidden" ref={contain2}>
                    <a className="read-less-button" data-after=" ▲" onClick={()=>handleHide()}>Read less</a>
                </p>


                <div>
                    <div className="edition-omniline">
                        <div className="edition-omniline-item">
                            <div>Publish Date</div>
                            <span>2020</span>
                        </div>
                        <div className="edition-omniline-item">
                            <div>Publisher</div>
                            <span>
                            <a href="/" title="Show other books from Bloomsbury Publishing">Bloomsbury Publishing</a>
                            </span>
                        </div>
                        <div className="edition-omniline-item">
                            <div className="language">Language</div>
                            <span ><a href="/">English</a></span>
                        </div>
                        <div className="edition-omniline-item">
                            <div className="pages">Pages</div>
                            <span className="edition-pages">656</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
}

export default OneBookView;
