cssVars();


// open and close nav

$('.nav-prompt').click(function() {

    if ($('.nav-inner').attr('aria-expanded') == 'false' ){

        $('.nav-inner').attr('aria-expanded', 'true');

    } else {

        $('.nav-inner').attr('aria-expanded', 'false');

    }

});


$('.nav-inner').click(function() {

    $('.nav-inner').attr('aria-expanded', 'false');

});


function myFunction(x) {

    x.classList.toggle("change");

}



// Gallery Modal

function imageGallery(){

    const modal = document.getElementById("galleryModal");

    const modalImage = document.getElementById("galleryLargeImage");

    const modalTitle = document.getElementById("galleryTitle");

    const modalDescription = document.getElementById("galleryDescription");

    const modalPrice = document.getElementById("galleryPrice");

    // const modalLink = document.getElementById("galleryLink");

    const closeButton = document.getElementById("galleryClose");


    if (!modal) {
        return;
    }


    const galleryItems = document.querySelectorAll(".gallery-item");


    galleryItems.forEach(function(item){


        item.addEventListener("click", function(e){

            e.preventDefault();


            modalImage.src = item.href;

            modalImage.alt = item.dataset.title;


            modalTitle.textContent = item.dataset.title;

            modalDescription.textContent = item.dataset.description;

            modalPrice.textContent = item.dataset.price;


            // modalLink.href = item.dataset.link;
// modalLink.href = item.dataset.link;


// Optional extra image

const extraImage = document.getElementById("galleryExtraImage");

if(item.dataset.extraImage){

    extraImage.src = item.dataset.extraImage;
    extraImage.style.display = "block";

} else {

    extraImage.style.display = "none";

}


// Optional PDF

const pdfLink = document.getElementById("galleryPdf");

if(item.dataset.pdf){

    pdfLink.href = item.dataset.pdf;
    pdfLink.style.display = "inline-block";

} else {

    pdfLink.style.display = "none";

}


// Optional external link

const externalLink = document.getElementById("galleryExternal");

if(item.dataset.external){

    externalLink.href = item.dataset.external;
    externalLink.style.display = "inline-block";

} else {

    externalLink.style.display = "none";

}

            modal.classList.add("active");


        });


    });


    closeButton.addEventListener("click", function(){

        modal.classList.remove("active");

    });


    modal.addEventListener("click", function(e){

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });


    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            modal.classList.remove("active");

        }

    });


}


imageGallery();



// active nav

function activeMenu(){

    var url = window.location.href;


    $('.nav-inner a').filter(function(){

        return this.href == url;

    }).addClass('active');

}


activeMenu();