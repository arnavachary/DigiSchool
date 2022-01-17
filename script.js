const userData = [
  {
    name: "Rebecca Hayes",
    title: "Geography teacher",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    name: "Anna Johnson",
    title: "Science Teacher",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    name: "Peter Jones",
    title: "Maths Teacher",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    name: "Bill Anderson",
    title: "English teacher",
    url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    name: "Bill Anderson",
    title: "History teacher",
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


function createElement(ele) {
  let element = document.createElement(ele)
  return element



}






