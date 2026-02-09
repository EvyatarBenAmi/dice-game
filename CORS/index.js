const dataNews = await getData()
createNav()
homePage();

async function getData() {
    const localStorageData = JSON.parse(localStorage.getItem("apiData"))
    if (!localStorageData) {
        const url = await fetch("https://newsapi.org/v2/everything?q=news&language=he&from=2026-01-09&sortBy=publishedAt&apiKey=d1ded1c9017745ad92fe2abe67cb70c3")
        const { articles } = await url.json()
        localStorage.setItem("apiData", JSON.stringify(articles))
        return JSON.parse(localStorage.getItem("apiData"))
        // console.log(articles);
    } else {
        console.log(localStorageData);
        return localStorageData
    }
};

function createNav() {
    const nav = document.createElement("nav")
    const home = document.createElement("a")
    // home.href = "/home/home.html"
    home.textContent = "Home"
    home.addEventListener("click", (e) => {
        e.preventDefault();
        homePage();
    })
    nav.appendChild(home)

    const createNews = document.createElement("a")
    // createNews.href = "/CreatNews"
    createNews.textContent = "Creat News"
    createNews.addEventListener("click", (e) => {
        e.preventDefault();
        createNewsPage();
    })
    nav.appendChild(createNews)
    document.querySelector('header').appendChild(nav)
};

function createNewsPage() {
    document.getElementById("root").innerHTML = "";
    const creatNews = document.createElement("section");
    const h1 = document.createElement("h1")
    h1.textContent = "יצירת כתבה חדשה"


    creatNews.appendChild(h1)
    document.getElementById("root").appendChild(creatNews)
};



function homePage() {
    document.getElementById("root").innerHTML = "";
    dataNews.forEach(data => {
        const sectionNews = document.createElement("section")
        sectionNews.textContent = data.author
        sectionNews.addEventListener("click", (e) => {
            e.preventDefault
            pageNews(data)
        })

        const img = document.createElement("img")
        img.src = data.urlToImage

        const paragraf = document.createElement("p")
        paragraf.textContent = data.title

        paragraf.classList = "pDescrip"
        sectionNews.classList = "newsS"
        sectionNews.appendChild(img)
        sectionNews.appendChild(paragraf)
        document.getElementById("root").appendChild(sectionNews)
    });
};

function pageNews(data) {
    document.getElementById("root").innerHTML = "";
    const sectionPageN = document.createElement("section")
    sectionPageN.classList = "pageN"

    const imgP = document.createElement("img")
    imgP.src = data.urlToImage
    imgP.classList = "imageP"

    const title = document.createElement("h2")
    title.textContent = data.title

    const paragN = document.createElement("p")
    paragN.textContent = data.description

    sectionPageN.appendChild(imgP)
    sectionPageN.appendChild(title)
    sectionPageN.appendChild(paragN)
    document.getElementById("root").appendChild(sectionPageN)
};