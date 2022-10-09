var userInfo = {};

var cart = [];
var bookList = [ // this is the booklist for the first section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
       bookPrice: "$99.99",
        bookImg: "books/twilight-box-set.jpg",

    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
       bookPrice: "$100",
        bookImg: "books/hp-box-set.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
       bookPrice: "$100",
        bookImg: "books/got-box-set.jpg",
    },
]
var bookListTwo = [ // this is the booklist for the second section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookPrice: "$27.99",
         bookImg: "books/finding-me.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookPrice: "$19.99",
         bookImg: "books/mlk-biography.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookPrice: "$17.99",
         bookImg: "books/elenor-roosevelt-biography.jpg",
    },
]

var bookListThree = [ // this is the booklist for the third section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookPrice: "$27.99",
         bookImg: "books/finding-me.jpg",
    },
]
export function changePage(pageID, callback) {
    console.log(pageID);
    if (pageID =="" || pageID == "home") {
        $.get(`pages/home.html`, function (data) {
            console.log("data" + data);
            $("#app").html(data);
            callback();
        });
    }else if (pageID == "books"){
        $.get(`pages/${pageID}.html`, function (data){
            // console.log("data " + data);
            $("#app").html(data);
            $.each(bookList,  function(idx, book){
                $(".bookPages").append(`<div class="book">
                <div class="bookImage">
                  <img src="images/${book.bookImg}" alt="" />
                </div>
                <div class="bookInfo">
                  <p class = "infoText">${book.bookInfo}</p>
                  <p class = "price">${book.bookPrice}</p>
                  <button id="${idx}">ADD TO CART</button>
                </div>
              </div>
            </div>`);
            })
            $.each(bookListTwo,  function(idx, book){
                $(".bookPagesTwo").append(`<div class="book">
                <div class="bookImage">
                  <img src="images/${book.bookImg}" alt="" />
                </div>
                <div class="bookInfo">
                  <p class = "infoText">${book.bookInfo}</p>
                  <p class = "price">${book.bookPrice}</p>
                  <button id="${idx}">ADD TO CART</button>
                </div>
              </div>
            </div>`);
            })
            callback();
        });

    }
     else {
        $.get(`pages/${pageID}.html`, function (data){
            console.log("data " + data);
            $("#app").html(data);
            $.each(cart, function (idx, cartItem){
                console.log(bookList[cartItem]);
                let book = bookList[cartItem];
            //     $(".items").append(`<div class="book">
            //     <div class="bookImage">
            //       <img src="images/${book.bookImg}" alt="" />
            //     </div>
            //     <div class="bookInfo">
            //       <h4>${book.bookTitle}</h4>
            //       <p>Author:${book.bookAuthor}</p>
            //       <p>Price: ${book.price}</p>
            //       <p>Qty: 1</p>
            //     </div>
            //   </div>
            // </div>`);
            })
    });
}
}

export function setUserInfo(userObject){
    userInfo = userObject;
    console.log(userInfo);
}

export function addToCart (bookIdx) {
    cart.push(bookIdx);
    $("#cartCount").html(cart.length.toString());
}