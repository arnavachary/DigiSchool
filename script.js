const userData = [
  {
    name: "Rebecca Hayes",
    title: "Geography ",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    name: "Anna Johnson",
    title: "Science ",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    name: "Peter Jones",
    title: "Maths ",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    name: "Petra Megaera",
    title: "English",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Bill Anderson",
    title: "History ",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
];

var teacher = document.getElementById("teacher");



for (let i = 0; i < userData.length; i++) {
  const element = userData[i];
  console.log(element.title)

  teacher.style.display = "flex"

  let col = createElement("div")
  col.setAttribute = ("class", "col")
  col.style.margin = "2vw 2vw "


  let name = createElement("p")
  name.innerText = element.name
  name.style.textAlign = "center"

  let image = document.createElement("img")
  image.setAttribute("src", element.url)
  image.style.width = "10vw"
  image.style.height = "10vw"
  image.style.borderRadius = "100%"
  image.style.margin = "auto"
  image.setAttribute("class" , "image")
  
  let title = document.createElement("p")
  title.innerText = element.title
  title.style.textAlign = "center";

  col.append(image,name,title)

  teacher.append(col)

}


const reviewData = [
  {
    name: "Antonio Sims",
    url: "https://randomuser.me/api/portraits/men/49.jpg",
    review:
      "Having an Amazon mentor by my side during my interview preparation was a game-changer. High-quality guidance and support were just one call away.",
    rating: "5/5",
  },
  // {
  //   name: "Brett Johnson",
  //   url: "https://randomuser.me/api/portraits/men/72.jpg",
  //   review:
  //     "Having an Amazon mentor by my side during my interview preparation was a game-changer. High-quality guidance and support were just one call away.",
  //   rating: "5/5",
  // },
  // {
  //   name: "Nathan Garrett",
  //   url: "https://randomuser.me/api/portraits/men/9.jpg",
  //   review:
  //     "Having an Amazon mentor by my side during my interview preparation was a game-changer. High-quality guidance and support were just one call away.",
  //   rating: "5/5",
  // },
];



for (let i = 0; i < reviewData.length; i++) {


  const elements = reviewData[i];
  
  let carousel = document.getElementById("carousel-2")

  let col1 = document.createElement("div")
   col1.setAttribute("class", "carousel-item")
  if (i == 0) { col1.setAttribute("class", "carousel-item active") }

  let col2 = document.createElement("div")
  col2.setAttribute("class","col2")
  
  let image1 = document.createElement("img")
  image1.setAttribute("src", elements.url)
  image1.style.margin = "10px 2vw"
  image1.style.width = "10vw"
  image1.style.height = "10vw"
  image1.style.borderRadius = "100%"

  let name1 = document.createElement("p")
  name1.innerText = elements.name

  let review = document.createElement("p")
  review.innerText = elements.review

  let rating = document.createElement("p")
  rating.innerText = elements.rating

  


  col1.append(image1, col2)
  col2.append(name1,review,rating)

  carousel.append(col1)
  

}


function createElement(ele) {
  let element = document.createElement(ele)
  return element
}


