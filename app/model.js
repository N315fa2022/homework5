var userInfo = {};

var cart = [];
// var bookList = [
//     {
//         bookTitle: "Todd Rocks",
//         bookAuthor: "Todd",
//         bookImg: "carepackage-removebg-preview.png",
//         price: "$19.99",
//     },

//     {
//         bookTitle: "Bruno Rocks",
//         bookAuthor: "Princess",
//         bookImg: "carepackage-removebg-preview.png",
//         price: "$10.99",
//     },

//     {
//         bookTitle: "Ariel Rocks",
//         bookAuthor: "Misha",
//         bookImg: "carepackage-removebg-preview.png",
//         price: "$20.99",
//     }
// ]
export function changePage(pageID, callback) {
    console.log(pageID);
    if (pageID =="" || pageID == "home") {
        // $.get(`pages/home.html`, function (data) {
            // console.log("data" + data);
            $("#app").html(data);
            callback();
        });
    }else if (pageID == "books"){
        $.get(`pages/${pageID}.html`, function (data){
            // console.log("data " + data);
            $("#app").html(data);
            // $.each(bookList, function(idx, book){
            //     $(".allBooks").append(`<div class="book">
            //     <div class="bookImage">
            //       <img src="images/${book.bookImg}" alt="" />
            //     </div>
            //     <div class="bookInfo">
            //       <h4>${book.bookTitle}</h4>
            //       <p>Author:${book.bookAuthor}</p>
            //       <p>Price: ${book.price}</p>
            //       <button id="${idx}">Buy</button>
            //     </div>
            //   </div>
            // </div>`);
            // })
            callback();
        });

    } else {
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